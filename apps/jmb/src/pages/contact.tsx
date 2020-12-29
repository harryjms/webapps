import SiteHead from "../components/SiteHead";
import axios from "axios";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Contact = () => {
  const [sending, setSending] = useState(0);
  const [errors, setErrors] = useState<{ [K: string]: string }>({});
  const [fieldName, setFieldName] = useState("");
  const [fieldEmail, setFieldEmail] = useState("");
  const [fieldMessage, setFieldMessage] = useState("");

  const addError = (field: string, message: string) => {
    setErrors((state) => {
      let newState = { ...state };
      newState[field] = message;
      return newState;
    });
  };

  const removeError = (field: string) => {
    setErrors((state) => {
      let newState = { ...state };
      delete newState[field];
      return newState;
    });
  };

  const handleSend = async () => {
    if (!fieldName || !fieldEmail || !fieldMessage) {
      if (!fieldName) {
        addError("name", "Name is required");
      } else {
        removeError("name");
      }

      if (!fieldEmail) {
        addError("email", "Email is required");
      } else {
        removeError("email");
      }

      if (!fieldMessage) {
        addError("message", "Message is required");
      } else {
        removeError("message");
      }
    } else {
      setSending(1);
      try {
      } catch (err) {
        setSending(2);
        console.error(err);
      }
    }
  };

  const disableForm = sending > 0;

  return (
    <>
      <SiteHead title="Contact" />
      <h1>Contact</h1>
      <div className={styles.form}>
        <div className={styles.row}>
          <TextInput
            name="name"
            label="Name"
            value={fieldName}
            onChange={(e, v) => setFieldName(v)}
            disabled={disableForm}
            error={errors["name"]}
            required
          />
          <TextInput
            name="email"
            label="E-mail address"
            value={fieldEmail}
            onChange={(e, v) => setFieldEmail(v)}
            disabled={disableForm}
            error={errors["email"]}
            required
          />
          <TextInput
            name="message"
            label="Message"
            rows={7}
            value={fieldMessage}
            onChange={(e, v) => setFieldMessage(v)}
            disabled={disableForm}
            error={errors["message"]}
            required
          />
          <Button onClick={handleSend} disabled={disableForm}>
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
