import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "20035b0d-505f-45ae-972d-d2cacfb77b12");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submited Successfully")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }

    
  };
  return (
    <div id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-10 text-gray-700 dark:text-white'>
      <Title title='Connect with Us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-400 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-0' />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Your Email</p>
          <div className='flex pl-3 rounded-lg border border-gray-400 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input type="email" name="email" required placeholder='Enter your email' className='w-full p-3 text-sm outline-0' />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Enter Message</p>
          <div className='flex rounded-lg border border-gray-400 dark:border-gray-600'>
            <textarea type="text" name="message" required placeholder='Enter your message' rows={8} className='w-full p-3 text-sm outline-0' />
          </div>
        </div>

        <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>Submit <img className='w-4' src={assets.arrow_icon} alt="" /></button>
      </form>
      <span>{result}</span>
    </div>
  )
}

export default Contact
