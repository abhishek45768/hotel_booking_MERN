import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact_us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_19q2j8t', 'template_cjof0rp', form.current, 'Rk24k0iswdEhg5MXF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='c_container'>
      <div className='Left_container'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" className='c_lab' required/>
          <label>Email</label>
          <input type="email" name="user_email"className='c_lab' required/>
          <label>Message</label>
          <textarea name="message" required/>
          <input type="submit" value="Send" className='c_button'/>
        </form>
      </div>
      
    </div>
  );
};

export default Contact_us;
