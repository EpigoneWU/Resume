export default function Hero() {
  return (
    <div className="text-center py-12">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
      />
      <h2 className="mt-4 text-2xl font-bold">Epigone Wu</h2>
      <p className="text-gray-500">Software Engineer | Healthcare IT | React & TypeScript</p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
}
