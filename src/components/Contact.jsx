import React from 'react'
import Swal from 'sweetalert2'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "57417ab9-a58d-4f8c-a67c-d470dedc2f84");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your Message Sent Successfully!",
                icon: "success"
              });
        }
      };
  return (
    <div id='contact'>
        <div class="h-screen overflow-x-hidden w-full bg-gradient-to-tr from-sky-300 bg-[#F0DAC2] to-[#F6E3CD]">
        <div className="container">
        <div className="bg-white h-[400px] mt-16 grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <img src="https://i.pinimg.com/564x/c7/a6/e4/c7a6e431771d628ce87855725bca8c85.jpg" alt="" />
            </div>
            <div className=" bg-[#5FC3CA] px-10">
              <form  onSubmit={onSubmit}>
                  <h1 className="text-center text-xl font-bold pt-2 text-blue cursor-pointer">Contact Us</h1>
                  <div>
                    <label className='block text-sm text-white font-semibold capitalize'>full name</label>   
                    <input name="name" type="text" className='w-full rounded-sm border-blue border-b bg-white/70 border-offset-4 outline-none p-1 text-sm '  placeholder='Enter Your Name' required />
                </div>
                <div className="input-box">
                    <label className='block text-sm text-white font-semibold capitalize pt-2 pb-2'>Email Address</label>   
                    <input name="email" type="email" className='w-full border-blue bg-white/70 border-b border-offset-4 outline-none p-1 text-sm'  placeholder='Enter Your Email' required />
                </div>
                <div className="block">
                    <label className='flex font-semibold text-white text-sm my-2 '>Your Message</label>   
                    <textarea name="message" className='w-full h-20 bg-white/70  outline-none  text-sm'  placeholder='Enter Your Message '  required></textarea>
                </div>
                <div className="flex justify-center mt-2">
                <button className='rounded-lg px-10 py-2 mb-4 sm:mb-0 bg-orange font-semibold text-white text-sm md:text-lg hover:text-gray-200 hover:bg-blue ' type='submit'> Send Message</button>
                </div>
              </form>
            </div>
        </div>
        </div>
        </div>

    </div>

  )
}

export default Contact