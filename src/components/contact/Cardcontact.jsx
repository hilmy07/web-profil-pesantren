import React from 'react'
import './Cardcontact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Cardcontact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wkrmpjh', 'template_kcmqfd8', form.current, 'AZw6SGCz0Ku1LgRIU')
      
      e.target.reset()
    };
  
    const phoneNumber = '6281215850455'; // Replace with the recipient's phone number
    const message = 'Hello, this is a WhatsApp message!'; // Replace with your message
    const encodedMessage = encodeURIComponent(message);
    return (
      <section id='contact'>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>darulmusthafa@gmail.com</h5>
            <a href="mailto:haidaraly98@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Darul Musthafa</h5>
            <a href="https://m.me/muhammadhilmy.haidaraly" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>081215850455</h5>
            <a href={`https://wa.me/${phoneNumber}/?text=${encodedMessage}`} target='blank'>Send a message</a>
          </article>
        </div>
        {/* END{ OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Cardcontact