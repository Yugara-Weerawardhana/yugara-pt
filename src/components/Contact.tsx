import { Mail, Phone, Linkedin, Instagram, Facebook, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am open to academic collaborations, research discussions, and professional networking opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <a
              href="tel:0764365905"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Phone</p>
                <p className="text-gray-900 font-semibold">076 4365905</p>
              </div>
            </a>

            <a
              href="mailto:weerawardhana02@gmail.com"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
            >
              <div className="bg-gradient-to-br from-teal-400 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <p className="text-gray-900 font-semibold">weerawardhana02@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-emerald-100">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Location</p>
                <p className="text-gray-900 font-semibold">Gampaha, Sri Lanka</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 text-emerald-600 hover:text-emerald-700"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="#"
                  className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 text-emerald-600 hover:text-emerald-700"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="#"
                  className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 text-emerald-600 hover:text-emerald-700"
                >
                  <Facebook size={22} />
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                I maintain an active interest in professional development and networking through social platforms, where I engage with educational and technology-related content.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Research Collaboration Opportunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
