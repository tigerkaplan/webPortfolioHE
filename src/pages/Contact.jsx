import { FaLocationArrow, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



const Contact = () => {
  return (
    <div name="contact"
      className="w-full h-screen  bg-[#DDD0C8] flex justify-center items-center relative p-4 t-5 overflow-y-scroll z-0 ">

      <form
        action=""
        className='flex flex-col max-w-[600px] w-full'
      >
        <div
          className='pb-2'>
          <p
            className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e]  '> Contact </p>
          <p className=' text-[#282828] py-4'>
            Submit the form below or send me an email
          </p>
        </div>
        <input type="text" placeholder='Name' name='name' className=' p-2 text-sm ml- bg-[#e7ddd8]' />
        <input type="email" placeholder='Email' className="my-4 p-2 bg-[#e7ddd8]" />
        <textarea name="message" id="" cols="30" rows="5" placeholder='Message' className="p-2 bg-[#e7ddd8] ">
        </textarea>
        <button className="py-2 text-4 hover:shadow  focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899] w-full">  Let's Collaborate
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