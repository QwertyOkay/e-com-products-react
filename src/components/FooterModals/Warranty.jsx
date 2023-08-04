import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Warranty({ showWarranty }) {
  return (
    <>
      {showWarranty && (
        <Modal closeModal={showWarranty}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showWarranty(false)}
          />
          <ModalTextWrap title={"Warranty"}>
            <p>
              Our store believes in the quality of our sports gloves and stands
              behind them. To give our customers peace of mind, we provide a
              comprehensive warranty.
            </p>
            <p>
              Our gloves come with a limited warranty against defects in
              materials and workmanship for [insert warranty duration here]. If
              you have any problems with your gloves during this time, please
              contact us right away and we will do everything we can to make
              things right.
            </p>
            <p>
              Please keep in mind that our warranty does not cover normal wear
              and tear, misuse, or accidents. We recommend that you follow our
              care instructions to help extend the life of your gloves and keep
              them in good condition.
            </p>
            <p>
              Please contact our customer support team by phone or email during
              business hours to file a warranty claim. We will collaborate with
              you to determine the best course of action, whether that is to
              repair or replace your gloves.
            </p>
            <p>
              Thank you for visiting our store in search of sports gloves. We
              appreciate your business and are dedicated to providing you with
              the best products and service possible.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Warranty;
