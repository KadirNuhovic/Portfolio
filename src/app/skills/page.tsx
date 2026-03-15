'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Skills } from '@/components/sections/Skills';

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900" style={{ backgroundColor: '#b0afac' }}>
      <Navbar />
      <main className="flex-grow pt-24">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
