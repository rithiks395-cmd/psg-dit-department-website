import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { LabCard } from '../components/LabCard';
import { laboratoriesData as fallbackLabs } from '../data/laboratories';
import { fetchLaboratories } from '../services/api';
import { Cpu } from 'lucide-react';

export function LaboratoriesPage() {
  const [labs, setLabs] = useState(fallbackLabs);

  useEffect(() => {
    fetchLaboratories()
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setLabs(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Laboratories' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Practical Infrastructure"
            title="Department Laboratories & Research Facilities"
            subtitle="Explore our industry-supported centers of excellence in Drones research, IoT, hardware diagnostics, and software engineering."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {labs.map(lab => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
