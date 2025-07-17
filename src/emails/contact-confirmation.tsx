import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

interface ContactConfirmationEmailProps {
  name: string;
}

export const ContactConfirmationEmail = ({
  name,
}: ContactConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Merci de m'avoir contacté - Ethan Smadja</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header moderne avec couleur du site */}
          <Section style={header}>
            <Text style={headerText}>ETHAN SMADJA</Text>
            <Text style={headerSubtext}>Software Engineer</Text>
          </Section>

          {/* Contenu principal */}
          <Section style={content}>
            <Heading style={h1}>Merci pour votre message ✨</Heading>

            <Text style={greeting}>Bonjour {name},</Text>

            <Text style={text}>
              J'ai bien reçu votre message et je vous en remercie. Je m'engage à vous répondre dans les plus brefs délais.
            </Text>

            {/* Card style comme sur le site */}
            <Section style={highlightCard}>
              <Text style={highlightText}>
                💬 Votre message est important pour moi et sera traité avec attention
              </Text>
            </Section>

            <Text style={text}>
              En attendant, n'hésitez pas à consulter mon portfolio ou mes projets récents.
            </Text>

            {/* Bouton style site web */}
            <Section style={buttonContainer}>
              <Link href="https://www.ethansmadja.com" style={button}>
                <Text style={buttonText}>Visiter mon portfolio</Text>
              </Link>
            </Section>

            <Hr style={divider} />

            <Text style={signature}>
              Cordialement,<br />
              <strong>Ethan Smadja</strong>
            </Text>
          </Section>
        </Container>

        {/* Footer épuré */}
        <Section style={footerSection}>
          <Text style={footerText}>
            Cet email a été envoyé automatiquement. Merci de ne pas y répondre directement.
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f8fafc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
  padding: "40px 20px",
  minHeight: "100vh",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
};

const header = {
  backgroundColor: "#00A", // Couleur principale du site
  padding: "32px",
  textAlign: "center" as const,
};

const headerText = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
};

const headerSubtext = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  fontStyle: "italic",
};

const content = {
  padding: "40px 32px",
};

const h1 = {
  color: "#00A", // Couleur principale du site
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "34px",
  margin: "0 0 32px 0",
  textAlign: "center" as const,
};

const greeting = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 24px 0",
};

const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "20px 0",
};

// Card style comme sur le site
const highlightCard = {
  backgroundColor: "#EEEEFF", // Couleur de fond des badges du site
  border: "1px solid #e0e7ff",
  borderRadius: "12px",
  margin: "32px 0",
  padding: "24px",
};

const highlightText = {
  color: "#00A", // Couleur principale
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

// Bouton style site web
const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#00A",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1",
  padding: "12px 24px",
  textDecoration: "none",
  textAlign: "center" as const,
};

const buttonText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const divider = {
  border: "none",
  borderTop: "1px solid #e5e7eb",
  margin: "40px 0 32px 0",
};

const signature = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
};

const footerSection = {
  margin: "32px auto 0",
  maxWidth: "600px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0",
};

export default ContactConfirmationEmail;