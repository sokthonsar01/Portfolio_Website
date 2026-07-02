import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's build something together!</h3>
            <p className="contact-subtitle">
              Whether you have a question, a project idea, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail className="info-icon" size={24} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>sokthonsar01@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin className="info-icon" size={24} />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Phone className="info-icon" size={24} />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+885 97 3672559</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
