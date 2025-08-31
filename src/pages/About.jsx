import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever is a modern e-commerce web application designed for seamless online shopping. Built with a clean UI and responsive design, it offers users a smooth browsing and checkout experience. From curated collections to secure payment integration, the site delivers everything you need to explore and purchase stylish, high-quality products from the comfort of your home.</p>
            <p>Forever is a modern, responsive e-commerce website designed to offer a seamless and intuitive online shopping experience. Built with a clean aesthetic and user-friendly interface, Forever brings simplicity and style to the way people discover and purchase products online.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Forever, our mission is to simplify and elevate the online shopping experience by offering a clean, user-friendly, and responsive platform that makes discovering and purchasing products easy and enjoyable.</p>
            <p>We aim to blend modern design with functional simplicity, ensuring that every visitor — whether browsing from a phone, tablet, or desktop — enjoys a fast, intuitive, and seamless journey from product discovery to checkout.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we are committed to delivering a high-quality, user-centric e-commerce experience. Every feature and interaction is carefully tested and refined to ensure reliability, usability, and performance across all devices and browsers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600' >At Forever, convenience is at the core of our design philosophy. We’ve built a shopping experience that’s simple, fast, and hassle-free — whether you're browsing for the latest styles or placing an order.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we believe that great service is just as important as great products. That’s why we’re dedicated to delivering a smooth, helpful, and responsive customer support experience — before, during, and after every purchase.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
