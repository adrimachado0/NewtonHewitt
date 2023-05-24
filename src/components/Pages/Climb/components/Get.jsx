import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Get = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8njusqm', 'template_l1y6ahk', form.current, 'TXY2sKxYNDl2BI6C-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="get flex flex-column align-items">
        <div className="get-title">
            <p>Get ready to climb higher - our application cohort opens soon!</p>
            <p className="sub-parrafo ">Get notified for new programs in Europe and the US - sign up now!</p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
                <p className="legend sub-parrafo">Email adress</p>
                <input className="input-text" type="email" name="user_email"  />
                <input className="input-submit" type="submit" value="Send"/>
        </form>

    </div>
  )
}
export default Get