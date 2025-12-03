import { Link } from "wouter";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{CLINIC_INFO.name}</h3>
            <p className="text-sm opacity-90 mb-4">
              {CLINIC_INFO.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre">
                  <a className="hover:opacity-80 transition-opacity">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos">
                  <a className="hover:opacity-80 transition-opacity">Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/equipe">
                  <a className="hover:opacity-80 transition-opacity">Equipe</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:opacity-80 transition-opacity">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="hover:opacity-80 transition-opacity">Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {CLINIC_INFO.address.street}<br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:opacity-80 transition-opacity">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:opacity-80 transition-opacity">
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
