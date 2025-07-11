import "./ContactForm.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "43c803ce-c04e-4fb6-b015-f30ee26d4fe9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      console.log("Raw fetch response:", response);

      const res = await response.json();
      console.log("Parsed JSON response:", res);

      if (res.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Something went wrong. Response message: " + res.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };
  return (
    <section className="contact-section">
      <h2>Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className="input-row-first">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="field"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="input-row-second">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="input-row-third">
          <label>Message</label>
          <textarea
            name="message"
            className="field"
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
