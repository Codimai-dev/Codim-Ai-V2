import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {
    onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
    return (
        <footer className="py-24 bg-wispr-dark relative z-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex md:flex-row justify-between items-center gap-16 mb-20 text-left flex-wrap">
                    {/* Brand Section */}
                    <div className="flex-[2] space-y-8">
                        <Logo variant="light" />
                        <p className="text-slate-400 text-[16px] leading-[1.6] max-w-sm font-sodo">
                            Engineering systemic scalability for the global enterprise. The unified sales layer that bridges the gap between visibility and closing.
                        </p>
                        <div className="flex gap-5">
                            {[
                                { Icon: Instagram, href: '#', label: 'Instagram' },
                                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { Icon: Twitter, href: '#', label: 'Twitter' },
                                { Icon: Facebook, href: '#', label: 'Facebook' }
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-wispr-purple hover:border-wispr-purple transition-all duration-300 group"
                                    aria-label={label}
                                >
                                    <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1 space-y-8">
                        <h4 className="font-brand font-black text-[11px] uppercase tracking-[0.3em] text-wispr-purple/80">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
                            <li><Link to="/tech" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-sm">Our Tech</Link></li>
                            <li><Link to="/pricing" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link to="/article" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-sm">Article</Link></li>
                            <li>
                                <button
                                    onClick={onContactClick}
                                    className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="flex-1 space-y-8">
                        <h4 className="font-brand font-black text-[11px] uppercase tracking-[0.3em] text-wispr-purple/80">Office</h4>
                        <div className="flex gap-4 group cursor-default">
                            <div className="mt-1">
                                <MapPin size={18} className="text-wispr-purple transition-opacity" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-sodo font-bold text-slate-400 text-sm leading-relaxed">
                                    123 Innovation Drive,<br />
                                    Tech Valley, Suite 450<br />
                                    San Francisco, CA 94107
                                </p>
                                <p className="font-sodo font-bold text-wispr-purple text-xs pt-2">contact@codimai.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-[13px] font-medium font-sodo">
                        &copy; {new Date().getFullYear()} Codimai . All rights reserved.
                    </p>
                    <div className="flex gap-10 text-[11px] font-black text-slate-500 uppercase tracking-widest font-brand">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;