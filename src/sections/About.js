import React from 'react'

function About() {

    const teamMembers = [
    {
        name: "Daffa Mochamad Sabiq",
        image: "/Daffa.jpg",
        role: "Financial Analyst",
        description: "Daffa brings a wealth of financial expertise, providing clients with insightful analysis and strategic guidance to grow their wealth."
    },
    {
        name: "Naurah Annisa Halwa Rizqulloh",
        image: "/Nisa.jpg",
        role: "Chief Technology Officer",
        description: "Naurah leads our technical strategy, ensuring we leverage the latest innovations to deliver cutting-edge solutions for our clients."
    },
    {
        name: "Muhammad Zakir Karim",
        image: "/Datil.jpg", // Replace with the correct path to Zakir's image
        role: "Lead Consultant",
        description: "Zakir is an expert in market analysis and business strategy, helping clients navigate complex challenges with clear, actionable plans."
    },
    {
        name: "Naifathaya Calistareta Vidiputri",
        image: "/Neva.jpg", // Replace with the correct path to Naifa's image
        role: "Operations Manager",
        description: "Naifathaya ensures our projects run smoothly and efficiently, maintaining high standards of quality and client satisfaction."
    },
    {
        name: "Auralea Alvinia Syaikha",
        image: "/Chika.jpg", // Replace with the correct path to Auralea's image
        role: "Marketing Specialist",
        description: "Auralea crafts our brand's message, connecting with clients and communicating our value proposition effectively."
    }
    ];

    const topRowMembers = teamMembers.slice(0, 3);
    const bottomRowMembers = teamMembers.slice(3, 5);

    return (
        <div id='about'>
        {/* Hero Section */}
        <section className="px-6 py-20 lg:px-8 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2" data-aos="fade-right">
                    <div className="w-full h-96 rounded-lg flex items-center justify-center">
                    <img src="/Company Profile Sk.c.svg" alt="About Us" className="rounded-lg h-full w-full" />
                    </div>
                </div>
                <div className="lg:w-full">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" data-aos="fade-down">Our Story</h1>
                    <p className="text-xl text-gray-700 my-8 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
                        At Skeptix Capital, we don’t follow noise—we follow numbers. Markets often chase hype, but we focus on clarity: asking whether growth is real, sustainable, and backed by fundamentals.

                        Our approach is simple. We go long on durable, well-governed businesses that compound value, and short hype-driven companies built on weak foundations.

                        Skepticism is not negativity—it is discipline. Discipline protects capital, and protected capital builds lasting wealth. We don’t invest in what shines today, but in what endures tomorrow.
                    </p>
                    {/* <a size="lg" className="bg-blue-600 rounded-full hover:bg-blue-700 my-4 text-white px-8 py-4 text-lg">
                    Learn More
                    </a> */}
                </div>
            </div>
        </section>

        {/* Company Background */}
        <section className="px-6 py-20 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="fade-down">Company Background</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
                Skeptix Capital was established on a philosophy of contrarianism during an age of market noise, that true discipline as an investor is a function of healthy skepticism. We began as a group of investors who were convinced that enduring wealth is not built on the chase of fleeting trends but on the rigorous, numerically intensive analysis of companies meant to last.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                We have developed today to a reliable partner to customers who want substance over hype, helping them to weather market ups and downs, protect their capital, and grow wealth steadily over time. Our journey is guided by an unyielding commitment to our principle that skepticism creates discipline, discipline protects capital, and protected capital is the foundation of sustainable success.
            </p>
            </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6 py-20 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Vision */}
                <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-down">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
                    Why should enduring wealth be a casualty of fleeting market fads? Our vision is to forge a new standard where the courage to doubt is the genesis of discipline, and the rigor of the skeptic is the market's most valued currency. We will be the firm where intellectual honesty is the only accepted bedrock of performance, creating a future where capital is commanded not by noise, but by conviction born from proof.
                </p>
                </div>

                {/* Mission */}
                <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-down">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
                    Our mission is to weaponize doubt. We view market hype not as a threat, but as the very fuel for our conviction. This discipline allows us to systematically short the market’s delusions, harvesting capital from folly to reinvest in its polar opposite: the unglamorous, undeniable fortresses of global commerce. This dual engine ensures our partners' capital is not just protected by a bedrock of real value; it is actively fortified by the market's irration
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12" data-aos="fade-down">Meet Our Team</h2>

            {/* Top row with 3 members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12" data-aos="fade-right" data-aos-delay="200">
                {topRowMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className="text-blue-600 font-medium mb-3">Financial Analyst</p>
                        {member.description && (
                            <p className="text-gray-700 text-sm max-w-xs mx-auto">
                                {member.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom row with 2 members, centered */}
            <div className="flex flex-wrap justify-center gap-12" data-aos="fade-left" data-aos-delay="400">
                    {bottomRowMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                            <p className="text-blue-600 font-medium mb-3">Financial Analyst</p>
                            {member.description && (
                                <p className="text-gray-700 text-sm max-w-xs mx-auto">
                                    {member.description}
                                </p>
                            )}
                        </div>
                    ))}
            </div>
        </section>
      </div>
    )
}

export default About;
