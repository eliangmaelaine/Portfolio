import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/transition";
import projects from "../data/projectdata";

function ProjectDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <p className="text-center mt-20 text-red-600">Project not found.</p>;
    }

    return (
        <PageWrapper>
            {/* Back Button */}
            <div className="absolute pt-8 ml-8">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-5 py-3 bg-purple-700 text-white 
                     text-l font-semibold rounded-full shadow-md 
                     hover:bg-purple-800 hover:shadow-lg transition-all duration-300"
                >
                    ← Back
                </button>
            </div>

            {/* Project Section */}
            <div className="min-h-screen flex items-center justify-center bg-purple-100 px-6 py-16">
                <div className="max-w-4xl text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-8 text-center">
                        {project.title}
                    </h2>

                    <p className="text-gray-700 text-xl leading-relaxed mb-6 text-justify">
                        {project.description}
                    </p>

                    <p className="text-gray-700 text-xl leading-relaxed text-justify">
                        <span className="font-semibold">Project Links:</span>
                        <br />
                        Live site:{" "}
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 font-medium underline text-xl"
                        >
                            {project.liveLink}
                        </a>
                        <br />
                        GitHub repo:{" "}
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 font-medium underline text-xl"
                        >
                            {project.githubLink}
                        </a>
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default ProjectDetailsPage;
