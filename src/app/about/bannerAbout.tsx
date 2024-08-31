import Link from "next/link";

const AboutFurnitt = () => {
  return (
    <div className="container-main ">
    <div className="flex flex-col items-center justify-center py-[60px]">
      <h1 className="text-3xl font-bold mb-4 text-center">About Furnitt</h1>
      <h2 className="text-xl mb-2 text-center">
        From Our Factory Directly to Your Home – Crafted by Us, for You.
      </h2>
      <p className="italic mb-4">
        Experience the finest craftsmanship with no middlemen. At Furnitt, we
        create high-quality interiors and deliver them straight from our factory
        to your home, ensuring unparalleled value and personalized design.
      </p>
      <div className="w-full flex justify-center md:justify-end mt-4">
        <Link
          className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          href="/about"
        >
          Read More
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AboutFurnitt;
