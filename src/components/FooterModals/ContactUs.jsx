import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Contact({ showContact }) {
  return (
    <>
      {showContact && (
        <Modal closeModal={showContact}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showContact(false)}
          />
          <ModalTextWrap title={"Contact us"}>
            <p>
              We appreciate hearing from our customers! Please do not hesitate
              to contact us if you have any questions, comments, or concerns.
              During business hours, our friendly and knowledgeable customer
              support team is available to assist you via email or phone.
            </p>
            <p>
              Contact us at info@playsmode. <br /> Phone: +44 7981 336156
              <br />
              Monday through Friday, 9 a.m. to 5 p.m. GMT
            </p>
            <p>
              If you prefer to contact us in writing, please write to us at the
              following address in the United Kingdom:
            </p>
            <p>Your Online Store Manchester M25 0HG, UK</p>
            <p>
              We will try to respond to your inquiry within 24 hours. Thank you
              for selecting Your Online Store for all of your glove
              requirements!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Contact;
