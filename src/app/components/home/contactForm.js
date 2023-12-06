 import React from 'react'
 import './contactForm.css'
const ContactForm = () => {
   return (


     <div className='generalStyles'>
<div className='containerP'>
    <div className='contact-box'>
        <div className='left'></div>
        <div className='right'>
            <h2>Contactame</h2>
            <input type='text' className='field rounded' placeholder='Tu nombre'></input>
            <input type='email' className='field rounded' placeholder='Tu email'></input>
            <input type='text' className='field rounded'  placeholder='Tu celular'></input>
            <textarea className='field area rounded' placeholder='Tu mensaje'></textarea>
            <button className='btn rounded-full'>Enviar</button>
        </div>
    </div>
</div>

     </div>


   )
 }
 
 export default ContactForm