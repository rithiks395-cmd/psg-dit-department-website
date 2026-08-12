import React from 'react';

/**
 * PsgLogo3D Component
 * Renders the official PSG emblem with a 3D horizontal mirror-flip animation
 * around its vertical Y-axis (rotateY), featuring front and back faces so text
 * remains un-mirrored and sharp throughout the 3D rotation.
 */
export function PsgLogo3D({ height = '46px', alt = 'PSG Polytechnic College Official Emblem', className = '' }) {
  return (
    <div
      className={`psg-3d-perspective-wrapper ${className}`}
      style={{
        perspective: '1000px',
        WebkitPerspective: '1000px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <div
        className="psg-3d-logo-card"
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          height: height,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Front Face (0° to 90°, 270° to 360°) */}
        <div
          className="psg-3d-face psg-3d-face-front"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="/psg-logo.png"
            alt={alt}
            style={{ height: height, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Back Face (90° to 270°) */}
        <div
          className="psg-3d-face psg-3d-face-back"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="/psg-logo.png"
            alt={alt}
            style={{ height: height, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}
