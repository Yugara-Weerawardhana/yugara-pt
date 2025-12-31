import { Stethoscope, Cpu, Database, Heart, BookOpen, Award } from 'lucide-react';

export default function Research() {
  const interests = [
    {
      icon: Stethoscope,
      title: 'Medical Device Development',
      description: 'Innovation in designing and developing next-generation medical devices and diagnostic tools',
    },
    {
      icon: Cpu,
      title: 'Diagnostic Technology Innovation',
      description: 'Advancing diagnostic systems through integration of modern technology and engineering principles',
    },
    {
      icon: Database,
      title: 'Healthcare Digital Transformation',
      description: 'Exploring digital healthcare systems and health informatics for improved patient care',
    },
    {
      icon: Heart,
      title: 'Indigenous Medicine Integration',
      description: 'Bridging traditional indigenous medical knowledge with contemporary biomedical technology',
    },
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research & Career Goals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-teal-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Research Interests</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              My academic interests include medical device development, biomedical research, diagnostic technology innovation, and the digital transformation of healthcare systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am particularly fascinated by the potential of integrating indigenous medical knowledge with modern biomedical technology to develop holistic, culturally relevant healthcare solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Career Goals</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              I aim to pursue opportunities in biomedical research, healthcare technology development, or clinical engineering, where I can apply my skills to improve patient outcomes and healthcare efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong commitment to academic excellence and professional growth, I strive to become a competent biomedical technologist capable of contributing to both local and global healthcare advancements.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-6">Additional Academic & Professional Details</h3>
          <div className="space-y-4 text-gray-100">
            <p className="leading-relaxed">
              I have a solid understanding of diagnostic workflows, clinical laboratory processes, and biomedical safety standards. I am continuously seeking opportunities to expand my knowledge through self-learning, practical projects, and exposure to emerging healthcare technologies.
            </p>
            <p className="leading-relaxed">
              With a strong commitment to academic excellence and professional growth, I strive to become a competent biomedical technologist capable of contributing to both local and global healthcare advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
