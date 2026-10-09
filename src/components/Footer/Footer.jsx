import "../../styles/Footer.css";
import logo from "../../assets/logo.png";

const columns = [
    { title: "About", links: ["About Us", "Our Branches", "Changelog"] },
    { title: "Quick Links", links: ["FAQs", "Recipes", "Contact Us"] },
    { title: "Help & Support", links: ["Terms of Privacy", "Privacy Policy", "Security"] },
    { title: "Company", links: ["Blog", "Contact"] },
    { title: "Social", links: ["Facebook", "Instagram", "Twitter"] },
];

function Footer() {

return (
    <footer className="footer">
    <div className="footer__inner">
        <div className="footer__logo"><img src={logo} alt="EasyMart Logo" /></div>
        {columns.map((col) => (
        <div key={col.title} className="footer__col">
            <h4>{col.title}</h4>
            {col.links.map((link) => (
            <a key={link} href="#">
                {link}
            </a>
            ))}
        </div>
        ))}
    </div>
    <p className="footer__copy">All rights reserved © 2024 EasyMart</p>
    </footer>
);
}

export default Footer;
