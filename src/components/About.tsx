
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed w-full text-center">
            <p>
              something about yourself... <strong>bold words to catch eyes</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-400/30 w-full max-w-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>bullet point 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>bullet point 2</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>bullet point 3</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>bullet point 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
