
const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#DDD0C8] text-[#282828]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>About</p>
                    </div>
                    <div>     </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='text-4xl font-bold text-right'>
                        <p>Hi, I'm Husniye, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p> I am passionate about building excellent software that improves the lives of those around me. I specialise in creating software for clients rangin from individuals and small-business all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips/</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;