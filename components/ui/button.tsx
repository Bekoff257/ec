import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cn('inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50', className)} {...props} />
);
