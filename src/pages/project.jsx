import PageWrapper from '../components/transition';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website',
    link: '#',
  },
  {
    title: 'EcoBohol:Mangrove Information System',
    description: 'Description for Project2 goes here.',
    link: '#',
  },
  {
    title: 'Motorcycle Rental System',
    description: 'Description for Project3 goes here.',
    link: '#',
  },
];

function ProjectPage() {
  return (
    <PageWrapper>
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="text-white py-25 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore some of the projects I’ve been working on.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="py-2 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-700">{project.title}</h2>
              <p className="text-gray-900 mb-8">{project.description}</p>
              <a
                href={project.link}
                className="mt-auto ml-auto bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
    </PageWrapper>
  );
}

export default ProjectPage;