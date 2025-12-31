import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Yugara Weerawardhana</h3>
            <p className="text-gray-400 leading-relaxed">
              Biomedical Technology Student dedicated to bridging healthcare innovation with patient-centered solutions
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-emerald-400 transition-colors duration-200">
                  Research
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 076 4365905</li>
              <li>Email: weerawardhana02@gmail.com</li>
              <li>Location: Gampaha, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            2025 Yugara Weerawardhana. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-emerald-500 fill-current" /> for Healthcare Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
