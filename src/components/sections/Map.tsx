'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';
import { HiLocationMarker, HiMail, HiPhone, HiClock, HiQuestionMarkCircle, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useState } from 'react';

export const Map = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients from all over the world. Distance is not an issue with modern communication tools and I'm experienced in remote collaboration."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. I always provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Absolutely! I offer maintenance packages for all projects. This includes updates, security patches, performance optimization, and technical support."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Yes, I can help improve, debug, or add new features to existing projects. I also provide code reviews and refactoring services."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies. I'm also experienced with various databases, cloud services, and DevOps tools."
    }
  ];

  const testimonials = [
    {
      name: "Aleksandar Petrović",
      role: "CEO, TechStart",
      content: "Kadir delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills are outstanding.",
      rating: 5
    },
    {
      name: "Melisa Bahtijarevic",
      role: "Product Manager",
      content: "Working with Kadir was a great experience. He understood our requirements perfectly and delivered on time.",
      rating: 5
    },
    {
      name: "Nikola Marković",
      role: "Startup Founder",
      content: "Kadir helped us build our MVP from scratch. His expertise in React and Node.js was invaluable to our project.",
      rating: 5
    }
  ];

  return (
    <section id="map" className="py-20 fixed-teget">
      <Container>
        <SectionTitle 
          title="Visit My Office" 
          subtitle="Find me at my workspace in Novi Pazar, Serbia" 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <FadeIn direction="left">
            <Card className="relative h-96 lg:h-full min-h-[500px] overflow-hidden shadow-2xl border border-blue-500/30">
              {/* Google Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.123456789!2d20.5122!3d43.1367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755c3c8b0b0b0b0b%3A0x0!2zNDPCsDE2JzQyLjEiTiAyMMKwMzEnMTUuNCJF!5e0!3m2!1sen!2srs!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Office Location - Novi Pazar"
              />
              
              {/* Fallback placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900/50 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Emina+Redzepagica+47A+Novi+Pazar+Serbia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-white p-8 block hover:scale-105 transition-transform duration-300"
                >
                  <HiLocationMarker className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2">Novi Pazar, Serbia</h3>
                  <p className="text-gray-300 mb-4">Emina Redžepagića 47A</p>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2 inline-block">
                    <span className="text-blue-300 font-medium">📍 Click to view on Google Maps</span>
                  </div>
                </a>
              </div>
            </Card>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn direction="right" className="space-y-8">
            {/* Address Card */}
            <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 -z-10 h-full w-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <HiLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white text-glow">Office Address</h3>
                    <p className="text-gray-400">Visit me at my workspace</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Emina Redžepagića 47A</p>
                      <p className="text-gray-300">36300 Novi Pazar, Serbia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <HiMail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-white">kadirnuhovic8@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <HiPhone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-white">+381 65 500 1615</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 -z-10 h-full w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <HiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white text-glow">Working Hours</h3>
                    <p className="text-gray-400">When I'm available</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 text-sm font-medium">
                    🟢 Available for meetings - Schedule in advance
                  </p>
                </div>
              </div>
            </Card>

            {/* Directions */}
            <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 -z-10 h-full w-full">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white text-glow mb-4">Getting Here</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <p className="text-white font-semibold mb-1">By Car</p>
                      <p className="text-gray-300 text-sm">Free parking available on the street</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Public Transport</p>
                      <p className="text-gray-300 text-sm">Bus lines 1, 3, 5 - Central Station stop</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚶</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Walking</p>
                      <p className="text-gray-300 text-sm">5 minutes from city center</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Emina+Redzepagica+47A+Novi+Pazar+Serbia&destination_place_id=ChIJv8M8v8vJZUgR7l9M2o3p8Y0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105"
                >
                  <HiLocationMarker className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white text-glow mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Got questions about my services or working together? Find answers to common inquiries below.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card className="p-6 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background decoration */}
                  <div className="absolute top-0 -z-10 h-full w-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3">
                        <HiQuestionMarkCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {expandedFaq === index ? (
                          <HiChevronUp className="w-5 h-5" />
                        ) : (
                          <HiChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                      expandedFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white text-glow mb-4">Client Testimonials</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See what my clients have to say about working with me.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background decoration */}
                  <div className="absolute top-0 -z-10 h-full w-full">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
