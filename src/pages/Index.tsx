import { Projects } from "@/components/Projects";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQG7MTHQ9n0GiQ/profile-displayphoto-shrink_200_200/B4DZb5lzS9IAAc-/0/1747944160704?e=1756339200&v=beta&t=5t2u3SMR3-lOAUfleF5cGhj-HyZkIj_n4tBFHJD7nj0"
          alt="Profile"
          className="w-12 h-12 object-cover rounded-full"
        />
        <h1 className="text-xl font-bold text-gray-900">Rohan Anand</h1>
      </div>
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
};

export default Index;
