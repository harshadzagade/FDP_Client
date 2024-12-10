import React from 'react'
import { Link } from 'react-router-dom'
import PaymentForm from './PaymentForm'

function IMM_LandingPage() {
    const handleRegisterClick = () => {
        const form = document.getElementById('form');
        form.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <header className="fixed w-full">
                <nav className="bg-gray-100 border-gray-200 py-2.5 ">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <Link href="#" onClick={handleRegisterClick} className="flex items-center">
                            <img src="https://www.met.edu/frontendassets/images/MET_College_in_Mumbai_logo.png"
                                className=" mr-3 h-16" alt="MET Logo" />
                        </Link>
                        <div className="flex items-center lg:order-2">

                            <button
                                onClick={handleRegisterClick}
                                className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-800"
                            >
                                Register Now
                            </button>
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="bg-white ">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl mt-4 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black lg:text-left md:text-left">
                            5 Days Immersive Hybrid mode FDP
                        </h1>
                        <p className="font-medium leading-tight text-gray-600 mt-4">
                            on Case Study Writing 7th , 8th , 9th , 10th and 25th January, 2025
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                            <button
                                onClick={handleRegisterClick}
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium  border  rounded-lg sm:w-auto   focus:z-10   bg-red-600 text-white   "
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="../../assets/img/fdp-bg.png" alt="hero image" />
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">

                    {/* <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600">
                                About MET
                            </h2>
                            <p className="text-base font-normal  text-gray-500">
                                Established in 1989, with a mission to redefine the system of education, Mumbai Educational Trust (MET) is a professionally managed, multi-disciplinary and multi-faceted oasis of knowledge. Its premiere educational institutes conduct university accredited and autonomous courses. The grant of the ISO 9001:2015 certification is an acknowledgement of the institution's capability to deliver professional education that meets the highest standards of professionalism worldwide. All this, to help young professionals face the challenges of life. And make their mark in the corporate world.
                                Training is imparted round-the-clock, seven days a week. Projects and assignments are given utmost importance and students learn on the job. Application-oriented knowledge, garnered in the lecture halls, is applied to industry assignments. The faculty spares no effort to make the students razor sharp, so that they make their mark in the corporate world. No effort has been spared, to create an environment that encourages students, to push the limits of their minds.
                                At MET thousands of students and faculty are involved in delivering unique learning systems, through ultra modern infrastructure and academic rigour.
                            </p>
                        </div>
                    </div> */}

                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <ul className="ml-[-2rem]" >
                                <li className="text-left">
                                    <label for="accordion-2" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                                        <input className="peer hidden" type="checkbox" id="accordion-2" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                                            <h2 className=" text-3xl font-bold tracking-tight text-red-600">
                                                About MET
                                            </h2>
                                        </div>
                                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[51rem]">
                                            <div className="p-5">
                                                <p className="text-base font-normal  text-gray-500">
                                                    Established in 1989, with a mission to redefine the system of education, Mumbai Educational Trust (MET) is a professionally managed, multi-disciplinary and multi-faceted oasis of knowledge. Its premiere educational institutes conduct university accredited and autonomous courses. The grant of the ISO 9001:2015 certification is an acknowledgement of the institution's capability to deliver professional education that meets the highest standards of professionalism worldwide. All this, to help young professionals face the challenges of life. And make their mark in the corporate world.
                                                    Training is imparted round-the-clock, seven days a week. Projects and assignments are given utmost importance and students learn on the job. Application-oriented knowledge, garnered in the lecture halls, is applied to industry assignments. The faculty spares no effort to make the students razor sharp, so that they make their mark in the corporate world. No effort has been spared, to create an environment that encourages students, to push the limits of their minds.
                                                    At MET thousands of students and faculty are involved in delivering unique learning systems, through ultra modern infrastructure and academic rigour.
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">
                    {/* <div className="items-center ">
                        <div className="mb-10">
                            <div className="mb-3 text-3xl font-bold leading-normal  sm:text-4xl sm:leading-relaxed text-red-600">About MET Institute of Mass Media</div>
                            <div className="max-w-xl text-gray-500">
                                Vision, Mission Values of the MET Institute of Mass Media
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="mr-4">
                                <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Vision</div>
                                <div className="text-gray-500">
                                    To be Internationally recognized as a leading Media Management Institution creating value-oriented professionals and entrepreneurs contributing to development of the Nation.
                                </div>
                            </div>
                            <div className="mr-4">
                                <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Mission</div>
                                <div className="text-gray-500">
                                    To strengthen industry connect for promoting media business expertise and also to create an ecosystem to engage in research and academic development work.
                                </div>
                            </div>
                            <div className="mr-4">
                                <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Values</div>
                                <div className="text-gray-500">
                                    Creativity, Innovation, Integrity, Growth, Social Responsibility
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <ul className="ml-[-2rem]" >
                                <li className="text-left">
                                    <label for="accordion-1" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                                        <input className="peer hidden" type="checkbox" id="accordion-1" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                                            <h2 className=" text-3xl font-bold tracking-tight text-red-600">
                                                About MET Institute of Mass Media
                                            </h2>
                                        </div>
                                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[51rem]">
                                            <div className="p-5">
                                                <div className="mb-5 max-w-xl text-gray-500">
                                                    Vision, Mission Values of the MET Institute of Mass Media
                                                </div>
                                                <div className="flex flex-col lg:flex-row">
                                                    <div className="mr-4">
                                                        <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Vision</div>
                                                        <div className="text-gray-500">
                                                            To be Internationally recognized as a leading Media Management Institution creating value-oriented professionals and entrepreneurs contributing to development of the Nation.
                                                        </div>
                                                    </div>
                                                    <div className="mr-4">
                                                        <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Mission</div>
                                                        <div className="text-gray-500">
                                                            To strengthen industry connect for promoting media business expertise and also to create an ecosystem to engage in research and academic development work.
                                                        </div>
                                                    </div>
                                                    <div className="mr-4">
                                                        <div className="mt-8 text-xl font-bold md:mt-0 md:mb-8 md:text-2xl">Values</div>
                                                        <div className="text-gray-500">
                                                            Creativity, Innovation, Integrity, Growth, Social Responsibility
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">
                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <ul className="ml-[-2rem]" >
                                <li className="text-left">
                                    <label for="accordion-3" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                                        <input className="peer hidden" type="checkbox" id="accordion-3" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                                            <h2 className=" text-3xl font-bold tracking-tight text-red-600">
                                                About MET Centre of Educational Technology
                                            </h2>
                                        </div>
                                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[51rem]">
                                            <div className="p-5">
                                                <p className="text-base font-normal  text-gray-500">
                                                    MET Centre of Educational Technology (CET) established on 5th Dec 2009 with the intent to develop and use technology in education and technology of education in all the MET institutes and also in the school - MET Rishikul Vidyalaya. The aim is to create a world class learner friendly environment for an active learning process. The most important function of MET CET is to research the latest trends in education worldwide and keep the MET faculty abreast with the same. The department aids the faculty members to use, implement or deliver the most relevant and appropriate educational trends in teaching-learning processes. The department also prepares supportive educational material catering to different kinds of learners like Visual, Auditory, and Kinesthetic etc. The department includes a team of qualified instructional designers who are experts in the field of educational technology.
                                                    MET's goal is to deliver premiere education to the learners and make them independent industry ready professionals. Hence, MET CET ensures constructivist approach of teaching and learning with world-class curriculum to make the
                                                    students industry ready. MET CET delivers face-to-face, blended and online learning depending on the student learning needs. It focuses on differentiated learning that takes into consideration individualised as well as group learning needs of learners. It also ensures that assessment and evaluation is at appropriate time to gauge the improvement needed in learning. MET CET has always been in service by helping the faculty members prepare their session material, designing and developing innovative pedagogy in tandem with the latest and relevant technology to promote active learning. To make MET lead among the best international institutes, MET CET has designed and developed and is in process of delivering a MOOC customised for MET students. It has designed the MOOC using synchronous and asynchronous modes of teaching and learning, Open Educational Resources and personalised learning to engage the learners.
                                                </p>
                                                <p className='text-base font-normal  text-gray-500'>
                                                    Thus the key roles of MET CET to:
                                                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Research (tools, strategies, latest trends etc),
                                                            </span>
                                                        </li>
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Curriculum development (Latest, international standards, strategies),
                                                            </span>
                                                        </li>
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Design and develop content,
                                                            </span>
                                                        </li>
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Seamless execution of content (face-to-face, blended, online),
                                                            </span>
                                                        </li>
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Develop assessments and evaluations and not the least
                                                            </span>
                                                        </li>
                                                        <li className="flex space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-base font-medium leading-tight text-gray-600">
                                                                Digitise and standardise the programmes at MET with latest and best in the field of education.
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Thus, the department strives to kindle the joy of teaching and learning by providing educational gears in the form of instructional design principles and appropriate technology to the faculty and students.
                                                    </p>
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">

                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600">
                                Program Details
                            </h2>
                            <p className="text-base font-normal  text-gray-500 leading-tight">
                                This 5 Days Immersive Faculty Development Program (FDP) on
                                Case Study Writing is organized by MET Institute of Mass Media in association with MET Centre of
                                Educational Technology in hybrid mode for faculty and professionals from any field.

                                The program not only provides you with a unique opportunity to understand the importance of
                                using case studies in academic teaching, elevating the analytical skills, gain an all-round
                                perspective on your domain, enhance your teaching and research capability. You also get the
                                opportunity to publish your case study and add valuable points on your API score.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">

                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">
                                Objective of the FDP
                            </h2>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">
                                        Participants will gain practical experience in case study writing through hands-on
                                        training sessions executed by experts</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Participants
                                        will learn to develop students’ critical thinking and problem-solving skills in academic
                                        teaching</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Participants
                                        will write and present their original cases to panel of experts</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Participants
                                        will get opportunity to publish their case studies</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">


                    <div className="items-center gap-8 ">
                        <div className="text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">
                                Key Takeaways</h2>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Innovative
                                        way to incorporate case studies in teaching</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Ability to
                                        research, analysis and brainstorm on contemporary topics in Media</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Become a
                                        published author of case study</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-600">Networking
                                        with peers and Industry experts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">


                    <div className="items-center gap-8 ">
                        <div className="text-gray-500 sm:text-lg ">
                            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                                {/* Left Column */}
                                <div className="flex flex-col space-y-8 w-full md:w-1/2">
                                    {/* Chief Patron Section */}
                                    <div>
                                        <h3 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">Chief Patron</h3>
                                        <div className="block rounded-lg">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-md border border-gray-100 bg-white p-3 shadow-lg">
                                                <img
                                                    className="h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-4"
                                                    src="../../assets/img/Pankaj_Bhujbal sir.jpg"
                                                    alt="Mr. Pankaj Bhujbal"
                                                />
                                                <div>
                                                    <span className="text-lg font-medium">Mr. Pankaj Bhujbal,</span>
                                                    <p className="mb-1 font-normal">Hon. Trustee</p>
                                                    <p className="text-xs text-gray-400">Mumbai Educational Trust</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Coordinator Section */}
                                    <div>
                                        <h3 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">Coordinator</h3>
                                        <div className="block rounded-lg">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-md border border-gray-100 bg-white p-3 shadow-lg">
                                                <img
                                                    className="h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-4"
                                                    src="../../assets/img/mouchmi.jpg"
                                                    alt="Dr. Mouchumi Deka"
                                                />
                                                <div>
                                                    <span className="text-lg font-medium">Dr. Mouchumi Deka,</span>
                                                    <p className="mb-1 font-normal">Assistant Professor</p>
                                                    <p className="text-xs text-gray-400">MET CET</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col space-y-8 w-full md:w-1/2">
                                    {/* Programme Facilitators Section */}
                                    <div>
                                        <h3 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">Programme Facilitators</h3>
                                        <div className="flex flex-col sm:flex-row text-gray-600 space-y-8 sm:space-y-0 sm:space-x-8">
                                            {/* Facilitator 1 */}
                                            <div className="block rounded-lg">
                                                <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-md border border-gray-100 bg-white p-3 shadow-lg">
                                                    <img
                                                        className="h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-4"
                                                        src="../../assets/img/sarkar.jpg"
                                                        alt="Dr. Suvrashis Sarkar"
                                                    />
                                                    <div>
                                                        <span className="text-base font-medium">Dr. Suvrashis Sarkar,</span>
                                                        <p className="mb-1 font-normal">Dean,</p>
                                                        <p className="text-xs text-gray-400">MET IMM</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Facilitator 2 */}
                                            <div className="block rounded-lg">
                                                <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-md border border-gray-100 bg-white p-3 shadow-lg">
                                                    <img
                                                        className="h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-4"
                                                        src="../../assets/img/chitra.jpg"
                                                        alt="Dr. Chitra Wadke"
                                                    />
                                                    <div>
                                                        <span className="text-lg font-medium">Dr. Chitra Wadke,</span>
                                                        <p className="mb-1 font-normal">Head,</p>
                                                        <p className="text-xs text-gray-400">MET CET</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Co-Coordinator Section */}
                                    <div>
                                        <h3 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">Co-Coordinator</h3>
                                        <div className="block rounded-lg">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-md border border-gray-100 bg-white p-3 shadow-lg">
                                                <img
                                                    className="h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-4"
                                                    src="../../assets/img/muskan.jpg"
                                                    alt="Ms. Muskan Chevelwalla"
                                                />
                                                <div>
                                                    <span className="text-lg font-medium">Ms. Muskan Chevelwalla,</span>
                                                    <p className="mb-1 font-normal">Executive</p>
                                                    <p className="text-xs text-gray-400">MET CET</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">


                    <div className="items-center gap-8 ">


                        <div className="items-center gap-8 ">
                            <div className="text-gray-500 sm:text-lg ">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">
                                    Program Schedule
                                </h2>

                            </div>

                            <div className="mt-6 overflow-hidden rounded-xl border shadow">
                                <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                                    <thead className="hidden border-b lg:table-header-group">
                                        <tr className="">
                                            <td
                                                className="whitespace-normal py-4  font-bold text-black sm:px-6">
                                                Day & Date
                                            </td>

                                            <td className="whitespace-normal text-center py-4  font-bold text-black sm:px-6">
                                                Session 1 <br />
                                                11:00am – 1:00pm
                                            </td>

                                            <td className="whitespace-normal text-center py-4  font-bold text-black sm:px-6">
                                                Session 2 <br />
                                                2:00pm – 4:00pm
                                            </td>
                                        </tr>
                                    </thead>

                                    <tbody className="lg:border-gray-300">
                                        <tr className="">
                                            <td
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                7th January, Tuesday
                                                2025 (offline)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap  py-4 text-sm font-normal text-gray-700 sm:px-6 lg:table-cell">
                                                Introduction to Case Writing</td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-700 lg:text-left">
                                                Creative thinking session on case study
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                8 th January, Wednesday 2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap  py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Script writing and Dialogue writing
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-700 lg:text-left">
                                                Case report writing in journalism
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                9th January, Thursday
                                                2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap  py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Structuring case study writing and implementing case studies in academic
                                                teaching
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-700 lg:text-left">
                                                Case study in Advertising
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                10th January, Friday 2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap  py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Drafting the case studies (Step-by-step guidance on writing the first draft)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-700 lg:text-left">
                                                Review/feedback
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                25th January, Saturday 2025 (offline)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap  py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Presentation
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-700 lg:text-left">
                                                Valedictory session
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">


                    <div className="items-center gap-8 ">
                        <div className="text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">
                                Who can register?</h2>

                            <p className="text-base font-medium leading-tight text-gray-600">
                                The FDP is open to all faculty members, research scholars across various institutions and
                                Industry experts.

                                FDP will be conducted in a hybrid mode (offline and online).
                                7th and 25th January will be at MET (Mumbai Educational Trust) campus, and 8th, 9th, 10th
                                January will be online.

                                Participants will be given an access to the LMS for learning materials and collaboration.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">


                    <div className="items-center gap-8 ">
                        <div className="text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-600 ">
                                How To Apply?
                            </h2>

                            <p className="text-base font-medium leading-tight text-gray-600">
                                Kindly fill out the registration form. After completing the payment of the registration fee, please share a screenshot of the payment confirmation at
                                <a href="mailto:metcet@met.edu" onClick={(e) => window.location.href = 'mailto:metcet@met.edu'}> metcet@met.edu </a>
                                or via WhatsApp at
                                <a href="https://wa.me/9136901541" onClick={(e) => window.location.href = 'https://wa.me/9136901541'}> 9136901541 </a>.

                                Fees: Rs. 1800/- (including GST and study materials on LMS).

                                Participants will be given an access to the LMS for learning materials and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div id='form'>
                <PaymentForm />
            </div>
        </div>
    )
}

export default IMM_LandingPage