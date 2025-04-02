'use client';

import { useEffect, useRef } from 'react';

interface DialogProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Dialog = ({ onClose, children, className = '' }: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        ref={dialogRef}
        className={`bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};