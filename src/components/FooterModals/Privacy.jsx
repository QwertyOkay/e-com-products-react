import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Privacy({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal closeModal={showPrivacy}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={"Privacy"}>
            <p>
              This Privacy Policy outlines how we will handle any personal data,
              including but not limited to payment information and other
              information we collect from you or other sources or that you
              provide to us ("Information"), in connection with your access and
              use of PlaysMode. We understand how important the Information is
              to you, and we are committed to protecting and respecting your
              privacy. Please read the following carefully to understand our
              information practices. By using our Services, you agree that your
              information will be handled in accordance with this Privacy
              Policy.
            </p>
            <p>
              In this Privacy Policy, references to "we," "our," or "us" (or
              words to that effect) refer to Go Sport, which is owned by Al Mana
              Fashion Group W.L.L. References to "user" or "you" (or similar)
              refer to you as an individual or legal entity, as the case may be.
            </p>
            <h3>WHAT DATA WE MAY COLLECT FROM YOU</h3>
            <p>
              You can visit and browse our website without providing us with any
              personally identifiable information; however, in order to fulfill
              your order, we must collect some personally identifiable
              information.
            </p>
            <p>
              When you make a purchase at our store, we will collect the
              following information:
            </p>
            <ul>
              <li>Your complete name</li>
              <li>The email address</li>
              <li>Addresses for billing and shipping</li>
              <li>telephone number</li>
            </ul>
            <p>
              Even if you do not intend to make a purchase, you may wish to
              voluntarily share this or similar information with us. Entering a
              contest or sweepstakes through our website, signing up for our
              newsletter, or voluntarily registering on our website to use
              features such as a wishlist are examples of these situations.
            </p>
            <h3>WHAT HAPPENS TO YOUR PERSONAL INFORMATION?</h3>
            <p>
              The primary reason for collecting your personally identifiable
              information is to fulfill your order.
            </p>
            <p>
              We may disclose your personal information to third-party service
              providers and other affiliated organizations solely for the
              purpose of completing tasks and providing services to you on our
              behalf (delivery, payment processing).
            </p>
            <p>
              If you have previously agreed to us using your personal
              information for direct marketing purposes, we may use your
              personal information to send you promotional content that we
              believe you will find interesting (you may change your mind at any
              time by following the unsubscribe / opt-out links provided in all
              communications from us). Alternatively, you can send us an email.)
            </p>
            <h3>CONTROLLING YOUR PERSONAL DATA</h3>
            <p>
              You can limit the collection and use of your personal information
              in the following ways:
            </p>
            <p>
              When filling out a form on the website, look for the box that
              allows you to indicate that you do not want the information to be
              used for direct marketing purposes. <br />
              If you previously agreed to us using your personal information for
              direct marketing purposes, you may change your mind at any time by
              clicking on the unsubscribe link in the email you receive or
              changing the communication settings in your customer account.
            </p>
            <p>
              You can request that we erase your personal information and close
              your account if you no longer want us to use your personal
              information or provide you with the services.
            </p>
            <h3>HOW LONG WILL WE KEEP YOUR INFORMATION?</h3>
            <p>
              We keep your personal information for as long as it is required to
              provide services to you and others, as well as to comply with our
              legal obligations. You can request that we erase your personal
              information and close your account if you no longer want us to use
              your personal information or provide you with the services.
            </p>
            <h3>USE OF COOKIES</h3>
            <p>
              A cookie is a string of data that a website stores on a visitor's
              computer and that the visitor's browser sends to the website every
              time the visitor returns.
            </p>
            <p>
              Overall, cookies assist us in providing a better website by
              allowing us to track which pages you find useful and which you do
              not. A cookie gives us no access to your computer or any
              information about you other than the information you choose to
              share with us. You have the option to accept or decline cookies.
              Most web browsers accept cookies by default, but you can usually
              change your browser settings to decline cookies if you prefer.
              However, disabling cookies may prevent you from fully utilizing
              the website.
            </p>
            <h3>YOUR SAFETY</h3>
            <p>
              We are committed to keeping your information safe. We have put in
              place appropriate physical, electronic, and managerial procedures
              to safeguard and secure the information we collect online in order
              to prevent unauthorized access or disclosure.
            </p>
            <p>
              We reserve the right to change this policy at any time by updating
              this page. You should revisit this page on a regular basis to
              ensure that you are satisfied with any changes.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Privacy;
