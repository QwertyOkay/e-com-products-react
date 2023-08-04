import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Delivery({ showDelivery }) {
  return (
    <>
      {showDelivery && (
        <Modal closeModal={showDelivery}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showDelivery(false)}
          />
          <ModalTextWrap title={"Shipping"}>
            <h3>TO WHAT COUNTRIES DO YOU SHIP?</h3>
            <p>
              We can currently ship to certain European Union countries. We will
              be unable to deliver if your destination is in the EU but is not
              listed as an option in the country selector, or if you live
              outside the EU.
            </p>
            <h3>HOW MUCH DOES SHIPPING COST?</h3>
            <p>
              Because we are based in and serve the Baltic States region,
              deliveries to Estonia, Latvia, and Lithuania will be the quickest
              and least expensive, but we will always do our best to offer
              attractive and competitive shipping prices to all other EU
              destinations.
            </p>
            <p>
              The table below displays the estimated shipping costs and delivery
              time.
            </p>
            <p>
              Please keep in mind that shipping costs are determined by a
              variety of factors, including the shipping method selected and the
              weight of the parcel.
            </p>
            <h3> WHEN WILL I GET MY ORDER?</h3>
            <p>
              When your order is complete, you will be notified with an
              estimated delivery date. The shipping table displays the most
              recent delivery times. You can also check the status of your order
              by logging into your account.
            </p>
            <p>
              Please keep in mind that, while we make every effort to deliver
              your order within the estimated timeframe, despatch and delivery
              times are only estimates and are not guaranteed. Weekends and
              public holidays are not included in the stated delivery time.
            </p>
            <h3>WHAT IS THE TRACKING NUMBER FOR MY PACKAGE?</h3>
            <p>
              If you choose a tracking method, you will receive a track & trace
              number along with your 'Shipping Confirmation' email and SMS.
              There is also a link there where you can view the tracking
              information.
            </p>
            <p>
              Please keep in mind that it may take up to a day for you to see
              the tracking number online in some cases. However, errors can
              occur as a result of the carrier. As a result, we recommend that
              you contact us if you are unable to track your shipment using the
              provided track & trace number even 24 hours after dispatch.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Delivery;
