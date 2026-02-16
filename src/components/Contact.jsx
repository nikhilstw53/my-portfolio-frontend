import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ✅ Use deployed backend URL
      const BACKEND_URL = "https://portfolio-backend-nine-lake.vercel.app";

      const res = await fetch(`${BACKEND_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black px-4"
    >
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-400">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl bg-gray-900 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl bg-gray-900 text-white"
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl bg-gray-900 text-white h-32"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-purple-600 py-3 rounded-xl"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-center mt-4">
            Message sent successfully ✅
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center mt-4">
            Failed to send message ❌
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;