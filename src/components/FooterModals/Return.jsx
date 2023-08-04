import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Return({ showReturn }) {
  return (
    <>
      {showReturn && (
        <Modal closeModal={showReturn}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showReturn(false)}
          />
          <ModalTextWrap title={"Return"}>
            <h3>
              IS IT POSSIBLE TO RETURN OR EXCHANGE AN UNOPEENED/UNUSED PRODUCT?
            </h3>
            <p>
              We provide a 30-day money-back guarantee. We want to make certain
              that you always get what you want. If you decide that a product
              you ordered isn't what you need and you haven't opened it, we can
              issue a refund, exchange, or store credit in the amount of the
              product's price. It is entirely up to you what you choose.
            </p>
            <p>
              To return an item, please send an email to support@playsmode with
              your order number and reason for return. You will receive an
              e-mail in response with a confirmation of the return request, a
              return form, and a RET number.
            </p>
            <p>
              Return postage is at your own expense and risk, but we can assist
              by arranging pickup for a fee equal to the cheapest shipping rate
              we have for your destination.
            </p>
            <p>
              When your package is returned to us, you will be contacted again
              about an alternate product, credit, or refund.
            </p>
            <h3>
              CAN I RETURN OR EXCHANGE A PRODUCT THAT HAS BEEN OPENED OR USED?
            </h3>
            <p>
              We only accept unused and unopened products for return. If you
              have a complaint about a product, please contact our customer
              service.
            </p>
            <h3>HOW DO I RETURN AN ITEM OR ORDER?</h3>
            <p>
              To return an item, please send an email to support@playsmode with
              your order number and reason for return. You will receive an
              e-mail in response with a confirmation of the return request, a
              return form, and a RET number.
            </p>
            <h3>IS THE PRODUCT INCORRECT, DAMAGED OR MISSING?</h3>
            <p>
              First and foremost, please accept our apologies for any shipping
              errors. Our warehouse tracks and scans each product before packing
              it to eliminate any packing errors, but mistakes do happen from
              time to time; however, we pride ourselves on being able to respond
              quickly and efficiently to any problems.
            </p>
            <p>
              If you received an incorrect or damaged product or discovered an
              error in your order, please contact our customer service. We will
              correct the error as soon as possible, and you can be confident
              that you will receive the correct product at no additional cost.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Return;
