import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: '1000', delay: '500'})
    }, [])
    return (
        <div data-aos="fade-down" className='bg-base-200'>
            <footer className="footer max-w-6xl mx-auto p-10 text-base-content">
                <aside>
                    <h1 className="text-2xl font-bold text-orange-600">Restaurant</h1>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;