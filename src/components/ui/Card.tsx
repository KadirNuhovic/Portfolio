import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(
      'border border-gray-400/30 rounded-xl overflow-hidden shadow-lg hover:shadow-gold/20 hover:border-gold/50 transition-all duration-300',
      className
    )}
    style={{ backgroundColor: '#c7c6c3' }}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={cn('p-6', className)}>{children}</div>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={cn('p-6 pt-0', className)}>{children}</div>
);

export const CardFooter = ({ children, className }: CardProps) => (
  <div className={cn('p-6 pt-0 flex items-center', className)}>{children}</div>
);
