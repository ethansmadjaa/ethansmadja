import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
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
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section>
            <Text style={text}>You have received a new message from your website contact form.</Text>
            
            <Text style={labelText}>Name:</Text>
            <Text style={dataText}>{name}</Text>
            
            <Text style={labelText}>Email:</Text>
            <Text style={dataText}>{email}</Text>
            
            <Text style={labelText}>Subject:</Text>
            <Text style={dataText}>{subject}</Text>
            
            <Text style={labelText}>Message:</Text>
            <Text style={dataText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "20px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const labelText = {
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "16px 0 4px 0",
};

const dataText = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
  padding: "8px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
};

export default ContactNotificationEmail; 