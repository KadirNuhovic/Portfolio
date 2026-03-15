'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900" style={{ backgroundColor: '#b0afac' }}>
      <Navbar />
      <main className="flex-grow pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
}
