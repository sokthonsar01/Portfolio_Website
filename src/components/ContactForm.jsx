import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendMessage } from '../services/api';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    try {
      // The backend Message model requires a 'subject' field, 
      // so we add a default one here since our UI doesn't have that input.
      await sendMessage({
        ...formData,
        subject: 'New Message from Portfolio Website'
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-form-container glass-panel">
      {status === 'success' ? (
        <div className="form-success">
          <CheckCircle size={48} className="success-icon" />
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button className="btn btn-outline" onClick={() => setStatus('idle')}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="glass-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="glass-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="How can I help you?"
              className="glass-input"
            ></textarea>
          </div>
          
          {status === 'error' && (
            <div className="form-error">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-primary submit-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="loading-spinner"></span>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
