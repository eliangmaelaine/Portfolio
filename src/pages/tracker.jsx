import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/transition";

function Tracker() {
const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Back Button */}
      <div className="absolute top-20 left-6 z-50">
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
            Budget Tracker
          </h2>

          <p className="text-gray-700 text-xl leading-relaxed mb-6 text-justify">
            This project...
          </p>

          <p className="text-gray-700 text-xl leading-relaxed text-justify">
            <span className="font-semibold">Project Links:</span>
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
export default Tracker;
