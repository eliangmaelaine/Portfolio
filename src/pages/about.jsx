import PageWrapper from "../components/transition";
import AboutImage from "../assets/hehe.jpg";

function AboutPage() {
  return (
    <PageWrapper>
      
      {/* About Section */}
      <div id="about" className="min-h-screen flex items-center justify-center bg-purple-100 px-6 py-16">
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
            About Me
          </h2>
          {/* About Image */}
          <div className="flex justify-center">
            <img
              src={AboutImage}
              alt="About Me"
              className="rounded-full shadow-xl w-60 h-60 object-cover border-4 border-white mb-6"
            />
          </div>
          <p className="text-gray-700 text-xl leading-relaxed mb-4 text-justify">
            I am passionate about teaching and technology. As an instructor at
            Holy Name University and a student at Cebu Institute of
            Technology-University taking up Master's in Information Technology, I balance both academic responsibilities and
            continuous learning. My interests includes exploring new technologies that can help improve education. I also enjoy watching movies, listening to music,
            and spending quality time with family and friends.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutPage;