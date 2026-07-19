import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Papers } from "@/components/Papers";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <main>
      <Hero />
      <Work />
      <Papers />
      <About />
      <Contact />
    </main>
  </div>
);

export default Index;
