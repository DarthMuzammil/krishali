'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { DumbbellIcon, BarChart2Icon } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import Footer from './footer'
import {
  personalCoachingForMaximumResults,
  testimonials
} from '@/lib/constants'
import useScrollToSection from '@/lib/useScrollToSection'

export function VideoCarousel () {
  return (
    <div className=' w-full   flex-col  justify-center flex overflow-x-hidden  items-center '>
      <Carousel className=' w-full   rounded-xl  overflow-x-hidden max-w-6xl '>
        <CarouselContent>
          <CarouselItem>
            <div className='bg-white rounded-lg p-6 text-center'>
              <blockquote className='text-lg text-gray-600 mb-4'>
                {testimonials[0].content[0].testimonial}
              </blockquote>
              <div className='flex items-center justify-center'>
                <Avatar className='w-10 h-10 mr-4'>
                  <AvatarImage src='/placeholder-user.jpg' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className='font-semibold'>
                    {testimonials[0].content[0].name}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {testimonials[0].content[0].job}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-white rounded-lg p-6 text-center'>
              <blockquote className='text-lg text-gray-600 mb-4'>
                {testimonials[0].content[1].testimonial}
              </blockquote>
              <div className='flex items-center justify-center'>
                <Avatar className='w-10 h-10 mr-4'>
                  <AvatarImage src='/placeholder-user.jpg' />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <div className='font-semibold'>
                    {testimonials[0].content[1].name}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {testimonials[0].content[1].job}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-white rounded-lg p-6 text-center'>
              <blockquote className='text-lg text-gray-600 mb-4'>
                {testimonials[0].content[2].testimonial}
              </blockquote>
              <div className='flex items-center justify-center'>
                <Avatar className='w-10 h-10 mr-4'>
                  <AvatarImage src='/placeholder-user.jpg' />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <div className='font-semibold'>
                    {testimonials[0].content[2].name}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {testimonials[0].content[2].job}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute left-6' />
        <CarouselNext className='absolute right-6' />
      </Carousel>
    </div>
  )
}

function CarouselWithInfoCards () {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-purple-600 mb-4 text-center'>
          What Our Users Say
        </h2>
        <VideoCarousel />
      </div>
    </section>
  )
}


function ComingSoon ({ handleSignUp }) {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 text-center'>
        <h2 className='text-4xl font-bold text-purple-600 mb-4'>
          Coming Soon: Advanced Nutrition Tracking App
        </h2>
        <p className='text-gray-600 text-lg mb-8 font-semibold'>
          Get notified when our advanced nutrition tracking feature is available
          to take your fitness journey to the next level.
        </p>
      </div>
    </section>
  )
}

function HeroSection ({ handleSignUp }) {
  const scrollToSection = useScrollToSection()

  const handleAction = () => {
    scrollToSection('personalcoachingformaximumresults')
  }

  return (
    <section className='py-24 bg-gradient-to-br  from-purple-600 to-indigo-700 text-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
              Transform Your <span className='text-yellow-300'>Body</span> with
              Krishali
            </h1>
            <p className='text-xl md:text-2xl mb-8 font-medium text-purple-100'>
              Experience a revolutionary fitness journey with our evidence-based
              workouts. Track progress, access personalized plans, and connect
              with expert coaches - all in one place.
            </p>
            <Button
              onClick={handleAction}
              className='px-8 py-4 rounded-full text-lg font-semibold bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              Start Your Journey
            </Button>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <img
              src='/gym4.jpg'
              alt='Hero Image'
              className='rounded-lg shadow-2xl max-w-full h-auto'
              style={{
                clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)'
              }}
            />
            <div className='absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl'>
              <DumbbellIcon className='w-12 h-12 text-purple-600' />
            </div>
            <div className='absolute -top-10 -right-2 md:-right-10 bg-white p-4 rounded-lg shadow-xl'>
              <BarChart2Icon className='w-12 h-12 text-purple-600' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToAction ({ handleSignUp }) {
  return (
    <section className='py-24 bg-gradient-to-b from-white to-purple-50'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 text-center'>
        <div className='bg-white shadow-2xl rounded-3xl p-10 md:p-16 transform hover:scale-105 transition-all duration-300 ease-in-out'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-purple-600 mb-6 leading-tight'>
              Transform for Less Than a{' '}
              <span className='text-yellow-500'>Dollar a Day</span>
            </h2>
            <p className='text-gray-700 text-xl md:text-2xl mb-10 font-medium leading-relaxed'>
              Unlock a world of personalized fitness and nutrition guidance for
              the cost of a daily coffee. Start your journey to a stronger,
              healthier you today.
            </p>
            <div className='flex flex-col items-center space-y-4'>
              <p className='text-sm text-gray-500'>
                No commitment required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-12 flex justify-center items-center space-x-8'>
          <div className='flex items-center'>
            <svg
              className='w-6 h-6 text-green-500 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-700'>
              7 - day money-back guarantee, No Question Asked
            </span>
          </div>
          <div className='flex items-center'>
            <svg
              className='w-6 h-6 text-green-500 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-700'>Access to Premium features</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PersonalCoachingForMaximumResults ({ handleSignUp }) {
  const router = useRouter()

  const handleAction = () => {
    router.push('/personal-coaching')
  }
  return (
    <section
      id='personalcoachingformaximumresults'
      className='py-24 bg-gradient-to-br from-gray-50 to-purple-100'
    >
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 text-center'>
          {personalCoachingForMaximumResults.title}
        </h2>
        <p className='text-gray-700 text-xl md:text-2xl mb-12 font-medium text-center max-w-3xl mx-auto'>
          {personalCoachingForMaximumResults.description}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {personalCoachingForMaximumResults.items.map((item, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            >
              <div className='flex items-center mb-6'>
                <div className='bg-purple-600 text-white rounded-full p-3 mr-4'>
                  {item.icon}
                </div>
                <h3 className='text-2xl font-bold text-purple-800'>
                  {item.title}
                </h3>
              </div>
              <p className='text-gray-600 text-lg'>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-16 flex justify-center'>
          <Button
            onClick={handleAction}
            className='px-8 py-4 rounded-full text-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            Get Started with a Coach
          </Button>
        </div>
      </div>
    </section>
  )
}

function Body ({ handleSignUp }) {
  return (
    <main className='flex flex-col'>
      <HeroSection handleSignUp={handleSignUp} />
      <CallToAction handleSignUp={handleSignUp} />
      <PersonalCoachingForMaximumResults handleSignUp={handleSignUp} />
      <CarouselWithInfoCards />
      <ComingSoon handleSignUp={handleSignUp} />
    </main>
  )
}

export function HomepageNew () {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header handleSignUp={() => {}} />
      <Body handleSignUp={() => {}} />
      <Footer />
    </div>
  )
}
