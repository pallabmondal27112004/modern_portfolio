import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/send-email/', {
        email,
        message
      });

      if (response.data.success) {
        alert('✅ Email sent successfully!');
      } else {
        alert('❌ Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Error sending email');
    }
  };

  return (
    <form onSubmit={handleSend} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3>Send Message</h3>
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br /><br />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      /><br /><br />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ContactForm;
