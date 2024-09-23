import React from 'react'

import bg_contact from '../assets/bg-contact.jpg'

function Contact() {
  return (
    <div>
      <div className='mb-20 grid grid-cols-2 mx-40 gap-16 text-gray-800 flex items-center'>
        <div className='w-full h-[520px] bg-cover bg-center bg-no-repeat bg-red-300 rounded-2xl'
            style={{ backgroundImage:`url(${bg_contact})`}}>
        </div>
        <div className='flex flex-col justify-center gap-5 bg-red-100 shadow-category pl-10 h-[400px] rounded-2xl'>
          <h3 className='text-5xl font-bold text-red-400'>Contact Us</h3>
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-medium'>Our Store</h3>
            <p>123 Floral Avenue,<br/>
                Rosewood District,<br/>
                Garden City, GC 45678</p>
            <p>Tel: +1 (555) 123-4567<br/>
                Email: contact@deflore.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact