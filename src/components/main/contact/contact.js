import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './contactform/contactform';

export default function Contact(props) {
    return (
        <section id="contact">
            <div className="split-content">
                <div id="contact-form">
                    <h2>Contact Us</h2>
                    <p>Intersted in taking part in an upcoming event/program, or just have a question. Use the form below to send us a message and we will get back to you as soon as possible</p>
                    <ContactForm />
                </div>
                <div id="contact-details">
                    <h3>Follow us on Socials</h3>
                    <div id="social-icons">
                        <a href="https://www.facebook.com/albanyrollerderby/" target="_blank" alt="Albany Roller Derby's Facebook" rel="noreferrer">
                            <span aria-hidden="true"><FontAwesomeIcon icon={['fab', 'facebook']}/></span>
                            <span className="sr-only">Albany Roller Derby's Facebook</span>
                        </a>
                        <a href="https://twitter.com/AlbanyDerby" target="_blank" rel="noreferrer">
                            <span aria-hidden="true"><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
                            <span className="sr-only">Albany Roller Derby's Instagram</span>
                        </a>
                        <a href="https://www.instagram.com/ardlwa/" target="_blank" rel="noreferrer">
                            <span aria-hidden="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                            <span className="sr-only">Albany Roller Derby's Twitter</span>
                        </a>
                    </div>
                    <address>
                        <p>
                            <label>Email: </label>
                            <a href="mailto:albanyrollerderby@gmail.com">albanyrollerderby@gmail.com</a>
                            <br/>
                            <label>Address: </label> 
                            57 Barker Road, Albany, WA
                        </p>
                    </address>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.8359148837458!2d117.8756176157732!3d-35.01081238665926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a39212a021e3083%3A0x8e11198411f61e42!2s57%20Barker%20Rd%2C%20Centennial%20Park%20WA%206330!5e0!3m2!1sen!2sau!4v1677827043375!5m2!1sen!2sau" 
                            width="500" 
                            height="350" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Albany Roller Derby Head Quarters"></iframe>  
                </div>
                
            </div>
        </section>
    );
  }