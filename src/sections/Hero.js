import React from 'react'
import {Link} from 'react-scroll'

function Hero() {
    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                backgroundImage: `url('https://www.ironedgegroup.com/wp-content/uploads/happy-workers-1-1024x683.jpg')`,
                transform: 'scaleX(-1)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-10" data-aos="fade-left">
                {/* Header */}
                <header className="px-6 py-4 lg:px-8">
                    <nav className="flex items-center justify-between  bg-black/20 py-7 px-10 rounded-full ">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="text-white text-lg font-medium">
                                <img src="/Company Profile Sk.c (1).svg" alt="About Us" className="h-32 w-32" />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Use Link component for smooth scrolling */}
                            <Link 
                                to="/" 
                                smooth={true} 
                                duration={500}
                                className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link 
                                to="about" 
                                smooth={true} 
                                duration={500}
                                className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
                            >
                                About Us
                            </Link>
                            {/* <Link 
                                to="services" 
                                smooth={true} 
                                duration={500}
                                className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
                            >
                                Services
                            </Link> */}
                            {/* CTA Button Link */}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="border-white border-2 p-4 rounded-full text-2xl text-white hover:bg-white/10 hover:text-white bg-transparent cursor-pointer"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <main className="px-10 py-20 lg:px-20 lg:py-32">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl lg:text-8xl font-semibold text-white mb-8 leading-tight" data-aos="fade-down">Grow your Wealth with Skeptix!</h1>

                        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                        With our expertise and dedication, we'll help you navigate challenges, seize opportunities, and achieve
                        your business goals.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                            <Link to="about"
                                smooth={true}
                                duration={500} className="bg-blue-600 text-2xl rounded-full hover:bg-blue-700 text-white px-8 py-4 cursor-pointer">
                                Discover Us
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Hero;
