import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/lib/styles.scss";
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "utils";
import notices from "helpers/Notification";
import Button from "components/Button/Button";
import styles from "./PaymentForm.module.scss";

const PaymentForm = ({ showPayment }) => {
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setPayment({ issuer });
    }
  }

  function onInputFocus({ target }) {
    setPayment((prev) => ({ ...prev, focused: target.name }));
  }

  function onInputUpdate({ target }) {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setPayment((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setPayment({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      issuer: "",
      focused: "",
      formData: null,
    });
    notices.showSuccess("Thank you for your order!");
    showPayment(false);
  }
  const { name, number, expiry, cvc, focused, issuer } = payment;

  return (
    <div key="Payment">
      <Cards
        //   number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={handleCallback}
      />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            type="tel"
            name="number"
            className={styles.formControl}
            placeholder="Card Number"
            pattern="[0-9\s]{16,22}"
            maxLength={22}
            required
            onChange={onInputUpdate}
            onFocus={onInputFocus}
            value={number}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            className={styles.formControl}
            placeholder="Name"
            required
            onChange={onInputUpdate}
            onFocus={onInputFocus}
            value={name}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <input
              type="text"
              name="expiry"
              className={styles.formControl}
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
              value={expiry}
            />
          </div>
          <div className={styles.col}>
            <input
              type="text"
              name="cvc"
              className={styles.formControl}
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
              value={cvc}
            />
          </div>
        </div>
        <input type="hidden" name="issuer" value={issuer} />
        <Button variant="btnPayment" title="Confirm" />
      </form>
    </div>
  );
};

export default PaymentForm;
