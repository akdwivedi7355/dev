import { useRef } from "react";
import useSetActiveOnVisible from "src/Hooks/App/useSetActiveOnVisible";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import ContactForm from "./ContactForm/ContactForm";
import s from "./ContactSection.module.scss";

const ContactSection = () => {
  const contactSectionRef = useRef();
  useSetActiveOnVisible(contactSectionRef, "Contact", {
    threshold: 0.5,
  });

  return (
    <section ref={contactSectionRef} className={s.contactSection} id="contact">
      <div className="container">
        <SectionTitle
          name="Contact 📞"
          description={`Feel free to Contact me by submitting the form below and
          I will get back to you as soon as possible`}
        />

        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
