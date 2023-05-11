import React, { useState } from 'react';
import { send } from 'emailjs-com';



export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Talon Meyer',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_b95yus9',
      'template_klxxdxr',
      toSend,
      'fKepqLb4KSa9fdlEn'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
  <div class="d-flex" onSubmit={onSubmit}>
    <form class="row">
      <div className="form-group">
        <label for="fromNameTextArea">Your Name</label>
        <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} className="form-control" id="formControlName" placeholder="Your name"/>
      </div>
      <div className="form-group">
        <label for="emailInput">Your Email Address</label>
        <input type="text" name="reply_to" value={toSend.reply_to} onChange={handleChange} className="form-control" id="emailInput" placeholder="name@example.com"/>
      </div>
      <div className="form-group">
        <label for="messageTextArea">Message</label>
        <textarea name="message" value={toSend.message} onChange={handleChange} className="form-control" id="messageTextArea" rows="3" placeholder="Your message here"></textarea>
        <button className="btn btn-primary" type="submit">Send</button>
      </div>
    </form>
  </div>
  );
}
