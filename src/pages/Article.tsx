import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import BookDemoModal from '../../components/BookDemoModal';

const Article: React.FC = () => {
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

            <main className="flex-grow flex items-center justify-center py-48">
                <div className="text-center px-6 reveal-advanced active">
                    <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-wispr-purple/30 bg-wispr-purple/10">
                        <span className="text-wispr-purple font-brand font-black text-[10px] uppercase tracking-[0.4em]">Insights & Resources</span>
                    </div>
                    <h1 className="font-lander text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter mb-12">
                        Coming <br />
                        <span className="text-slate-400">Soon.</span>
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl font-sodo max-w-2xl mx-auto leading-relaxed">
                        We are currently curating the latest insights on sales automation, AI infrastructure, and engineering growth systemic scalability.
                    </p>
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

export default Article;
