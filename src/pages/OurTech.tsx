import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import BookDemoModal from '../../components/BookDemoModal';
import Hero from '../../components/OurTech/Hero';
import ToolSection from '../../components/OurTech/ToolSection';
import { TOOLS } from '../../constants';

const OurTech: React.FC = () => {
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

        document.querySelectorAll('.reveal-advanced').forEach(el => observer.observe(el));

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
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white flex flex-col">
            <Navbar onBookDemo={openBookModal} />

            <main className="flex-grow">
                <Hero />

                {/* Tool Sections */}
                <div className="relative">
                    {TOOLS.map((tool, index) => (
                        <ToolSection key={tool.id} tool={tool} index={index} onBookDemo={openBookModal} />
                    ))}
                </div>
            </main>

            <div id="contact">
                <Footer onContactClick={scrollToContact} />
            </div>
            <StickyBar onBookDemo={openBookModal} />
            <BookDemoModal open={isBookModalOpen} onClose={closeBookModal} />
        </div>
    );
};

export default OurTech;
