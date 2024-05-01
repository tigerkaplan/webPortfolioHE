/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from 'emailjs-com';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJs service ID, template ID, and Public Key
    const serviceId = 'personalPortfolio';
    const templateId = 'pPortfolio';
    const publicKey = 'HK0vJts2mRdncIKnX';


    // Create a new object that contains dynamic template parameters

    const templateParams = {
      from_name: name,
      email_id: email,
      to_name: "Husniye",
      message: message,
    };

    //Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

  };

  return (
    <div name="contact"
      className="w-full h-screen  bg-[#DDD0C8] flex justify-center items-center relative p-4 t-5 overflow-y-scroll z-0 ">

      <form onSubmit={handleSubmit}
        action=""
        className='emailForm flex flex-col max-w-[600px] w-full'
      >
        <div
          className='pb-2'>
          <p
            className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e]  '> Contact </p>
          <p className=' text-[#282828] py-4'>
            Submit the form below or send me an email
          </p>
        </div>
        <input
          type="text"
          placeholder='Your Name'
          value={name}
          className=' p-2 text-sm ml- bg-[#e7ddd8]'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          className="my-4 p-2 bg-[#e7ddd8]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder='Message'
          value={message}
          className="p-2 bg-[#e7ddd8]"
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type='submit' className="py-2 text-4 hover:shadow  focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899] w-full">  Let's Collaborate
        </button>

        <div className="p-2 w-full pt-8 m border-t border-gray-200 text-center ">
          <a href="" className="text-sm text-[#282828]o-500">if you don't like forms please try to one of the following links</a>
        </div>







        <div className="bg-[#e7ddd8] flex items-center gap-6 justify-center">
          <span className="inline-flex justify-between">
            <a className="mx-6 my-1" href="mailto:husniyeerparun.dev@gmail.com"><HiOutlineMail size={30} />
            </a>
            <a className="mx-6 my-1" href="https://github.com/tigerkaplan"><FaGithub size={30} />
            </a>
            <a className="mx-6 my-1" href="https://www.linkedin.com/in/husniyeerparundev/">
              <FaLinkedin size={30} />
            </a>

          </span>
        </div>

      </form>
    </div>


  )
}

export default Contact