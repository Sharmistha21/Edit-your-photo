import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button"
import Link from "next/link";
 

export default function Home() {
  return (
    <div>
      <HeroSection/>
     <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">Ready to <span className="bg-gradient-to-r from to-blue-500 to-purple-600 bg-clip-text ">Create Something Amazing?</span></h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of creators who are already using AI to transform
          their images and bring their vision to life.
        </p>
        <Link href="/dashboard">
        <Button variant="primary" size="xl">
           Start Creating Now</Button>
        </Link>
      </div>
     </section>
    </div>
  );
}
