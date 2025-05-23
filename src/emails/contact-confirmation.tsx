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
          {/* Header avec accent coloré */}
          <Section style={header}>
            <Text style={headerText}>ETHAN SMADJA</Text>
          </Section>
          
          {/* Contenu principal */}
          <Section style={content}>
            <Heading style={h1}>Merci pour votre message ✨</Heading>
            
            <Text style={greeting}>Bonjour {name},</Text>
            
            <Text style={text}>
              J'ai bien reçu votre message et je vous en remercie. Je m'engage à vous répondre dans les plus brefs délais.
            </Text>
            
            <Section style={highlightBox}>
              <Text style={highlightText}>
                💬 Votre message est important pour moi et sera traité avec attention
              </Text>
            </Section>
            
            <Text style={text}>
              En attendant, n'hésitez pas à consulter mon portfolio ou mes projets récents.
            </Text>

            <Link href="https://www.ethansmadja.com">
              <Text style={link}>
                https://www.ethansmadja.com/
              </Text>
            </Link>
            
            <Hr style={divider} />
            
            <Text style={signature}>
              Cordialement,<br />
              <strong>Ethan Smadja</strong>
            </Text>
            
            <Text style={footer}>
              Software Engineer
            </Text>
          </Section>
        </Container>
        
        {/* Footer */}
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
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
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
};

const header = {
  backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  background: "#667eea",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const headerText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  letterSpacing: "2px",
  margin: "0",
  textTransform: "uppercase" as const,
};

const content = {
  padding: "32px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "34px",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
};

const greeting = {
  color: "#374151",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 20px 0",
};

const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const highlightBox = {
  backgroundColor: "#f0f9ff",
  border: "1px solid #e0f2fe",
  borderRadius: "8px",
  margin: "24px 0",
  padding: "16px 20px",
};

const link = {
  color: "#0c4a6e",
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const highlightText = {
  color: "#0c4a6e",
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const divider = {
  border: "none",
  borderTop: "1px solid #e5e7eb",
  margin: "32px 0 24px 0",
};

const signature = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 8px 0",
};

const footer = {
  color: "#6b7280",
  fontSize: "14px",
  fontStyle: "italic",
  margin: "0",
};

const footerSection = {
  margin: "20px auto 0",
  maxWidth: "600px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};

export default ContactConfirmationEmail;