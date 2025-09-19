import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export default function Checkbox({ label, className = '', onCheckedChange, ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input 
        type="checkbox" 
        className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary/50 focus:ring-2"
        onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
        {...props}
      />
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  );
}