'use client';

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    course: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-white pt-24 py-12 min-h-screen text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-2">
          Registration Form
        </h2>
        <p className="text-center mb-10 text-gray-600">
          Fill in your details to begin your transformative yoga journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold">First Name*</label>
              <input
                type="text"
                name="firstName"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Last Name*</label>
              <input
                type="text"
                name="lastName"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email Address*</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Age</label>
              <input
                type="number"
                name="age"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Course Interested In</label>
            <input
              type="text"
              name="course"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Register Now
            </button>
          </div>

          {submitted && (
            <p className="text-center text-green-600 font-semibold pt-4">
              User registered successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;





// 'use client';

// import React from 'react';

// const GoogleForm = () => {
//   return (
//     <section className="bg-[#FDFDFD] min-h-screen pt-32 pb-20 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-8">
//           Register Using Google Form
//         </h2>

//         <div className="w-full">
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSd40I3EEApkCo550KXuoesqV3PUPhecdQs6kFKNLhu0U10MJg/viewform?embedded=true"
//             width="100%"
//             height="800"
//             frameBorder="0"
//             marginHeight={0}
//             marginWidth={0}
//             className="w-full rounded-lg border border-gray-300"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GoogleForm;
