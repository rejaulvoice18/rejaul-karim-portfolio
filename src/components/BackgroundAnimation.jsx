// components/BubbleBackground.jsx
const BackgroundAnimation = () => {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-bubble1 absolute bg-purple-400 opacity-30 blur-3xl rounded-full w-96 h-96 top-10 left-10"></div>
        <div className="animate-bubble2 absolute bg-pink-400 opacity-30 blur-2xl rounded-full w-80 h-80 bottom-20 right-10"></div>
        <div className="animate-bubble3 absolute bg-blue-400 opacity-20 blur-3xl rounded-full w-96 h-96 top-1/3 left-1/2 transform -translate-x-1/2"></div>
      </div>
    );
  };
  
  export default BackgroundAnimation;
  