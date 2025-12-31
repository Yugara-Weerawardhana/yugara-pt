import { Microscope, Code, Users, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    {
      icon: Microscope,
      title: 'Medical Imaging & Diagnostics',
      description: 'Proficient in medical imaging technologies, diagnostic instruments, and laboratory techniques used in clinical diagnostics',
    },
    {
      icon: Code,
      title: 'Technical & Programming',
      description: 'Basic technical skills in data analysis, programming concepts, healthcare IT systems, and Arduino-based biomedical projects',
    },
  ];

  const softSkills = [
    {
      icon: Lightbulb,
      title: 'Problem-Solving',
      description: 'Strong analytical abilities to systematically approach and solve complex biomedical challenges',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Effective collaboration skills in academic and project-based environments',
    },
    {
      icon: MessageSquare,
      title: 'Technical Communication',
      description: 'Clear communication of complex biomedical concepts to diverse audiences',
    },
    {
      icon: TrendingUp,
      title: 'Adaptability',
      description: 'Quick learner with ability to adapt to new technologies and methodologies',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical & Biomedical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
                >
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-white rounded-xl p-8 shadow-lg border border-emerald-100">
            <p className="text-gray-700 leading-relaxed">
              I have developed foundational knowledge in medical imaging technologies, diagnostic instruments, and laboratory techniques commonly used in clinical diagnostics. Alongside my biomedical training, I possess basic technical skills in data analysis, programming concepts, and healthcare IT systems, which allow me to understand and work with biomedical data and technology-driven healthcare solutions. I also have exposure to Arduino-based biomedical projects, strengthening my understanding of sensors, signal acquisition, and basic medical device concepts.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-300 group text-center"
                >
                  <div className="bg-gradient-to-br from-teal-400 to-emerald-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-white rounded-xl p-8 shadow-lg border border-teal-100">
            <p className="text-gray-700 leading-relaxed">
              In addition to technical competence, I bring strong problem-solving abilities, team leadership skills, and effective technical communication. I am comfortable working in collaborative academic and project-based environments and can clearly communicate complex biomedical and technical concepts to both technical and non-technical audiences. My ability to analyze problems systematically and adapt to new technologies supports my goal of contributing meaningfully to the healthcare technology sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
