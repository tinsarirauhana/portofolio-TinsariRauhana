import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import TiltCard from './TiltCard';
import FadeInView from './FadeInView';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'tinsarirauhanaa@gmail.com',
      href: 'mailto:tinsarirauhanaa@gmail.com'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'Tinsari Rauhana',
      href: 'https://www.linkedin.com/in/tinsari-rauhana/'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: '@tinsarirauhana',
      href: 'https://github.com/tinsarirauhana'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Banda Aceh, Indonesia',
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-28 relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeInView delay={0.1} direction="up">
          <div className="mb-12">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-transparent" />
          </div>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Contact Info */}
          <FadeInView delay={0.2} direction="left">
            <div className="h-full">
              <TiltCard className="h-full">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-10 border border-pink-500/20 hover:border-pink-500/40 transition-all h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">Get in Touch</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Feel free to reach out for collaborations, opportunities, or just to say hi!
                    </p>
                  </div>

                  <div className="space-y-6 flex-grow">
                    {contactInfo.map((info, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="p-3 rounded-xl bg-pink-500/20 border border-pink-500/30 group-hover:bg-pink-500/30 group-hover:border-pink-500 transition-all">
                          <info.icon className="text-pink-500" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-white font-medium hover:text-pink-500 transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeInView>

          {/* Right Side - Contact Form */}
          <FadeInView delay={0.3} direction="right">
            <div className="h-full">
              <TiltCard className="h-full">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-10 border border-pink-500/20 hover:border-pink-500/40 transition-all h-full flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <label className="block text-gray-300 mb-2 font-medium">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full flex-grow px-4 py-3 bg-gray-900/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                        placeholder="Tell me about your project or inquiry..."
                        style={{ minHeight: '120px' }}
                      />
                    </div>

                    {status.message && (
                      <div className={`flex items-center gap-3 p-4 rounded-xl border ${
                        status.type === 'success' 
                          ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                          : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}>
                        {status.type === 'success' ? (
                          <CheckCircle size={20} />
                        ) : (
                          <AlertCircle size={20} />
                        )}
                        <p className="text-sm">{status.message}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </TiltCard>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default Contact;