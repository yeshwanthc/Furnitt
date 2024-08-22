import Banner from "@/components/Banner";
import React from "react";
import "../../../styles/About.scss"

const AboutPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="About Us"
      ></Banner>

      <section className="container mx-auto py-12">
        <h3 className="text-4xl font-bold mb-6">About Furnitt</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Furnitt is a professional interior design firm dedicated to creating
          artistic and personalized living spaces. Our designs are a perfect
          blend of creativity, functionality, and luxury, ensuring that every
          space we craft is not only beautiful but also practical. With a team
          of experienced designers, we transform ordinary spaces into
          extraordinary experiences.
        </p>

        <div className="flex gap-[40px]">
          {" "}
          <button>
            <span> View Portfolio</span>
          </button>
          <button>
            <span> Our Services</span>
          </button>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-2xl font-semibold">Residential Design</h4>
              <p className="text-gray-700">
                Transforming homes into personalized sanctuaries.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold">Commercial Design</h4>
              <p className="text-gray-700">
                Creating functional and aesthetically pleasing workspaces.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold">Renovation Services</h4>
              <p className="text-gray-700">
                Breathing new life into existing spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h3 className="text-4xl font-bold mb-6 text-center">
          Why Choose Furnitt
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          At Furnitt, we understand that your home is more than just a place to
          live—it's a reflection of who you are. That's why we offer tailored
          interior design solutions that meet your unique needs and preferences.
          Our commitment to quality, attention to detail, and customer
          satisfaction sets us apart from the rest.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                "Furnitt transformed my apartment into a stylish and functional
                space. Their attention to detail and creativity were
                outstanding."
              </p>
              <h4 className="text-xl font-semibold">Ananya Rao, Bangalore</h4>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                "The team at Furnitt did an incredible job with our office
                redesign. The new layout and modern look have really boosted our
                productivity."
              </p>
              <h4 className="text-xl font-semibold">Ravi Kumar, Chennai</h4>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                "Furnitt exceeded my expectations with their design for my home.
                The quality of their work made the entire process smooth and
                enjoyable."
              </p>
              <h4 className="text-xl font-semibold">Priya Sen, Kolkata</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg mb-6">
            Get in touch with us today to start your interior design journey.
          </p>
          <a
            href="/contact"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
