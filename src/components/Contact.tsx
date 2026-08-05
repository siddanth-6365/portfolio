import { profile } from "@/data";
import ContactForm from "./ContactForm";
import Section from "./Section";
import Socials from "./Socials";

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <p className="max-w-[34rem] text-[15px] leading-relaxed text-fg/75">
        Open to interesting backend, infrastructure and AI work. The fastest way
        to reach me is{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-fg underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
        >
          {profile.email}
        </a>
        .
      </p>

      <div className="mt-6">
        <Socials />
      </div>

      <ContactForm />
    </Section>
  );
}
