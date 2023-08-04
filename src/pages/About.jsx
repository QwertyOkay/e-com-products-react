import { useEffect } from "react";
import Container from "components/Container/Container";
import Section from "components/Section/Section";
import styles from "./About.module.scss";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main>
        <Section variant="pages">
          <Container>
            <h1 className={styles.title}>About us</h1>
            <div className={styles.textWrap}>
              <p>
                Hello and welcome to Leprechaunoti.com, where the fun never
                comes to an end!
              </p>
              <p>
                With our fantastic range of novelty gifts, we're all about
                making you laugh and bringing a little joy into your life. We've
                got you covered whether you're looking for something hilarious
                for your bestie's birthday or just want to treat yourself to
                something completely out of the ordinary.
              </p>
              <p>
                Our gift scientists are always on the lookout for the latest and
                greatest in novelty gifts, from wacky gadgets to belly-achingly
                funny gag gifts. We handpick each item to ensure that it is
                unique, fun, and guaranteed to make you smile.
              </p>
              <p>
                Gift shopping can be a chore, but not with us! Our website is
                extremely user-friendly, and we offer numerous payment and
                shipping options to meet your specific requirements. Besides
                that, if you require assistance, our customer service team is
                always available.
              </p>
              <p>
                So, what are you holding out for? Let's get this party going!
                Visit Leprechaunoti.com to see our fantastic selection of
                novelty gifts. We guarantee you will not be disappointed!
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default Contact;
