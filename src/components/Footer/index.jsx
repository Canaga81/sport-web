import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (

        <footer>

            <div className="container footer__container">

                <article>

                    <Link to='/' className='logo'>
                        <img src={Logo} alt="" />
                    </Link>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Qui, sapiente quia obcaecati maiores pariatur est doloribus!
                        Illum quia quisquam inventore?
                    </p>

                    <div className="footer__socials">

                        <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
                        <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
                        <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>

                    </div>

                </article>

                <article>

                    <h4>Permalinks</h4>

                    <Link className='link_a' to='/about'>About</Link>
                    <Link className='link_a' to='/plans'>Plans</Link>
                    <Link className='link_a' to='/trainers'>Trainers</Link>
                    <Link className='link_a' to='/blog'>Blog</Link>
                    <Link className='link_a' to='/contact'>Contact</Link>

                </article>

                <article>

                    <h4>Insights</h4>

                    <Link className='link_a' to='/blog'>Blog</Link>
                    <Link className='link_a' to='/s'>Case Studies</Link>
                    <Link className='link_a' to='/s'>Events</Link>
                    <Link className='link_a' to='/s'>Communities</Link>
                    <Link className='link_a' to='/s'>FAQs</Link>

                </article>

                <article>
                    <h4>Get in Touch</h4>

                    <Link className='link_a' to='/contact'>Contact Us</Link>
                    <Link className='link_a' to='/s'>Support</Link>
                </article>

            </div>

            <div className="footer__copyright"> 
                <small>2023 CNG SPORT &copy; All Rights Reserved</small>
            </div>

        </footer>

    );

};

export default Footer;