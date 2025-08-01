import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const features = [
  {
    icon: 'fa-book',
    label: 'Breath Yoga',
    description: 'Was conducted for 7 weeks during Covid-19',
  },
  {
    icon: 'fa-clock',
    label: 'Happy Yoga',
    description: "Four weeks classes were held for children’s during Covid-19",
  },
  {
    icon: 'fa-heart',
    label: 'Donations',
    description:
      'Bank details - yoga kulam, liyoids bank, s/c: 30-91-91\nAcc no 36987368',
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-3xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <i className={`fas ${item.icon} text-3xl text-white mb-4`}></i>
                <div className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full mb-3">
                  {item.label}
                </div>
                <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
