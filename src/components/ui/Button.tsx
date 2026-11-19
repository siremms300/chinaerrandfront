import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'md' | 'lg';
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        variant === 'primary' &&
          'bg-brand-red text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20',
        variant === 'secondary' &&
          'bg-white text-brand-black border border-brand-black/15 hover:border-brand-black hover:bg-brand-black hover:text-white',
        variant === 'dark' &&
          'bg-brand-black text-white hover:bg-neutral-800',
        className
      )}
      {...props}
    />
  );
}