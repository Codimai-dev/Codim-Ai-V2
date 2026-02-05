import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import { Secondhero } from '../../components/Home/Secondhero';
import { ProblemSection } from '../../components/Home/ProblemSection';
import { DefinitionSection } from '../../components/Home/DefinitionSection';
import { SystemWorkflow } from '../../components/Home/SystemWorkflow';
import { LifecycleSection } from '../../components/Home/LifecycleSection';
import { ContrastSection } from '../../components/Home/ContrastSection';
import { AudienceSection } from '../../components/Home/AudienceSection';
import { FinalStatement } from '../../components/Home/FinalStatement';
import { ActionsSection } from '../../components/Home/ActionsSection';
import StickyBar from '../../components/StickyBar';
import Footer from '../../components/Footer';
import BookDemoModal from '../../components/BookDemoModal';

const Home: React.FC = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white">
            <Navbar onBookDemo={openBookModal} />
            <Hero onBookDemo={openBookModal} />
            {/* Dark Theme: Hero Content / Secondhero */}
            <section className="relative bg-[#000000] overflow-hidden py-24 sm:py-32 flex items-center">
                <div className="absolute inset-0 grid-bg-dark opacity-50"></div>
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>
                <main className="max-w-[1200px] mx-auto w-full px-6 md:px-8 relative z-10">
                    <Secondhero />
                </main>
            </section>

            {/* Light Theme: Problem */}
            <section className="relative bg-[#ffffff] py-24 sm:py-32 border-y border-black/5">
                <div className="absolute inset-0 grid-bg-light"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <ProblemSection />
                </main>
            </section>

            {/* Dark Theme: Definition */}
            <section className="relative bg-[#000000] py-24 sm:py-32">
                <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <DefinitionSection />
                </main>
            </section>

            {/* Light Theme: Workflow */}
            <section className="relative bg-[#ffffff] py-24 sm:py-32 border-y border-black/5">
                <div className="absolute inset-0 grid-bg-light"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <SystemWorkflow />
                </main>
            </section>

            {/* Dark Theme: Lifecycle */}
            <section className="relative bg-[#000000] py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <LifecycleSection />
                </main>
            </section>

            {/* Light Theme: Contrast */}
            <section className="relative bg-[#ffffff] py-24 sm:py-32 border-y border-black/5">
                <div className="absolute inset-0 grid-bg-light"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <ContrastSection />
                </main>
            </section>
            {/* Dark Theme: Audience & Statement */}
            <section className="relative bg-[#000000] py-24 sm:py-32">
                <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <AudienceSection />
                    <div className="mt-24 sm:mt-32">
                        <FinalStatement />
                    </div>
                </main>
            </section>

            {/* Light Theme: Action */}
            <section className="relative bg-[#ffffff] py-24 border-t border-black/5">
                <div className="absolute inset-0 grid-bg-light"></div>
                <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <ActionsSection onBookDemo={openBookModal} />
                </main>
            </section>
            <StickyBar onBookDemo={openBookModal} />
            <Footer onContactClick={scrollToContact} />
            <BookDemoModal open={isBookModalOpen} onClose={closeBookModal} />
        </div>
    );
};

export default Home;
