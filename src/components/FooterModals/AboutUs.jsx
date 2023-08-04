import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function About({ showAbout }) {
  return (
    <>
      {showAbout && (
        <Modal closeModal={showAbout}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showAbout(false)}
          />
          <ModalTextWrap title={"About us"}>
            <p>
              Welcome to Playsmode, where gloves are more than just accessories
              - they're a necessity for realizing your athletic goals. Whether
              you're a novice or a seasoned athlete, our hand-picked gloves will
              help you perform at your best.
            </p>
            <p>
              We understand that each sport has its own set of requirements,
              which is why we offer a variety of gloves for various activities.
              Our gloves are designed to provide the ideal balance of comfort,
              durability, and performance in a variety of environments,
              including the boxing ring and the ski slopes. We are constantly
              updating our collection in order to bring you the best gloves from
              around the world.
            </p>
            <p>
              But we're more than just a store; we're a group of dedicated
              athletes who understand the value of high-quality gear. Every
              glove we sell is tested and approved to ensure that it meets our
              high standards for functionality and style. Our dedication to
              quality extends beyond the gloves themselves; we are also
              committed to providing exceptional customer service that goes
              above and beyond.
            </p>
            <p>
              We understand that shopping online can be intimidating, but we're
              here to make the process as simple and stress-free as possible.
              Our website was created with you in mind, with simple navigation
              and detailed product descriptions. And if you have any questions
              or concerns, our helpful customer service team is only a click
              away.
            </p>
            <p>
              So, whether you want to replace your old gloves or try something
              new, we've got you covered. Shop with us today and see for
              yourself how high-quality gloves can improve your performance.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default About;
