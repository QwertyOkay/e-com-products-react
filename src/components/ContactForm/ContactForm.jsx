import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Button from "components/Button";
import notices from "helpers/Notification";
import styles from "./ContactForm.module.scss";

function ContactForm({ title }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short")
      .matches(
        /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'\s]+$/,
        "Only alphabets are allowed"
      )
      .required("This field is required"),
    email: Yup.string()
      .email("Incorrect format")
      .matches(
        /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
        "Incorrect format"
      )
      .required("This field is required"),
    message: Yup.string()
      .min(3, "Text is too short")
      .required("This field is required"),
  });

  const handleSubmit = (values, actions) => {
    if (values) {
      actions.resetForm();
      notices.showSuccess("The email has been sent");
      return;
    }
  };

  return (
    <>
      <h3 className={styles.formTitle}>{title}</h3>
      <div className={styles.formWrapper} data-form>
        <span className={styles.formImg} />
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched, dirty, isValid }) => (
            <Form className={styles.contactForm}>
              <label className={styles.formGroup}>
                <Field
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <div className={styles.errorMsg}>{errors.name}</div>
                )}
              </label>
              <label className={styles.formGroup}>
                <Field
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div className={styles.errorMsg}>{errors.email}</div>
                )}
              </label>
              <label className={styles.formGroup}>
                <Field
                  as="textarea"
                  type="textarea"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Message"
                />
                {errors.message && touched.message && (
                  <div className={styles.errorMsg}>{errors.message}</div>
                )}
              </label>

              <Button
                variant={
                  !(dirty && isValid) ? "disabledBtnContact" : "btnContact"
                }
                type={"submit"}
                title="Submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

ContactForm.propTypes = {
  title: PropTypes.string,
};

export default ContactForm;
