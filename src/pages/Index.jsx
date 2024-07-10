import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2, Star } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
            <p className="text-xl mb-8">This is your starting point. Modify and build upon this structure.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center">Powered by GPT Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;