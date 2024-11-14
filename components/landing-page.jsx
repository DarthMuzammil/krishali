'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ListIcon } from '@/components/icons/ListIcon'
import { ActivityIcon } from '@/components/icons/ActivityIcon'
import { BoneIcon } from '@/components/icons/BoneIcon'
import { MaximizeIcon } from '@/components/icons/MaximizeIcon'
import { ReplyIcon } from '@/components/icons/ReplyIcon'
import { WeightIcon } from '@/components/icons/WeightIcon'
import { BedIcon } from '@/components/icons/BedIcon'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { MuscleIcon } from '@/components/icons/MuscleIcon'
import {
  herosection,
  personalTrainingSection,
  personalisedFeedbackSection,
  card1,
  card2,
  emailSection,
  hypertrophySection
} from '@/lib/constants'
import useScrollToSection from '@/lib/useScrollToSection'

export function LandingPage () {
  const [showMuscleSignup, setShowMuscleSignup] = useState(false)
  const [showNutritionSignup, setShowNutritionSignup] = useState(false)
  const scrollToSection = useScrollToSection()

  function handleLearnMore () {
    scrollToSection('learnmore')
  }
  return (
    <div className='flex flex-col min-h-[100dvh] bg-white'>
      <section className='w-full py-16 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='container px-4 md:px-6 relative z-10'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-[#333333] leading-tight'>
                  {herosection.title}
                </h1>
                <p className='max-w-[600px] text-[#666666] text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200'>
                  {herosection.description}
                </p>
              </div>
              <div className='flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-400'>
                <Link
                  href='#Join'
                  className='inline-flex h-12 items-center rounded-full justify-center px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#7c3aed] hover:shadow-xl bg-[#9333ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea] disabled:pointer-events-none disabled:opacity-50'
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Button
                  onClick={handleLearnMore}
                  variant='outline'
                  className='h-12 rounded-full px-8 text-base font-semibold text-[#9333ea] border-[#9333ea] hover:bg-[#9333ea] hover:text-white transition-all'
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className='relative'>
              <img
                src='/gym4.jpg'
                width='550'
                height='550'
                alt='Hypertrophy Training'
                className='mx-auto aspect-video overflow-hidden rounded-2xl object-cover sm:w-full lg:order-last lg:aspect-square animate-fade-in-right shadow-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-tr from-[#9333ea] to-transparent opacity-20 rounded-2xl' />
            </div>
          </div>
        </div>
      </section>

      <section id='Hypertrophy' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center justify-center space-y-6 text-center'>
            <div className='space-y-4 max-w-3xl'>
              <div className='inline-block rounded-lg hover:bg-[#7c3aed] bg-[#9333ea] px-3 py-1 text-sm text-white animate-fade-in-up transition-colors duration-300'>
                {hypertrophySection.title}
              </div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#333333] leading-tight animate-fade-in-up delay-200'>
                {hypertrophySection.subTitle}
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-[#666666] leading-relaxed animate-fade-in-up delay-400'>
                {hypertrophySection.description}
              </p>
            </div>
          </div>
          <div className='grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                Icon: ReplyIcon,
                title: hypertrophySection.t2,
                description: hypertrophySection.p2,
                delay: ''
              },
              {
                Icon: ActivityIcon,
                title: hypertrophySection.t3,
                description: hypertrophySection.p3,
                delay: 'delay-200'
              },
              {
                Icon: MaximizeIcon,
                title: hypertrophySection.t4,
                description: hypertrophySection.p4,
                delay: 'delay-400'
              }
            ].map(({ Icon, title, description, delay }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center animate-fade-in-up ${delay} transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-6`}
              >
                <div className='mb-4 p-3 rounded-full bg-[#f3e8ff] transition-all duration-300 group-hover:bg-[#9333ea]'>
                  <Icon className='h-8 w-8 text-[#9333ea] transition-all duration-300 group-hover:text-white' />
                </div>
                <h3 className='text-xl font-bold text-[#333333] leading-tight mb-2 transition-colors duration-300 group-hover:text-[#9333ea]'>
                  {title}
                </h3>
                <p className='text-[#666666] leading-relaxed transition-colors duration-300 group-hover:text-[#333333]'>
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center w-full pb-12 pt-8'>
            <div className='bg-gradient-to-r from-[#9333ea] to-[#7c3aed] p-1 rounded-lg mb-6'>
              <h3 className='text-3xl font-extrabold text-white px-4 py-2 text-center'>
                Unlock Your Muscle-Building Potential
              </h3>
            </div>
            <p className='text-md text-[#666666] max-w-md text-center mb-6'>
              Discover proven hypertrophy techniques in our comprehensive guide!
            </p>
            <Button className='inline-flex h-10 items-center rounded-full justify-center hover:bg-[#7c3aed] bg-[#9333ea] text-md px-6 font-semibold text-white shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea] disabled:pointer-events-none disabled:opacity-50'>
              Download Free Pdf
            </Button>
            <p className='text-sm text-[#666666] mt-4'>
              No sign-up required. Start learning instantly.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-[#333333] mb-8 leading-tight animate-fade-in-up'>
              {personalisedFeedbackSection.title}
            </h2>
            <div className='bg-white rounded-2xl shadow-lg w-full max-w-[375px] h-full max-h-[710apx] overflow-hidden animate-fade-in-up delay-200'>
              <div className='bg-[#333333] p-4'>
                <div className='flex justify-between items-center'>
                  <div className='text-white font-bold'>FEEDBACK</div>
                  <div className='text-white'>9:41</div>
                </div>
              </div>
              <div className='p-4 space-y-4'>
                <div className='space-y-2'>
                  <div className='text-[#333333] font-medium leading-tight'>
                    BICEPS SORENESS
                  </div>
                  <p className='text-[#666666] text-sm leading-relaxed'>
                    How sore did you get in your biceps AFTER training them LAST
                    TIME?
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      NEVER GOT SORE
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      HEALED A WHILE AGO
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      HEALED JUST NOW
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      I'M STILL SORE
                    </Button>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='text-[#333333] font-medium leading-tight'>
                    BICEPS PUMP
                  </div>
                  <p className='text-[#666666] text-sm leading-relaxed'>
                    How good was the pump you got in your biceps LAST TIME?
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      LOW PUMP
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      MODERATE PUMP
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      AMAZING PUMP!
                    </Button>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='text-[#333333] font-medium leading-tight'>
                    BICEPS WORKLOAD
                  </div>
                  <p className='text-[#666666] text-sm leading-relaxed'>
                    How did the workload feel for your biceps LAST TIME?
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      EASY
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      PRETTY GOOD
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      PUSHED MY LIMITS
                    </Button>
                    <Button
                      variant='outline'
                      className='flex-1 rounded-lg text-black hover:bg-gray-200 bg-white hover:text-black'
                    >
                      TOO MUCH
                    </Button>
                  </div>
                </div>
                <Button className='w-full rounded-lg hover:bg-gray-200 bg-white text-black '>
                  SAVE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8]'>
        <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#333333] leading-tight animate-fade-in-up'>
              {personalisedFeedbackSection.subTitle}
              <span className='text-[#9333ea]'>
                {personalisedFeedbackSection.subTitle2}
              </span>
            </h2>
            <p className='max-w-[600px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed animate-fade-in-up delay-200'>
              {personalisedFeedbackSection.description}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 animate-fade-in-up delay-400'>
            <div className='flex flex-col items-center gap-2'>
              <MuscleIcon className='h-12 w-12 text-[#9333ea]' />
              <h4 className='text-lg font-bold text-[#333333] leading-tight text-center'>
                {personalisedFeedbackSection.t2}
              </h4>
              <p className='text-center text-[#666666] leading-relaxed'>
                {personalisedFeedbackSection.p2}
              </p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <WeightIcon className='h-12 w-12 text-[#9333ea]' />
              <h4 className='text-lg font-bold text-[#333333] leading-tight text-center'>
                {personalisedFeedbackSection.t3}
              </h4>
              <p className='text-center text-[#666666] leading-relaxed'>
                {personalisedFeedbackSection.p3}
              </p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <BoneIcon className='h-12 w-12 text-[#9333ea]' />
              <h4 className='text-lg font-bold text-[#333333] leading-tight text-center'>
                {personalisedFeedbackSection.t4}
              </h4>
              <p className='text-center text-[#666666] leading-relaxed'>
                {personalisedFeedbackSection.p4}
              </p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <ReplyIcon className='h-12 w-12 text-[#9333ea]' />
              <h4 className='text-lg font-bold text-[#333333] leading-tight text-center'>
                {personalisedFeedbackSection.t5}
              </h4>
              <p className='text-center text-[#666666] leading-relaxed'>
                {personalisedFeedbackSection.p5}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='Join' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#333333] leading-tight animate-fade-in-up'>
              {emailSection.title}
            </h2>
            <p className='max-w-[600px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed animate-fade-in-up delay-200'>
              {emailSection.description}
            </p>
          </div>
        </div>
      </section>
      <section id='learnmore' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center justify-center space-y-6 text-center'>
            <div className='space-y-4 max-w-3xl'>
              <div className='inline-block rounded-lg hover:bg-[#7c3aed] bg-[#9333ea] px-3 py-1 text-sm text-white animate-fade-in-up transition-colors duration-300'>
                {personalTrainingSection.title}
              </div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#4B5563] leading-tight animate-fade-in-up delay-200'>
                {personalTrainingSection.subTitle}
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-400'>
                {personalTrainingSection.description}
              </p>
            </div>
          </div>
          <div className='grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                Icon: CalendarIcon,
                title: personalTrainingSection.t2,
                description: personalTrainingSection.p2,
                delay: ''
              },
              {
                Icon: BedIcon,
                title: personalTrainingSection.t3,
                description: personalTrainingSection.p3,
                delay: 'delay-200'
              },
              {
                Icon: ListIcon,
                title: personalTrainingSection.t4,
                description: personalTrainingSection.p4,
                delay: 'delay-400'
              }
            ].map(({ Icon, title, description, delay }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center animate-fade-in-up ${delay} transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-6 group`}
              >
                <div className='mb-4 p-3 rounded-full bg-[#f3e8ff] transition-all duration-300 group-hover:bg-[#9333ea]'>
                  <Icon className='h-8 w-8 text-[#9333ea] transition-all duration-300 group-hover:text-white' />
                </div>
                <h3 className='text-xl font-bold text-[#4B5563] leading-tight mb-2 transition-colors duration-300 group-hover:text-[#9333ea]'>
                  {title}
                </h3>
                <p className='text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-[#4B5563]'>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='PersonalTraining' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container  md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg hover:bg-[#7c3aed] bg-[#9333ea] px-3 py-1 text-sm text-white animate-fade-in-up'>
                Focused Courses
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-[#4B5563] leading-tight'>
                FREE TRAINING
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed'>
                Videos, eBooks, Guides, Templates, Downloads & more to help you
                succeed
              </p>
            </div>
          </div>
          <div className='mx-auto overflow-x-hidden max-w-5xl justify-center flex flex-col items-center gap-12 py-12'>
            <div className='bg-white w-10/12 rounded-xl  overflow-hidden '>
              <div className='p-8 mb-3 mt-3'>
                <h3 className='text-3xl font-bold text-[#9333ea] mb-6'>
                  {card1.title}
                </h3>
                <div className='flex justify-center gap-4'>
                  <Button
                    onClick={() => setShowMuscleSignup(true)}
                    className='inline-flex h-8 items-center rounded-md justify-center hover:bg-[#7c3aed] bg-[#9333ea] px-4 text-xs font-medium text-white shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Yes, I'm Ready
                  </Button>

                  <Button
                    className='inline-flex h-8 items-center rounded-md justify-center px-4 text-xs font-medium bg-gray-300 text-gray-600 shadow transition-colors hover:bg-[#FF5050] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    disabled
                  >
                    No Thanks
                  </Button>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-r  w-10/12  from-green-400 to-blue-500 rounded-xl  overflow-hidden'>
              <div className='p-8 text-white'>
                <h4 className='text-3xl font-bold mb-4'> {card2.title}</h4>
                <p className='text-xl mb-6'>{card2.description}</p>
                <div className='flex justify-center'>
                  <Button
                    onClick={() => setShowNutritionSignup(true)}
                    className='inline-flex h-10 items-center rounded-md justify-center bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Get Notified
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
