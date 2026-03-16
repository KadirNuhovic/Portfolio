import { Metadata } from 'next';
import { VideoLearning } from '@/components/sections/VideoLearning';

export const metadata: Metadata = {
  title: 'Video Learning Hub | Programming Tutorials',
  description: 'Educational programming videos and tutorials to enhance your development skills',
  openGraph: {
    title: 'Video Learning Hub | Programming Tutorials',
    description: 'Educational programming videos and tutorials to enhance your development skills',
    type: 'website',
  },
};

export default function VideosPage() {
  return <VideoLearning />;
}
