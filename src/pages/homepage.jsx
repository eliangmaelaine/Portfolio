import ProfileImage from '../assets/mee.jpg';
import PageWrapper from '../components/transition';

function Homepage() {
  return (
    <PageWrapper>
    <div className="min-h-screen flex items-center justify-center bg-white-50 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-2xl shadow-lg w-70 md:w-96 object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hello, I’m <span className="text-purple-600">Ma. Elaine</span>
          </h1>
          <p className="text-black-600 text-lg mb-6">
           I am an instructor in Holy Name University Bohol and a student at Cebu Institute Technology-University studying Master's in Information Technology.
          </p>
         <a
          href="#about"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
          >
          Learn more
        </a>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
}
export default Homepage;