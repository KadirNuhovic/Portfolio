import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionTitle = ({ title, subtitle, className, align = 'center' }: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12 space-y-4',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 shimmer-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1.5 w-20 bg-gold rounded-full',
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
};
