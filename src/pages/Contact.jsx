import { useEffect } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import Container from "components/Container/Container";
import Section from "components/Section/Section";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main>
        <Section variant="pages">
          <Container>
            <ContactForm title="Please enter your details below" />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default Contact;
