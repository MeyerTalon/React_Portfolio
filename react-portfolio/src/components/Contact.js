import React, { useState, useEffect, useRef } from 'react';
import { send } from 'emailjs-com';

const styles = {
  warning: {
    color: 'red'
  }
}

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

  const ref = useRef();

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  const validateEmail = (inputText) => {
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const [warning, setWarning] = useState(<p></p>);
  useOutsideClick(ref, () => {
    if (toSend.from_name === '' || toSend.message === '' || !validateEmail(toSend.reply_to)) {
      setWarning(<p style={styles.warning}>Please enter a valid email and fill in the name and message sections.</p>);
    } else {
      setWarning(<p></p>);
    }
  });

  return (
  <div className="d-flex" onSubmit={onSubmit}  ref={ref}>
    <form className="row">
      <div className="form-group">
        <label>Your Name:</label>
        <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} className="form-control" id="formControlName" placeholder="Your name"/>
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input type="text" name="reply_to" value={toSend.reply_to} onChange={handleChange} className="form-control" id="emailInput" placeholder="name@example.com"/>
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea name="message" value={toSend.message} onChange={handleChange} className="form-control" id="messageTextArea" rows="3" placeholder="Your message here"></textarea>
        {warning}
        <button className="btn btn-primary" type="submit">Send</button>
      </div>
    </form>
  </div>
  );
}