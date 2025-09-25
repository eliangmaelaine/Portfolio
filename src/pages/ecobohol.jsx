import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/transition";

function EcoBohol() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white 
                     font-medium rounded-full shadow-md 
                     hover:bg-purple-800 hover:shadow-lg transition-all duration-300 mb-20"
        >
          ← Back
        </button>
      </div>

      <div
        id="about"
        className="min-h-screen flex items-center justify-center bg-purple-100 px-6 py-16"
      >
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
           EcoBohol: Mangrove Information System
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            This project....
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            This is the link to the project repository: 

            {/* <a href="maelaineeliang.vercel.app" className="text-purple-700 underline"> maelaineeliang.vercel.app</a> */}
        </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default EcoBohol;
