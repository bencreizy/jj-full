import React from 'react';

interface HeroProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {

    const handleRequestServiceClick = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative flex items-center justify-start text-center overflow-hidden pt-0">
            
            {/* Background (icons removed) */}
            <div className="absolute inset-0 z-0"></div>

            {/* Main content */}
            <div className="relative z-20 container mx-auto px-4 pt-20">

                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="https://raw.githubusercontent.com/bencreizy/JJ_icons_videos/main/Logopit_1761515132355.png"
                        alt="J & J's Automotive-Truck Repair Main Logo"
                        className="mx-auto h-auto max-w-[95%] md:max-w-[90%] will-change-transform translate-z-0 transition-all duration-300 cursor-pointer hover:scale-105"
                        draggable="false"
                    />
                </div>

                {/* Request Service Button */}
                <div className="mt-6">
                    <button
                        onClick={handleRequestServiceClick}
                        className="bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-8 rounded-sm border-2 border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-lg hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 will-change-transform translate-z-0"
                        draggable="false"
                    >
                        Request Service
                    </button>
                </div>

                {/* Emergency text + Phone Number */}
                <div className="mt-16">
                    <p
                        className="text-lg md:text-xl text-gray-300"
                        draggable="false"
                    >
                        24/7 EMERGENCY BREAKDOWN SERVICE
                    </p>

                    <a
                        href="tel:8554608778"
                        className="mt-2 inline-block text-3xl md:text-5xl font-bold orbitron text-slate-200 transition-transform hover:scale-105 whitespace-nowrap will-change-transform translate-z-0"
                        draggable="false"
                    >
                        (855) 460-8778
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
