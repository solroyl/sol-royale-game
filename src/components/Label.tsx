import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className = '', ...props }: LabelProps) {
  return (
    <label className={`text-sm font-medium text-foreground ${className}`} {...props}>
      {children}
    </label>
  );
}