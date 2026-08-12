import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { GalleryCard } from '../components/GalleryCard';
import { Modal } from '../components/Modal';
import { galleryData } from '../data/gallery';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === selectedCategory);

  const handleCardClick = (img) => {
    const idx = filteredImages.findIndex(i => i.id === img.id);
    setActiveImageIndex(idx);
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const currentImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  return (
    <div>
      <Breadcrumb items={[{ label: 'Gallery' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Department Photos"
            title="Image & Activity Gallery"
            subtitle="Glimpses of departmental group photos, laboratories, workshops, and technical events."
          />

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {galleryData.categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setActiveImageIndex(null); }}
                className={`badge ${selectedCategory === cat ? 'badge-primary' : 'badge-secondary'}`}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem', cursor: 'pointer' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {filteredImages.map(img => (
              <GalleryCard key={img.id} image={img} onClick={handleCardClick} />
            ))}
          </div>

          {/* Lightbox Modal */}
          <Modal
            isOpen={activeImageIndex !== null}
            onClose={() => setActiveImageIndex(null)}
            hasNavigation={filteredImages.length > 1}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {currentImage && (
              <div>
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  style={{ width: '100%', maxHeight: '550px', objectFit: 'contain', display: 'block', borderRadius: '8px' }}
                />
                <div style={{ padding: '1.25rem 0.5rem 0.5rem 0.5rem' }}>
                  <span className="badge badge-accent" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>{currentImage.category}</span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{currentImage.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{currentImage.caption}</p>
                </div>
              </div>
            )}
          </Modal>

        </div>
      </section>
    </div>
  );
}
