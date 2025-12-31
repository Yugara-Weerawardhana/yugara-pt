import { GraduationCap, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <GraduationCap size={18} />
              <span>Biomedical Technology Student</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Yugara<br />
              <span className="text-emerald-600">Weerawardhana</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Bridging biomedical technology and patient-centered healthcare solutions through innovation and research
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-200 font-medium"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="tel:0764365905" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Phone size={22} />
              </a>
              <a href="mailto:weerawardhana02@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Mail size={22} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl -rotate-3 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                      <GraduationCap size={64} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">BHS (Hons)</h3>
                      <p className="text-sm text-gray-600">Biomedical Technology</p>
                      <p className="text-xs text-gray-500">Gampaha Wickramarachchi University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
