import { BookOpen, Building2, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am <span className="font-semibold text-emerald-600">Yugara Weerawardhana</span>, an undergraduate pursuing a Bachelor of Health Sciences (Honours) in Biomedical Technology at the Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a motivated and technology-oriented student, I have a strong academic interest in the application of modern engineering principles to healthcare and medical sciences. My passion lies in bridging the gap between biomedical technology and patient-centered healthcare solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am particularly focused on diagnostic systems, medical instrumentation, and the integration of indigenous medical knowledge with contemporary scientific approaches, bringing a unique perspective to biomedical innovation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-600 p-3 rounded-lg">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Academic Excellence</h3>
                  <p className="text-gray-700 text-sm">
                    Interdisciplinary training in anatomy, physiology, medical imaging, diagnostic instrumentation, and healthcare information systems
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600 p-3 rounded-lg">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Practical Exposure</h3>
                  <p className="text-gray-700 text-sm">
                    Hands-on experience with medical devices and diagnostic technologies in clinical and laboratory environments
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-600 p-3 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Innovation Focus</h3>
                  <p className="text-gray-700 text-sm">
                    Dedicated to enhancing diagnostic accuracy, improving healthcare accessibility, and supporting evidence-based medical practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Background</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            My academic training covers a broad spectrum of interdisciplinary subjects including human anatomy and physiology, medical imaging principles, diagnostic instrumentation, laboratory sciences, healthcare information systems, and biomedical data analysis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My coursework emphasizes both theoretical foundations and practical exposure, enabling me to understand how medical devices and diagnostic technologies operate within real clinical and laboratory environments. I am especially interested in how technology can enhance diagnostic accuracy, improve healthcare accessibility, and support evidence-based medical practice.
          </p>
        </div>
      </div>
    </section>
  );
}
