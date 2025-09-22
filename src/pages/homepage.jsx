import ProfileImage from '../assets/mee.jpg';
import PageWrapper from '../components/transition';
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className="rounded-3xl shadow-xl w-72 md:w-96 object-cover border-4 border-white"
            />
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I’m{" "}
              <span className="text-purple-700">Ma. Elaine</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              I’m an Instructor at <span className="font-semibold">Holy Name University, Bohol</span>, 
              and currently pursuing a Master’s degree in Information Technology at 
              <span className="font-semibold"> Cebu Institute of Technology – University</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/about"
                className="px-6 py-3 bg-purple-700 text-white font-medium rounded-xl shadow-md hover:bg-purple-800 hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white border border-purple-700 text-purple-700 font-medium rounded-xl shadow-sm hover:bg-purple-50 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Homepage;
