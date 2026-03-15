import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedText } from '@/components/ui/AnimatedText';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
