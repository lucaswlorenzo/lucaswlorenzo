'use client';

import { useEffect, useCallback, useRef } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src?: string;
  alt?: string;
  aspectRatio?: string;
}

export default function Lightbox({ isOpen, onClose, src, alt = '', aspectRatio = '4/3' }: LightboxProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  const handleDocumentClick = useCallback((e: MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const isInsideImage =
      clientX >= rect.left && clientX <= rect.right &&
      clientY >= rect.top && clientY <= rect.bottom;
    if (!isInsideImage) onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen, handleKeyDown, handleDocumentClick]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        padding: 'clamp(80px, 12vw, 140px) 48px 48px',
        animation: 'fadeIn 0.2s ease-out',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: 'relative',
          maxWidth: 'min(88vw, 1100px)',
          maxHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%',
              maxHeight: '78vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              boxShadow: '0 8px 48px rgba(0, 0, 0, 0.15)',
            }}
          />
        ) : (
          <div
            style={{
              width: 'min(88vw, 550px)',
              aspectRatio,
              backgroundColor: '#1a1a1a',
              maxHeight: '78vh',
              boxShadow: '0 8px 48px rgba(0, 0, 0, 0.15)',
            }}
          />
        )}
      </div>
    </div>
  );
}
