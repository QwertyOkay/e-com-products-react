import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function GDPR({ showGDPR }) {
  return (
    <>
      {showGDPR && (
        <Modal closeModal={showGDPR}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showGDPR(false)}
          />
          <ModalTextWrap title={"GDPR Policy"}>
            <p>
              Welcome to our platform. This GDPR Policy ("Policy") outlines how
              we collect, use, and disclose information about you when you use
              our services. It is important to carefully read and understand
              this Policy before using our services. By accessing or using our
              services, you acknowledge that you have read, understood, and
              agreed to be bound by this Policy. If you disagree with any part
              of this Policy, please refrain from using our services.
            </p>
            <p>Information We Collect</p>
            <p>
              Personal Information: When you use our services, we may collect
              personal information from you, such as your name, email address,
              and any other information you voluntarily provide during the
              registration process. We only collect the necessary information to
              provide our services and ensure a personalized experience.
            </p>
            <p>
              Usage Information: We automatically collect certain information
              about your usage patterns when you interact with our services.
              This may include your IP address, browser type, operating system,
              device information, log data, and other usage details. This
              information helps us analyze user behavior and improve our
              services.
            </p>
            <p>
              Cookies and Similar Technologies: We use cookies and similar
              technologies to enhance your experience on our platform. These
              technologies collect information about your interactions with our
              services, such as pages visited, time spent on each page, and
              actions taken. Cookies help us analyze trends, customize content,
              and improve overall functionality.
            </p>
            <p>How We Use Your Information</p>
            <p>
              Service Provision: We use the collected information to provide and
              improve our services, personalize your experience, respond to
              inquiries, and fulfill your requests. Your information enables us
              to optimize our platform and tailor it to meet your needs.
            </p>
            <p>
              Communication: We may use your information to communicate with
              you, including sending important updates, notifications, and
              promotional materials related to our services. You have the option
              to opt out of receiving promotional communications.
            </p>
            <p>
              Legal Compliance: We may use and disclose your information as
              required by applicable laws, regulations, legal processes, or
              governmental requests. Additionally, we may use and disclose your
              information to enforce our terms of service, protect our rights,
              privacy, safety, or property, and respond to emergencies.
            </p>
            <p>Sharing of Your Information</p>
            <p>
              Service Providers: We may share your information with trusted
              third-party service providers who assist us in operating our
              services, conducting business activities on our behalf, and
              providing you with a seamless experience. These service providers
              are contractually obligated to maintain the confidentiality and
              security of your information.
            </p>
            <p>
              Legal Requirements: We may disclose your information to comply
              with applicable laws, regulations, legal processes, or
              governmental requests. This includes responding to subpoenas,
              court orders, or other legal demands for information.
            </p>
            <p>Data Retention and Security</p>
            <p>
              Data Retention: We retain your personal information for as long as
              necessary to fulfill the purposes outlined in this Policy, unless
              a longer retention period is required or permitted by law. We will
              securely dispose of your information when it is no longer needed.
            </p>
            <p>
              Data Security: We implement reasonable security measures to
              protect your information from unauthorized access, disclosure,
              alteration, or destruction. We employ industry-standard practices
              to safeguard your data. However, please be aware that no method of
              transmission over the internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
            <p>Updates to This Policy</p>
            <p>
              We reserve the right to update or modify this Policy at any time.
              We will notify you of any material changes to this Policy by
              posting the updated version on our website or through other
              reasonable means. Your continued use of our services after the
              effective date of any changes to this Policy constitutes your
              acceptance of such changes.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions, concerns, or requests regarding this
              Policy or our privacy practices, please contact us at
              info@starburstmania.com. We take your privacy seriously and will
              address any inquiries promptly and professionally.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default GDPR;
