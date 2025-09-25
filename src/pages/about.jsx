import PageWrapper from "../components/transition";
import ProfileImage from "../assets/mee.jpg";

function AboutPage() {
  return (
    <PageWrapper>
      
      {/* About Section */}
      <div id="about" className="min-h-screen flex items-center justify-center bg-purple-100 px-6 py-16">
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
            About Me
          </h2>
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className="rounded-full shadow-xl w-60 h-60 object-cover border-4 border-white mb-6"
            />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            I am passionate about teaching and technology. As an instructor at
            Holy Name University and a student at Cebu Institute of
            Technology-University taking up Master's in Information Technology, I balance both academic responsibilities and
            continuous learning. My interests include web development,
            and exploring new technologies that can help improve education.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Outside of academics, I enjoy working on projects, mentoring students,
            and contributing to innovative IT solutions. I believe in lifelong
            learning and aim to inspire my students to pursue excellence in their
            chosen fields.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutPage;