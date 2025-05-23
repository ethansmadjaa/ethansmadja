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
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactNotificationEmail = ({
  name,
  email,
  subject,
  message,
}: ContactNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>📧 Nouveau message de {name} - {subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header avec alerte */}
          <Section style={header}>
            <Text style={headerIcon}>📧</Text>
            <Text style={headerText}>NOUVEAU MESSAGE</Text>
            <Text style={headerSubtext}>Formulaire de contact</Text>
          </Section>
          
          {/* Contenu principal */}
          <Section style={content}>
            <Heading style={h1}>Nouveau contact depuis votre site</Heading>
            
            <Text style={introText}>
              Vous avez reçu un nouveau message via le formulaire de contact de votre portfolio.
            </Text>
            
            {/* Informations du contact */}
            <Section style={contactInfo}>
              <Text style={sectionTitle}>👤 Informations du contact</Text>
              
              <Section style={infoGrid}>
                <Section style={infoItem}>
                  <Text style={labelText}>Nom</Text>
                  <Text style={dataText}>{name}</Text>
                </Section>
                
                <Section style={infoItem}>
                  <Text style={labelText}>Email</Text>
                  <Text style={emailText}>{email}</Text>
                </Section>
              </Section>
            </Section>
            
            <Hr style={divider} />
            
            {/* Sujet du message */}
            <Section style={subjectSection}>
              <Text style={sectionTitle}>📋 Sujet</Text>
              <Text style={subjectText}>{subject}</Text>
            </Section>
            
            <Hr style={divider} />
            
            {/* Message */}
            <Section style={messageSection}>
              <Text style={sectionTitle}>💬 Message</Text>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>
            
            {/* Actions rapides */}
            <Section style={actionsSection}>
              <Text style={actionsTitle}>Actions rapides :</Text>
              <Text style={actionText}>• Répondre directement à {email}</Text>
              <Text style={actionText}>• Archiver dans votre système de gestion</Text>
              <Text style={actionText}>• Ajouter aux contacts si pertinent</Text>
            </Section>
          </Section>
          
          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Cet email a été généré automatiquement depuis votre portfolio
            </Text>
            <Text style={footerTimestamp}>
              Reçu le {new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f1f5f9",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
  padding: "20px",
  minHeight: "100vh",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  margin: "0 auto",
  maxWidth: "650px",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#dc2626",
  background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const headerIcon = {
  fontSize: "32px",
  margin: "0 0 8px 0",
};

const headerText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0",
  textTransform: "uppercase" as const,
};

const headerSubtext = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "14px",
  fontWeight: "400",
  margin: "4px 0 0 0",
};

const content = {
  padding: "32px",
};

const h1 = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const introText = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 32px 0",
  textAlign: "center" as const,
};

const contactInfo = {
  margin: "0 0 24px 0",
};

const sectionTitle = {
  color: "#374151",
  fontSize: "14px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  margin: "0 0 16px 0",
  textTransform: "uppercase" as const,
};

const infoGrid = {
  display: "flex",
  gap: "16px",
  margin: "0",
};

const infoItem = {
  flex: "1",
  margin: "0",
};

const labelText = {
  color: "#9ca3af",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.5px",
  margin: "0 0 4px 0",
  textTransform: "uppercase" as const,
};

const dataText = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  color: "#111827",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  padding: "12px 16px",
};

const emailText = {
  backgroundColor: "#dbeafe",
  border: "1px solid #bfdbfe",
  borderRadius: "8px",
  color: "#1e40af",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  padding: "12px 16px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #e5e7eb",
  margin: "24px 0",
};

const subjectSection = {
  margin: "0 0 24px 0",
};

const subjectText = {
  backgroundColor: "#fef3c7",
  border: "1px solid #fcd34d",
  borderRadius: "8px",
  color: "#92400e",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0",
  padding: "16px 20px",
};

const messageSection = {
  margin: "0 0 32px 0",
};

const messageBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px",
};

const messageText = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "28px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const actionsSection = {
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "8px",
  margin: "0 0 24px 0",
  padding: "16px 20px",
};

const actionsTitle = {
  color: "#166534",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px 0",
};

const actionText = {
  color: "#15803d",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "4px 0",
};

const footer = {
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e5e7eb",
  padding: "20px 32px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0 0 4px 0",
};

const footerTimestamp = {
  color: "#9ca3af",
  fontSize: "11px",
  fontStyle: "italic",
  margin: "0",
};

export default ContactNotificationEmail;