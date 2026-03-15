'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Projects } from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen text-white fixed-teget">
      <Navbar />
      <main className="flex-grow pt-24">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
