import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactMessage, getActiveTeamMembers, getPublishedBlogPosts, getBlogPostBySlug, createAppointment } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendMessage: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          subject: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        await createContactMessage({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          subject: input.subject || null,
          message: input.message,
        });
        return { success: true };
      }),
  }),

  team: router({
    list: publicProcedure.query(async () => {
      return await getActiveTeamMembers();
    }),
  }),

  blog: router({
    listPublished: publicProcedure.query(async () => {
      return await getPublishedBlogPosts();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogPostBySlug(input.slug);
      }),
  }),

  appointments: router({
    create: publicProcedure
      .input(
        z.object({
          patientName: z.string().min(1),
          patientEmail: z.string().email(),
          patientPhone: z.string().min(1),
          serviceType: z.string().min(1),
          appointmentDate: z.string(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createAppointment({
          patientName: input.patientName,
          patientEmail: input.patientEmail,
          patientPhone: input.patientPhone,
          serviceType: input.serviceType,
          appointmentDate: new Date(input.appointmentDate),
          notes: input.notes || null,
          teamMemberId: null,
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
