import Container from "components/Container/Container";
import Section from "components/Section/Section";
import styles from "./FotoSection.module.scss";
import HomeImg from "../../images/homeImg.jpg";

function FotoSection() {
  return (
    <Section>
      <Container>
        <div className={styles.wrap}>
          <img src={HomeImg} alt={HomeImg} />
          <p className={styles.text}>
            Are you tired of wearing the same old gloves to your sporting
            events? There is no need to look any further! Our online store has a
            large selection of gloves that will change the way you perform.
            We're not just selling gloves; we're selling an experience, a
            feeling, a connection with your equipment that will boost your
            confidence and elevate your performance.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default FotoSection;
