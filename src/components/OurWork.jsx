import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile app Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.work_mobile_app
        },
        {
            title: 'Fitness app Promotion',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.work_fitness_app
        },
        {
            title: 'Dashboard Management',
            description: 'We you create a marketing strategy that drives results.',
            icon: assets.work_dashboard_management
        },
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='We craft digital solutions that move your business forward.'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
        {workData.map((work, idx) => (
            <div key={idx} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                <img src={work.icon} className='w-full rounded-xl' alt="" />
                <h3 className='mt-3 mb-2 text-xl font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-70 w-5/6'>{work.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OurWork
