'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import FeaturesKey from '@/components/FeaturesKey';
import WhyYogKulam from '@/components/WhyYogKulam';
import Link from 'next/link';

const App: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
    

      {/* Hero Section */}
      <Header/>

      
      <FeaturesKey/>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Yog-Kulam, we believe that yoga is more than just physical exercise. It's a transformative practice that connects the mind, body, and spirit. Founded in 2010, our studio has become a sanctuary for those seeking balance and inner peace in their busy lives.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our experienced instructors are dedicated to guiding you through your yoga journey, whether you're a beginner taking your first steps or an advanced practitioner looking to deepen your practice. We offer a variety of classes and workshops designed to accommodate all levels and interests.
              </p>
              
              
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20peaceful%20yoga%20practitioner%20in%20a%20white%20flowing%20outfit%20performing%20a%20graceful%20pose%20against%20a%20serene%20natural%20background%20with%20soft%20lighting%2C%20embodying%20tranquility%20and%20mindfulness%2C%20professional%20photography%20with%20perfect%20composition&width=600&height=600&seq=2&orientation=squarish" 
                alt="Yoga practitioner in peaceful pose" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* why yog Kulam */}
      <WhyYogKulam/>

      {/* Our Methods */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://readdy.ai/api/search-image?query=A%20person%20performing%20a%20flowing%20vinyasa%20yoga%20pose%20with%20perfect%20form%20against%20a%20minimalist%20light%20background%2C%20showing%20strength%20and%20flexibility%2C%20professional%20studio%20lighting%20highlighting%20the%20graceful%20movement&width=400&height=300&seq=3&orientation=landscape",
                title: "Vinyasa Flow",
                description: "Dynamic sequences that synchronize breath with movement, building heat, strength, and flexibility."
              },
              {
                image: "https://readdy.ai/api/search-image?query=A%20person%20in%20a%20deep%20meditation%20pose%20on%20a%20yoga%20mat%20with%20a%20serene%20expression%2C%20sitting%20in%20perfect%20lotus%20position%20with%20hands%20in%20mudra%2C%20soft%20natural%20lighting%20creating%20a%20peaceful%20atmosphere&width=400&height=300&seq=4&orientation=landscape",
                title: "Yin Yoga",
                description: "Slow-paced style with poses held for longer periods, targeting deep connective tissues and fascia."
              },
              {
                image: "https://readdy.ai/api/search-image?query=A%20yoga%20instructor%20gently%20adjusting%20a%20students%20pose%20with%20care%20and%20precision%2C%20in%20a%20bright%20airy%20studio%20with%20natural%20light%2C%20showing%20the%20personal%20attention%20and%20guidance%20offered%20in%20yoga%20practice&width=400&height=300&seq=5&orientation=landscape",
                title: "Hatha Yoga",
                description: "Traditional approach focusing on fundamental postures, breathing techniques, and meditation."
              }
            ].map((method, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={method.image} 
                    alt={method.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">{method.title}</h3>
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <Link href="/training" className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=A%20diverse%20group%20of%20people%20practicing%20yoga%20together%20in%20a%20beautiful%20studio%20with%20natural%20light%20streaming%20through%20large%20windows%2C%20showing%20community%20and%20connection%20through%20yoga%20practice%2C%20warm%20and%20inviting%20atmosphere&width=700&height=500&seq=6&orientation=landscape" 
                  alt="Group yoga class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-black">Join Our Community Classes</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Experience the power of practicing in community. Our group classes offer a supportive environment where you can grow your practice alongside others on the same path. With small class sizes, our instructors can provide personalized attention to help you refine your technique and deepen your understanding.
                </p>
                <Link href='/registration-form'><button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium self-start cursor-pointer !rounded-button whitespace-nowrap">
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yoga */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Why Yoga Matters</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                In today's fast-paced world, yoga offers a sanctuary of calm and balance. Regular practice has been shown to reduce stress, improve flexibility, build strength, and enhance overall well-being. Beyond the physical benefits, yoga provides tools for mental clarity, emotional stability, and spiritual growth.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Yog-Kulam, we believe that the ancient wisdom of yoga is more relevant than ever. Our approach integrates traditional teachings with modern understanding to create a practice that serves the needs of contemporary life while honoring yoga's rich heritage.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {['Stress Reduction', 'Improved Flexibility', 'Increased Strength', 'Better Posture', 'Enhanced Focus', 'Emotional Balance'].map((benefit, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20person%20in%20a%20challenging%20yoga%20pose%20demonstrating%20strength%20and%20balance%2C%20with%20perfect%20form%20against%20a%20clean%20minimalist%20background%2C%20professional%20photography%20with%20artistic%20composition&width=300&height=300&seq=7&orientation=squarish" 
                alt="Strength yoga pose" 
                className="rounded-xl w-full h-full object-cover"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=A%20person%20in%20a%20deep%20stretching%20yoga%20pose%20showing%20flexibility%20and%20grace%2C%20with%20serene%20expression%20and%20perfect%20alignment%2C%20soft%20natural%20lighting%20creating%20a%20peaceful%20atmosphere&width=300&height=300&seq=8&orientation=squarish" 
                alt="Flexibility yoga pose" 
                className="rounded-xl w-full h-full object-cover"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=A%20person%20in%20a%20meditative%20yoga%20pose%20with%20hands%20in%20prayer%20position%2C%20eyes%20closed%20in%20peaceful%20concentration%2C%20soft%20lighting%20creating%20a%20spiritual%20atmosphere%2C%20showing%20mindfulness%20practice&width=300&height=300&seq=9&orientation=squarish" 
                alt="Meditation yoga pose" 
                className="rounded-xl w-full h-full object-cover"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=A%20group%20yoga%20class%20with%20diverse%20practitioners%20in%20synchronized%20poses%2C%20showing%20community%20and%20connection%2C%20in%20a%20beautiful%20studio%20with%20natural%20light%2C%20warm%20and%20supportive%20atmosphere&width=300&height=300&seq=10&orientation=squarish" 
                alt="Group yoga class" 
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Explore Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image: "https://readdy.ai/api/search-image?query=A%20person%20in%20an%20aerial%20yoga%20pose%20using%20silk%20hammocks%2C%20demonstrating%20grace%20and%20strength%20while%20suspended%2C%20in%20a%20bright%20studio%20with%20professional%20lighting%2C%20showing%20the%20unique%20practice%20of%20aerial%20yoga&width=300&height=300&seq=11&orientation=squarish",
                title: "Aerial Yoga",
                description: "Experience freedom and playfulness as you practice yoga suspended in silk hammocks."
              },
              {
                image: "https://readdy.ai/api/search-image?query=A%20person%20in%20a%20deep%20breathing%20exercise%20with%20perfect%20posture%2C%20hands%20in%20specific%20mudra%20position%2C%20with%20a%20serene%20expression%20showing%20mindfulness%20and%20concentration%2C%20soft%20lighting%20highlighting%20the%20peaceful%20practice&width=300&height=300&seq=12&orientation=squarish",
                title: "Breathwork",
                description: "Master the art of conscious breathing to reduce stress and increase vitality."
              },
              {
                image: "https://readdy.ai/api/search-image?query=A%20yoga%20instructor%20demonstrating%20a%20pose%20to%20attentive%20students%20in%20a%20teacher%20training%20session%2C%20in%20a%20beautiful%20studio%20with%20natural%20light%2C%20showing%20the%20educational%20aspect%20of%20yoga%20practice&width=300&height=300&seq=13&orientation=squarish",
                title: "Teacher Training",
                description: "Deepen your practice and learn to guide others on their yoga journey."
              }
            ].map((classType, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                  <img 
                    src={classType.image} 
                    alt={classType.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{classType.title}</h3>
                <p className="text-gray-700 mb-4">{classType.description}</p>
                <Link href='/training'><button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Learn More
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-black">Upcoming Events</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://readdy.ai/api/search-image?query=A%20yoga%20retreat%20setting%20with%20mats%20arranged%20for%20a%20workshop%20in%20a%20beautiful%20natural%20environment%2C%20peaceful%20and%20inviting%20atmosphere%2C%20professional%20photography%20with%20perfect%20lighting&width=500&height=300&seq=14&orientation=landscape",
                title: "Summer Solstice Retreat",
                date: "June 21, 2025",
                description: "Celebrate the longest day of the year with a special practice focusing on solar energy and renewal."
              },
              {
                image: "https://readdy.ai/api/search-image?query=A%20meditation%20workshop%20with%20people%20sitting%20in%20a%20circle%20on%20cushions%2C%20with%20candles%20and%20a%20peaceful%20atmosphere%2C%20in%20a%20beautiful%20yoga%20studio%20with%20natural%20elements%2C%20showing%20community%20practice&width=500&height=300&seq=15&orientation=landscape",
                title: "Mindfulness Meditation Workshop",
                date: "July 15, 2025",
                description: "Learn practical meditation techniques to bring greater awareness and presence to your daily life."
              },
              
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="text-orange-500 font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-3 text-black">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link href='/registration-form'><button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium cursor-pointer !rounded-button whitespace-nowrap">
                    Click to Registrations
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-teal-600">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">News and Updates</h2>
              <p className="text-teal-100">
                Stay informed about new classes, workshops, and special events. Subscribe to our newsletter for yoga tips and inspiration.
              </p>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-l-lg border-none text-sm focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-medium cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Take the next step in your yoga journey</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're just beginning or looking to deepen your practice, we're here to support you every step of the way. Join our community today.
          </p>
         <Link href='/contact'><button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium cursor-pointer !rounded-button whitespace-nowrap">
            Join Now
          </button>
          </Link> 
        </div>
      </section>

      
                
    </div>
  );
};

export default App;
