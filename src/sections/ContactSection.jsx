import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatusMessage("Enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      console.log("Sending payload:", formData);

      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Raw response:", res);

      let payload = null;
      try {
        payload = await res.json();
      } catch (jsonErr) {
        console.warn("Response not JSON:", jsonErr);
      }

      console.log("Parsed response body:", payload);

      if (res.ok) {
        setStatusMessage("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const serverMsg =
          (payload && (payload.message || payload.error || JSON.stringify(payload))) ||
          `Server responded with status ${res.status}`;
        setStatusMessage(`Something went wrong: ${serverMsg}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatusMessage(
        `Network or CORS error: ${error.message || String(error)}. Check console/network tab.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2>Join the Story</h2>
          <p>
            Ready to bring your vision to life? Share your thoughts, questions, or ideas. We&apos;ll grab a
            coffee and begin the conversation that sparks something extraordinary.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name*
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Your email*
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label className="span-row">
            Your message*
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about the story"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>

          {statusMessage && (
            <p style={{ marginTop: "12px", fontWeight: 500 }}>{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
