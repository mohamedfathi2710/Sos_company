import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import adresse_icon from '../../assets/adresse_icon.png'
import right_arrow from '../../assets/right_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "86a69794-34cf-45e4-a500-789375695262");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quos, consequuntur fugiat laudantium facere assumenda nulla necessitatibus quia, labore debitis culpa quibusdam iusto sunt excepturi obcaecati. Aperiam excepturi rerum voluptatum.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
            <li><img src={phone_icon} alt="" />+22845879654</li>
            <li><img src={adresse_icon} alt="" />adresse</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={right_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
