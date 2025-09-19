import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'hero' | 'outline' | 'secondary' | 'sol' | 'sol-outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50';
  
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    hero: 'bg-gradient-sol text-white px-6 py-3 font-bold shadow-sol hover:shadow-sol-glow transform hover:-translate-y-1',
    outline: 'border-2 border-sol-purple text-sol-purple hover:bg-sol-purple/10 hover:border-sol-orange hover:text-sol-orange',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    sol: 'bg-gradient-sol text-white shadow-sol hover:shadow-sol-glow transform hover:-translate-y-1 font-bold',
    'sol-outline': 'border-2 border-sol-purple text-sol-purple hover:bg-sol-purple/10 hover:border-sol-orange hover:text-sol-orange',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };
  
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-xs',
    lg: 'px-6 py-3 text-base'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}