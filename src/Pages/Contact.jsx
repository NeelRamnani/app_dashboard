import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/contacts', { contact: { name, email, message } });
      toast.success('Contact submitted successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      if (err.response) {
        toast.error(err.response.data.message || 'Error submitting contact');
      } else {
        toast.error('Error submitting contact');
      }
    }
  };

  return (
    <div>
      <div className="ImaginAi_fn_content">
        {/* PAGE (all pages go inside this div) */}
        <div className="ImaginAi_fn_page">
          {/* Contact Page */}
          <div className="ImaginAi_fn_contact_page">
            {/* Page Title */}
            <div className="ImaginAi_fn_pagetitle">
              <h2 className="title">Contact Us</h2>
            </div>
            {/* !Page Title */}
            <div className="contactpage">
              <div className="container small">
                <p>We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact form below. Our dedicated team is ready to assist you with any questions or concerns you may have.</p>
                <br></br>
                <div className="fn_contact_form">
                  <form className="contact_form" id="contact_form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="input_list">
                      <ul>
                        <li>
                          <input
                            id="name"
                            type="text"
                            placeholder="Full Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            placeholder="Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </li>
                        <li>
                          <input
                            id="message"
                            type="text"
                            placeholder="Message *"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </li>
                        <li>
                          <div>
                            <button type="submit" className="ImaginAi_fn_button">
                              <span>Send Message</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                 
                  </form>
                </div>
       </div></div></div>
          {/* !Contact Page */}
        </div>
        {/* !PAGE (all pages go inside this div) */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
