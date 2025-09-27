import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/transition";

function PortfolioPage() {
  const navigate = useNavigate();

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

      {/* About Section */}
      <div
        id="about"
        className="min-h-screen flex items-center justify-center bg-purple-100 px-6 py-16"
      >
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-8 text-center">
            My Portfolio Project
          </h2>

          <p className="text-gray-700 text-xl leading-relaxed mb-6 text-justify">
            About the portfolio project, this website is built using React, a popular JavaScript library for building user interfaces. 
            It features a clean and modern design with a focus on usability and accessibility.
            The site is fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.
          </p>

          <p className="text-gray-700 text-xl leading-relaxed text-justify">
            <span className="font-semibold">Project Links:</span>
            <br />
            Live site:{" "}
            <a 
              href="https://maelaineeliang.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-800 font-medium underline text-xl"
            >
              maelaineeliang.vercel.app
            </a>
            <br />
            GitHub repo:{" "}
            <a 
              href="https://github.com/eliangmaelaine/Portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-800 font-medium underline text-xl"
            >
              github.com/eliangmaelaine/Portfolio
            </a>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PortfolioPage;
