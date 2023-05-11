import React, { useRef } from 'react'
const testimonials = [
    {
      name: 'Alice Smith',
      review: 'Their web design is amazing! They were able to create a website that perfectly represented my brand and was easy to navigate. The team was a pleasure to work with and delivered the project on time and within budget.',
      company: 'XYZ Corp.'
    },
    {
      name: 'Bob Johnson',
      review: 'Their product design is exceptional! They were able to take my vision and turn it into a beautiful product that was both functional and stylish. The team was easy to work with and kept me informed throughout the entire design process.',
      company: 'ABC Inc.'
    },
    {
      name: 'Charlie Brown',
      review: 'I recently worked with them on a web design project and was blown away by their creativity and attention to detail. They were able to capture exactly what I wanted and deliver a beautiful website in a timely manner. Their product design skills are equally impressive - I highly recommend them for all your design needs.',
      company: 'LMN LLC'
    },
    {
      name: 'David Jones',
      review: 'Their web design skills are top-notch! They were able to create a website that perfectly represented my business and helped me stand out from the competition. The team was professional, responsive, and easy to work with - I would definitely recommend them to anyone looking for a great design team.',
      company: 'PQR Inc.'
    },
    {
      name: 'Eva Green',
      review: 'Their product design is outstanding! They were able to take my ideas and turn them into a beautiful product that was both functional and stylish. The team was responsive and easy to work with, and I would definitely use their services again in the future.',
      company: 'JKL LLC'
    },
    {
      name: 'Frank Williams',
      review: 'I recently used their services for web design and was impressed by their attention to detail and ability to capture my vision. The team was easy to work with and delivered the project on time and within budget. I would definitely recommend them for any web design needs.',
      company: 'MNO Corp.'
    },
    {
      name: 'Grace Lee',
      review: 'Their product design skills are exceptional! They were able to create a product that was both functional and stylish, and delivered it within the agreed timeframe. The team was professional and easy to work with, and I would definitely recommend them for any design needs.',
      company: 'QRS Inc.'
    },
  ];
  
const Testimonial = () => {
  const sliderBox = useRef()
  const handleSlideRight = () => {
    const width = sliderBox.current.clientWidth
    navigator.vibrate(500)
    sliderBox.current.scrollLeft = sliderBox.current.scrollLeft + width
  }
  const handleSlideLeft = () => {
    const width = sliderBox.current.clientWidth
    navigator.vibrate(500)
    sliderBox.current.scrollLeft = sliderBox.current.scrollLeft - width
  }
    return (
    <>
    <div className='py-8 sm:px-4 md:px-0 lg:px-0'>
    <div className='gap-4 my-8 flex'>
        <i onClick={handleSlideLeft} className='bx p-2 rounded-full border border-slate-200 bx-chevron-left'></i>
        <i onClick={handleSlideRight} className='bx p-2 rounded-full border border-slate-200 bx-chevron-right'></i>
    </div>
    <div ref={sliderBox} className='w-full gap-4 scroll-smooth duration-1000 overflow-hidden flex'>
        {testimonials.map((items,index)=>{
            return(
                <div key={index} className='border min-w-[300px] p-4 rounded-md'>
                    <div className='flex pb-4 items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-gray-100'></div>
                        <div>
                            <p className=' text-vsm font-bold'>{items.name}</p>
                            <p className=' text-vsm font-light'>{items.company}</p>
                        </div>
                    </div>
                    <p className=' text-xsm font-light'>{items.review}</p>
                    
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default Testimonial