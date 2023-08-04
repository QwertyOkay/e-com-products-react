import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal closeModal={showTerms}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title="Terms">
            <p>
              These terms and conditions apply to both browsing our site and
              purchasing goods and/or services from us.
            </p>
            <p>
              The terms "we," "us," and "our" refer to the site's owner in these
              terms and conditions.
            </p>
            <p>
              The policies, terms, and conditions set forth below (the
              'Agreement') govern the use of the site. Please read them
              thoroughly. Acceptance of the Agreement is indicated by your use
              of the site. You should not use the site if you do not agree to
              any of the terms and conditions of this Agreement. These terms and
              conditions shall take precedence over any subsequent terms or
              conditions included with any purchase order, whether or not signed
              by us.
            </p>
            <p>
              We value the security of the information you provide on the site,
              and we will take reasonable technical and organizational
              precautions to prevent loss, misuse, or interference, as well as
              unauthorised access, modification, or disclosure of your Personal
              Information. For more information on how we handle your Personal
              Information, please see our Privacy Policy, which is incorporated
              into this Agreement.
            </p>
            <p>
              We reserve the right to change the site and the terms of the
              Agreement at any time. Amendments will take effect immediately
              after being posted on the site [except for current orders]. Your
              continued use of the site following such notification will
              constitute your agreement to be bound by the amended terms and
              conditions.
            </p>
            <p>
              If any part of this Agreement is deemed null and void, illegal, or
              unenforceable, only that part of the Agreement will be excluded,
              while all other terms will remain in effect.
            </p>
            <p>
              Without our prior written and signed consent, you may not assign
              or novate any rights or obligations under this Agreement.
            </p>
            <h3>TERMS OF SERVICE</h3>
            <p>These terms apply while browsing the site.</p>
            <h3>COOKIES</h3>
            <p>
              To collect information while you browse the site, we will use
              "cookies" and session data. You can tell your browser to reject
              all cookies or to notify you when one is sent. However, if you
              refuse to accept cookies, you may be unable to use certain parts
              of the site.
            </p>
            <h3>UPDATES TO THE WEBSITE</h3>
            <p>
              We strive to give our visitors the best possible experience when
              they visit the site.
            </p>
            <h3>RICING</h3>
            <p>
              Prices are subject to change at any time without notice. Prices,
              products, and specifications are believed to be accurate and
              reliable at the time of publication, but are subject to change
              without notice. There are no price difference returns, refunds, or
              credits available.
            </p>
            <h3>TERMS AND CONDITIONS OF SALE</h3>
            <h3>PERSONAL INFORMATION AND REGISTRATION</h3>
            <p>
              When making a purchase through the site, we will require personal
              information such as your name, address, contact numbers, and
              e-mail address ('Personal Information'), and you will be given two
              options when providing such information.
            </p>
            <p>
              To use the Guest account, your Personal Information will be
              deleted and used only for this transactional purchase and related
              correspondence. You will be unable to update your delivery address
              or obtain information about the fulfillment of your order through
              the website. When you create an account and become a member, the
              site saves your Personal Information for future visits. Your
              personal information will be securely stored on dedicated servers.
            </p>
            <p>
              You can also change your information at any time and easily check
              the status of your order. Your information may be used to contact
              you about special offers and new products. You have the option to
              opt out of receiving such marketing communications.
            </p>
            <p>
              We will also require you to use the consent tick box and warrant
              that:
            </p>
            <ul>
              <li>
                <p>
                  You are at least 18 years old or have parental/guardian
                  permission to use or purchase from this site;
                </p>
              </li>
              <li>
                <p>
                  you have the legal right and ability to enter into a legally
                  binding agreement with us;
                </p>
              </li>
              <li>
                <p>
                  and you will use the site in accordance with all terms,
                  conditions, and policies set forth on the site.
                </p>
              </li>
            </ul>
            <p>
              When you buy something from the site, your basic personal
              information is sent to Global Collect (the payment gateway).
            </p>
            <h3>GET IN TOUCH WITH US</h3>
            <p>
              Contact us using the form below, or send an email to
              support@playsmode.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
