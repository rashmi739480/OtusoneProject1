import blogIcon from '/public/icons/blog.png';
import instagramIcon from '/public/icons/instagram.png';
import twitterIcon from '/public/icons/twitter.png';
import youtubeIcon from '/public/icons/youtube.png';
import facebookIcon from '/public/icons/facebook.png';
import { Link } from 'react-router-dom';


  
const Footer = () => {
    const footerSections = [
        {
            title: "Company",
            links: [
                "About Us",
                "Media Coverage",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
                "Refunds",
            ],
        },
        {
            title: "Services",
            links: [
                "Local Car Rentals",
                "Outstation Taxi",
                "One Way Cabs",
                "Corporate Car Rental",
                "Airport Taxi",
            ],
        },
        {
            title: "Get in Touch",
            links: ["Contact Us", "Sitemap", "XML Sitemap"],
            socialIcons: [
                { icon: blogIcon, alt: "Blog" },
                { icon: instagramIcon, alt: "Instagram" },
                { icon: twitterIcon, alt: "Twitter" },
                { icon: youtubeIcon, alt: "YouTube" },
                { icon: facebookIcon, alt: "Facebook" },
            ],
        },
    ];

    return (
        <footer className="py-10 w-full bg-black text-white mt-9">
            <div className="container mx-auto flex flex-wrap justify-between items-start gap-8 px-4">
                {/* Features Column */}
                <div>
                    <div>
                        <h4 className="font-sans text-[13.15px] font-semibold leading-[16.55px] tracking-[0.528px]">
                            Features
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-[9.65px] text-white">Cash on Delivery</li>
                            <li className="text-[9.65px] text-white">Serviceable Pin Codes</li>
                            <li className="text-[9.65px] text-white">API Integration</li>
                            <li className="text-[9.65px] text-white">Multiple Pickup Locations</li>
                            <li className="text-[9.65px] text-white">Print Shipping Labels</li>
                            <li className="text-[9.65px] text-white">Email & SMS Notifications</li>
                            <li className="text-[9.65px] text-white">Amazon Self-Ship</li>
                            <li className="text-[9.65px] text-white">All Features</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-sans text-[13.15px] font-semibold leading-[16.55px] tracking-[0.528px]">
                            Partner
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-[9.65px] text-white">Careers</li>
                            <li className="text-[9.65px] text-white">Technology</li>
                            <li className="text-[9.65px] text-white">Became a Partner</li>
                        </ul>
                    </div>
                </div>

                {/* Resources Column */}
                <div>
                    <h4 className="font-sans text-[13.15px] font-semibold leading-[16.55px] tracking-[0.528px]">
                        Resources
                    </h4>
                    <ul className="space-y-2">
                        <li className="text-[9.65px] text-white">Shipping Rate Calculator</li>
                        <li className="text-[9.65px] text-white">Volumetric Weight Calculator</li>
                        <li className="text-[9.65px] text-white">Free eCommerce Tools</li>
                        <li className="text-[9.65px] text-white">Knowledge Base</li>
                        <li className="text-[9.65px] text-white">Coupons</li>
                        <li className="text-[9.65px] text-white">FAQs</li>
                        <li className="text-[9.65px] text-white">Developers</li>
                        <li className="text-[9.65px] text-white">Blog</li>
                        <li className="text-[9.65px] text-white">Ebook</li>
                        <li className="text-[9.65px] text-white">Encyclopedia</li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h4 className="font-sans text-[13.15px] font-semibold leading-[16.55px] tracking-[0.528px]">
                        Company
                    </h4>
                    <ul className="space-y-2">
                        <li className="text-[9.65px] text-white">
                            Address: Continental Rentals, D-9, Ground floor, sector-3, Noida Gautam Buddha Nagar, Noida 201301.
                        </li>
                        <li className="text-[9.65px] text-white">Contact Us: support@Continentalrentals.com</li>
                       <Link to="/about"> <li className="text-[9.65px] text-white">About Us</li></Link>
                        <li className="text-[9.65px] text-white">Customers</li>
                        <li className="text-[9.65px] text-white">Careers</li>
                        <li className="text-[9.65px] text-white">Company Updates</li>
                    </ul>
                    <div className="mt-5">
                        <h4 className="font-sans text-[13.15px] font-semibold leading-[16.55px] tracking-[0.528px]">
                            Support
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-[9.65px] text-white">Help Center</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-3 text-[9.65px] text-gray-600 w-[70%] mx-auto text-center">
                © 2024 OTUSONE LLP. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
