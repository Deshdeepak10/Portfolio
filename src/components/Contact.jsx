import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, succeeded, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Use Formspree (You'll need to create a free account at formspree.io to get your unique ID)
      // For now, I'm setting it up. You just need to replace 'YOUR_FORM_ID' with the one from Formspree.
      const response = await fetch('https://formspree.io/f/mpqeanao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('succeeded');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="container contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's <br /> Build
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Conversations about <br /> code, systems, and devops.</h3>
          <p className="contact-desc">
            Ready to partner on product engineering, API design, and scalable 
            backend systems. If your next release needs solid architecture and 
            clean execution, let's connect.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FiMail size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Direct</span>
                <a href="mailto:anirudhkumar6035@gmail.com" className="info-value">anirudhkumar6035@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiPhone size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Call</span>
                <a href="tel:7678359790" className="info-value">+91 7678359790</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiMapPin size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Presence</span>
                <span className="info-value">Remote / Global</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {status === 'succeeded' ? (
              <motion.div
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <FiCheckCircle size={60} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                <h3>Message Sent</h3>
                <p>Thank you, Desh Deepak will be in touch soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: '2rem' }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form key="form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What should I call you?"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Where can I reach you?"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">The Vision</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Send Request'}
                </button>
                {status === 'error' && (
                  <p style={{ color: '#ff7675', marginTop: '1rem', fontSize: '0.9rem' }}>
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
