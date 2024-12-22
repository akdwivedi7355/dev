import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { contactFormBg } from "src/Assets/images";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSendMessage();
  }

  async function handleSendMessage() {
    try {
      sendEmailJsMessage(formRef.current);
      setName("");
      setEmail("");
      setMessage("");
      console.log("Message sent successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={s.contactForm} ref={formRef} onSubmit={handleSubmit}>
      <div className={s.form}>
        <div className={s.input}>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={s.input}>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={s.input}>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            cols="30"
            rows="10"
            value={message}
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className={s.submitButton}>
          Submit
        </button>
      </div>

      <div className={s.imgHolder}>
        <img
          src={contactFormBg}
          alt={`Black-and-white photograph of a scenic mountainous
            landscape with snow-covered peaks and a valley shrouded
            in mist. Pine trees are visible in the foreground,
            enhancing the serene and dramatic atmosphere.`}
          loading="lazy"
        />
      </div>
    </form>
  );
};
export default ContactForm;

export function sendEmailJsMessage(formElement) {
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;

  emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, formElement, {
    publicKey: VITE_PUBLIC_KEY,
  });
}
