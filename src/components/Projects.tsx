import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "Paper 1",
    description: "short description",
    image: "https://media.licdn.com/dms/image/v2/D4E16AQEVLTt85rPMwA/profile-displaybackgroundimage-shrink_350_1400/B4EZdNkRZjHgAY-/0/1749353044261?e=1756339200&v=beta&t=p-g6YcP6GE1FiEOwJ1fNjL3FuulzQLzkSUbGGMrw2ug",
    github: "#",
    demo: "#"
  },
  {
    title: "Paper 2",
    description: "short description",
    image: "https://www.paysalia.com/sites/default/files/styles/media_full/public/assets/2023-10/drone-paysagiste-bannerjpeg.jpeg.webp?itok=r2Qe_wrQ",
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQG7MTHQ9n0GiQ/profile-displayphoto-shrink_200_200/B4DZb5lzS9IAAc-/0/1747944160704?e=1756339200&v=beta&t=5t2u3SMR3-lOAUfleF5cGhj-HyZkIj_n4tBFHJD7nj0"
            alt="Profile"
            className="w-12 h-12 object-cover rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-900">Rohan Anand</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden w-60">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-3">
                <h3 className="text-md font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-1">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-white-500 to-white-500 hover:from-white-600 hover:to-white-600">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <a 
            href="https://www.linkedin.com/in/rohan-anand-0657381bb/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <button
            type="button"
            onClick={() => {
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              if (isMobile) {
                window.location.href = "mailto:rohan7272@vt.edu";
              } else {
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rohan7272@vt.edu", "_blank");
              }
            }}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Mail className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
