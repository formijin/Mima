import './Footer.css';
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
    return (
        <footer>
        <div className="container">

            <div className="group-1">
                <nav>
                    <div className="link-set">
                        <span className='title'>Product</span>
                        <a href="">Create Invoice/Receipt</a>
                        <a href="">Payroll Management</a>
                        <a href="">Payroll Management</a>
                    </div>
                    <div className="link-set">
                        <span className='title'>Company</span>
                        <a href="">About</a>
                        <a href="">FAQs</a>
                        <a href="">Blog</a>
                    </div>
                <div className="link-set">
                        <span className='title'>Legal</span>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                    </div>
                </nav>
                <p>
                    With Mima, you can easily document and monitor your daily business transactions,
                    send invoices and receipts to your customers, monitor debts owed to you, pay your employees,
                    send and receive funds.
                </p>
            </div>
            <div className="group-2">
                <a href="">
                    <img src={Logo} alt="Mima Logo" className="logo" />
                </a>
                <p>
                    2055 Limestone Road <br />
                    Wilmington, DE 19808 US<br />
                    +(234)-803-059-1180<br />
                    +(234)-706-967-1225<br />
                    hello@trymima.com
                </p>
                <div className="social-links">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                    <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
