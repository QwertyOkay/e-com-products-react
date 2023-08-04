import Section from "components/Section/Section";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <Section variant="hero"></Section>
    </div>
  );
}

export default Hero;
