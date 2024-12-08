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
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black ">
                            5 Days Immersive Hybrid mode
                        </h1>
                        <p className="font-medium leading-tight text-gray-600">
                            FDP on Case Study Writing 7 th , 8 th , 9 th , 10 th and 25 th January, 2025
                            About the Institute: (MET, IMM, CET)
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
                        <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-12 lg:space-y-20 lg:py-6 lg:px-6">

                    <div className="items-center ">
                        <div className="text-black sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black">
                                Program Details
                            </h2>
                            <p className="font-medium leading-tight text-gray-600">
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
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black ">
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
                                        training sessions executed by experts.</span>
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
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
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
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                Key Takeaways</h2>
                            <div className="flex flex-row space-x-8">
                                {/* Left Column */}
                                <div className="flex flex-col space-y-8 w-1/2">
                                    {/* Chief Patron Section */}
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-black">Chief Patron</h3>
                                        <p className="text-base font-medium leading-tight text-gray-600">
                                            Mr. Pankaj Bhujbal, Hon. Trustee
                                            Mumbai Educational Trust
                                        </p>
                                    </div>
                                    {/* Coordinator Section */}
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-black">Coordinator</h3>
                                        <p className="text-base font-medium leading-tight text-gray-600">
                                            Dr. Mouchumi Deka
                                            Assistant Professor
                                            MET CET
                                        </p>
                                    </div>

                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col space-y-8 w-1/2">
                                    {/* Programme Facilitators Section */}
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-black">Programme Facilitators:</h3>
                                        <div className="flex flex-row text-gray-600 space-x-8">
                                            {/* Facilitator 1 */}
                                            <div>
                                                <p className="text-base font-medium leading-tight text-gray-600">Dr. Suvrashis
                                                    Sarkar</p>
                                                <p className="text-base font-medium leading-tight text-gray-600">Dean, MET Institute
                                                    of Mass Media</p>
                                            </div>
                                            {/* Facilitator 2 */}
                                            <div>
                                                <p className="text-base font-medium leading-tight text-gray-600">Dr. Chitra Wadke,
                                                    Head,</p>
                                                <p className="text-base font-medium leading-tight text-gray-600">MET Center of
                                                    Educational Technology</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Co-Coordinator Section */}
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-black">Co-Coordinator</h3>
                                        <p className="text-base font-medium leading-tight text-gray-600">
                                            Ms. Muskan Chevelwalla
                                            Executive
                                            MET CET
                                        </p>
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
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                    Program Schedule
                                </h2>

                            </div>

                            <div className="mt-6 overflow-hidden rounded-xl border shadow">
                                <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                                    <thead className="hidden border-b lg:table-header-group">
                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-normal py-4 text-sm font-medium text-black sm:px-6">Day
                                                & Date
                                            </td>

                                            <td className="whitespace-normal py-4 text-sm font-medium text-black sm:px-6">
                                                Session 1
                                                11:00am – 1:00pm
                                            </td>

                                            <td className="whitespace-normal py-4 text-sm font-medium text-black sm:px-6">
                                                Session 2
                                                2:00pm – 4:00pm
                                            </td>
                                        </tr>
                                    </thead>

                                    <tbody className="lg:border-gray-300">
                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                7th January, Tuesday
                                                2025 (offline)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Introduction to Case Writing</td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                Creative thinking session on case study
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                8 th January, Wednesday 2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Script writing and Dialogue writing
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                Case report writing in journalism
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                9th January, Thursday
                                                2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Structuring case study writing and implementing case studies in academic
                                                teaching
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                Case study in Advertising
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                10th January, Friday 2025 (online)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Drafting the case studies (Step-by-step guidance on writing the first draft)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                Review/feedback
                                            </td>
                                        </tr>

                                        <tr className="">
                                            <td width="50%"
                                                className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                25th January, Saturday 2025 (offline)
                                            </td>

                                            <td
                                                className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                Presentation
                                            </td>

                                            <td
                                                className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
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
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                Who can register?</h2>

                            <p className="font-medium leading-tight text-gray-600">
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
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                How To Apply?</h2>

                            <p className="font-medium leading-tight text-gray-600">
                                Kindly scan the QR code to fill out the registration form. After completing the payment of the
                                registration fee, please share a screenshot of the payment confirmation at metcet@met.edu or via
                                WhatsApp at 9136901541.

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