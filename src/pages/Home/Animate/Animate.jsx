import BackgroundAnimation from "../../../components/BackgroundAnimation";
// import BubbleBackground from "./BubbleBackground";

const Animate = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-100">
     <BackgroundAnimation />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Rejaul 👋</h1>
        <p className="mt-4 text-lg text-gray-700">Frontend Developer | React Enthusiast</p>
        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">View My Work</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Animate;
