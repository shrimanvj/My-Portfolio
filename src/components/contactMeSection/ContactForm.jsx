import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_hldgvh2", "template_bsjxcb6", form.current, {
        publicKey: "6jqzgVS1nhnReBRv2",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("✅ Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-lightGrey">
      {success && (
        <p className="mb-4 text-green-400 font-semibold text-center">{success}</p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 bg-darkSecondary p-6 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-darkInput px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-darkInput px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="rounded-lg bg-darkInput px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan resize-none"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-lg hover:bg-cyan hover:text-black transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
