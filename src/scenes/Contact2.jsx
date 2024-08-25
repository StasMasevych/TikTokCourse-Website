import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  return (
    <form action="https://formspree.io/f/mjkbjqza" method="POST">
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
