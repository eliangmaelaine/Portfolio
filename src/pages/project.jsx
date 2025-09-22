import PageWrapper from '../components/transition';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built to showcase my skills and experience.',
    link: '#',
  },
  {
    title: 'EcoBohol: Mangrove Information System',
    description: 'An information system designed to support mangrove conservation efforts in Bohol.',
    link: '#',
  },
  {
    title: 'Motorcycle Rental System',
    description: 'A system for managing motorcycle rentals with user-friendly booking features.',
    link: '#',
  },
];

function ProjectPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-gray-900">
        
        {/* Hero Section */}
        <header className="py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            My <span className="text-purple-700">Projects</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Explore some of the projects I’ve been working on, combining academic
            knowledge with practical applications.
          </p>
        </header>

        {/* Projects Grid */}
        <main className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-100
                           hover:shadow-2xl hover:-translate-y-2 hover:border-purple-200
                           transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  <span className="text-purple-700"></span> {project.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Button aligned right */}
                <div className="mt-auto flex justify-end">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 w-40 justify-center px-5 py-3 
                              bg-gradient-to-r from-purple-700 to-purple-900 
                              text-white font-medium rounded-xl shadow-md 
                              hover:from-purple-800 hover:to-purple-950 
                              hover:shadow-lg hover:scale-105 
                              transition-all duration-300 ease-in-out"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}

export default ProjectPage;
