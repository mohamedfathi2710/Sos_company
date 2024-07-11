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
        <h3>Envoyez-nous un message <img src={msg_icon} /></h3>
        <p>Nous sommes là pour répondre à vos questions, discuter de vos projets ou vous fournir toute l'assistance nécessaire. N'hésitez pas à nous contacter pour toute demande d'information supplémentaire. Nous attendons avec impatience de vous aider à trouver des solutions adaptées à vos besoins.</p>
        <ul>
            <li><img src={mail_icon} />Contact@gmail.com</li>
            <li><img src={phone_icon} />+228 99 29 6363</li>
            <li><img src={adresse_icon} />Route du countournement, Attiégou</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Votre Nom</label>
            <input type="text" name='name' placeholder='Entrez votre nom' required/>
            <label>Numéro de téléphone</label>
            <input type="tel" name='phone' placeholder='Entrez votre Numéro de téléphone' required/>
            <label>Écrivez vos messages ici</label>
            <textarea name="message" rows="6" placeholder='Écrivez vos messages' required></textarea>
            <button type='submit' className='btn dark-btn'>Envoyer <img src={right_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
