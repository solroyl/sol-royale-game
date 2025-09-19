import { X } from 'lucide-react';

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Toast({ 
  title, 
  description, 
  variant = 'default', 
  open = true, 
  onOpenChange 
}: ToastProps) {
  if (!open) return null;

  const baseClasses = "fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border max-w-sm";
  const variantClasses = variant === 'destructive' 
    ? "bg-red-500/10 border-red-500/20 text-red-400" 
    : "bg-background border-border text-foreground";

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {title && <div className="font-semibold text-sm mb-1">{title}</div>}
          {description && <div className="text-sm text-muted-foreground">{description}</div>}
        </div>
        <button
          onClick={() => onOpenChange?.(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function Toaster() {
  // This would normally render all active toasts
  // For now, it's a placeholder since we have a simple implementation
  return null;
}