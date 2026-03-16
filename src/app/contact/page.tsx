'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';
import { Map } from '@/components/sections/Map';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen text-white fixed-teget">
      <Navbar />
      <main className="flex-grow pt-24">
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
