import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-orange to-blue inline-block w-full'>
        <div className="container mx-auto px-4">
            <div className='py-[14px] flex items-center justify-center md:justify-between flex-col md:flex-row'>
                <div className='md:mt-[10px] order-2 md:order-1 text-center md:text-start'>
                    <p className='text-light-black text-sm'>&copy; 2023, Copywrite. All rights reserved by QodeMatrix</p>
                </div>

                <div className='order-1 md:order-2 p-[8px] md:p-0'>
                    <ul className='flex items-center gap-5'>
                        <li className=''>
                            <a href="#" className='text-light-black text-sm'>Documention</a>
                        </li>
                        <li className=''>
                            <a href="#" className='text-light-black text-sm'>Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer