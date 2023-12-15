import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "danieharish@gmail.com" ,link:`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi+There&to=danieharish@gmail.com&body=body+goes+here`},
    { logo: "logo-whatsapp", text: "+91 9345844496",link:"https://wa.me/9345844496?text=hay+Mani" },
    {
      logo: "location",
      text: "Madurai",
      link:"https://www.google.com/maps/d/viewer?mid=1IpMIVqw64c8uaBVt1h-kM3yQoLw&hl=en&ll=9.902441419108333%2C78.11680549999998&z=12"
    },
  ];
   
  const form = useRef(null);
  const firstNameInput = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isEmpty = Array.from(formData.values()).every((value) => value.trim() === '');
    if(isEmpty)
    {
       alert('Please fill in the form fields.');
        firstNameInput.current.focus();
    }
    else{
    emailjs.sendForm('service_rcgkziz', 'template_57ffqnn', form.current, 'fFuV8gsegOvEPuqfv')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Email sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  };
  return (
    
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
       
        <div
          className="mt-0 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800  p-7  p-2 rounded-lg mx-auto "
        >
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              placeholder="Your Name"
              name="user_name"   
              ref={firstNameInput}      
            />
            <input 
              type="Email" 
              placeholder="Your Email Address"
              name="user_email"
            />

            <textarea 
              type="submit" 
              placeholder="Your Message" 
              name="message"
            />
            <button className="git pmy-button bg-gray-700 hover:bg-gray-500 text-gray-800 border border-gray-500 px-2 py-1 rounded-md transition duration-300 cursor-pointer" ><input style={{cursor:"pointer",color:"white"}} type="submit" value="Send" /></button>
            
            </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <a href={contact.link} target="_blank">
                  <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                </a>
                <a href={contact.link} target="_blank">
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
                </a>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
