import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("contact.sendMessage", () => {
  it("should accept valid contact message", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.sendMessage({
      name: "João Silva",
      email: "joao@example.com",
      phone: "(11) 99999-9999",
      subject: "Dúvida sobre serviços",
      message: "Gostaria de saber mais sobre terapia individual.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject invalid email", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.sendMessage({
        name: "João Silva",
        email: "email-invalido",
        message: "Teste",
      })
    ).rejects.toThrow();
  });
});

describe("team.list", () => {
  it("should return team members list", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.team.list();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("blog.listPublished", () => {
  it("should return published blog posts", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.listPublished();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("blog.getBySlug", () => {
  it("should return undefined for non-existent slug", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.getBySlug({ slug: "post-inexistente" });

    expect(result).toBeUndefined();
  });
});

describe("appointments.create", () => {
  it("should accept valid appointment request", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    const result = await caller.appointments.create({
      patientName: "Maria Santos",
      patientEmail: "maria@example.com",
      patientPhone: "(11) 98888-8888",
      serviceType: "terapia-individual",
      appointmentDate: futureDate.toISOString(),
      notes: "Primeira consulta",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject invalid email in appointment", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.appointments.create({
        patientName: "Maria Santos",
        patientEmail: "email-invalido",
        patientPhone: "(11) 98888-8888",
        serviceType: "terapia-individual",
        appointmentDate: new Date().toISOString(),
      })
    ).rejects.toThrow();
  });
});
