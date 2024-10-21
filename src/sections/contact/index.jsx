import "./index.css";
import FormInput from "../../components/formInput";
import { useState } from "react";
import Heading from "../../components/heading";
import Text from "../../components/text";
import Button from "../../components/button";
import contactModel from "../../models/contact.model";

const Contact = () => {
  const [formData, setFormData] = useState(contactModel);

  const handleChangeObj = (e) => {
    const updatedObject = { ...formData };
    updatedObject[e.target.name] = e.target.value;
    setFormData(updatedObject);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    setFormData(contactModel);
    const formDataText = JSON.stringify(formData);
    alert(`Do something with data :-) ${formDataText} `);
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-info-section">
          <Heading level={2}>Contact</Heading>
          <Text>
            {" "}
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form className="contact-form">
          <div className="contact-form-name">
            <FormInput
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChangeObj}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChangeObj}
            />
          </div>
          <FormInput
            type="tel"
            name="number"
            placeholder="Phone Number"
            style="full"
            value={formData.number}
            onChange={handleChangeObj}
          />
          <FormInput
            name="interestedIn"
            placeholder="What Service are you interested in?"
            style="full"
            value={formData.interestedIn}
            onChange={handleChangeObj}
          />
          <Button onClick={handleSubmitData} className="primary-button">
            SUBMIT NOW
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
