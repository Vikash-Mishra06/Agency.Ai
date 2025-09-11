import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.social_icon
        },
    ]
    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white -mb-6'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
            <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

            <div className="flex flex-wrap justify-center gap-6">
                {servicesData.map((service, idx) => (
                    <ServiceCard key={idx} service={service} idx={idx} />
                ))}
            </div>
        </div>
    )
}

export default Services