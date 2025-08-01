'use client';

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = { ...errors };
    let valid = true;

    if (!formData.firstName.trim()) errs.firstName = (valid = false, 'First name is required');
    if (!formData.lastName.trim()) errs.lastName = (valid = false, 'Last name is required');
    if (!formData.email.trim()) errs.email = (valid = false, 'Email is required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = (valid = false, 'Email is invalid');
    if (!formData.message.trim()) errs.message = (valid = false, 'Message is required');

    setErrors(errs);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch('https://formspree.io/f/myzjgrya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const msg = document.createElement('div');
      msg.className = `fixed top-4 right-4 px-6 py-3 rounded-md shadow-lg text-white ${res.ok ? 'bg-green-500' : 'bg-red-500'}`;
      msg.textContent = res.ok ? 'Message sent successfully!' : 'Failed to send message.';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 3000);

      if (res.ok) setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch {
      const err = document.createElement('div');
      err.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg';
      err.textContent = 'Error sending message.';
      document.body.appendChild(err);
      setTimeout(() => err.remove(), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-amber-800 mb-4">Contact Us</h1>
          <p className="max-w-xl mx-auto">We’re here to assist you on your yoga journey.</p>
        </header>

        {/* Main */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left: Info */}
          <div className="bg-white shadow-lg p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold text-amber-800">Get in Touch</h2>
            <Info icon="fas fa-map-marker-alt" title="Visit Us" text="Sewa UK, 110 High St, Edgware, HA8 7HF" />
            <Info icon="fas fa-phone-alt" title="Call Us" text="+44(0) 7564 674 669" />
            <Info icon="fas fa-envelope" title="Email Us" text="info@yog-kulam.org" />
            <SocialLinks />
          </div>

          {/* Right: Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="firstName" label="First Name*" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                <Input name="lastName" label="Last Name*" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
              </div>
              <Input name="email" label="Email Address*" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
              <Input name="subject" label="Subject" value={formData.subject} onChange={handleChange} />
              <Textarea name="message" label="Message*" value={formData.message} onChange={handleChange} error={errors.message} />
              <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Button */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-2">Have Questions?</h2>
          <a href="#" className="inline-block bg-amber-100 text-amber-800 py-3 px-6 rounded hover:bg-amber-200">View FAQ</a>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-10 px-4 max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.0701357495584!2d-0.2767768842296352!3d51.611721679654865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876134c05df0a37%3A0x9389a3653db34c9c!2sSewa%20UK!5e0!3m2!1sen!2sin!4v1717520677510!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          className="w-full rounded-md shadow-md"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

// Reusable Components
const Input = ({ name, label, type = 'text', value, onChange, error }: any) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
    />
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Textarea = ({ name, label, value, onChange, error }: any) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
      name={name}
      rows={5}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
    />
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Info = ({ icon, title, text }: any) => (
  <div className="flex items-start space-x-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
      <i className={icon}></i>
    </div>
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-xl font-medium text-amber-800 mb-2">Connect With Us</h3>
    <div className="flex space-x-3">
      {['facebook-f', 'instagram', 'twitter', 'youtube'].map((icon, i) => (
        <a key={i} href="#" className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-700">
          <i className={`fab fa-${icon}`}></i>
        </a>
      ))}
    </div>
  </div>
);
