import ReportSection from './ReportSection';
import EnergyTypesSection from './EnergyTypesSection';
import SimulatorsSection from './SimulatorsSection';
import VideosSection from './VideosSection';
import { reportSections } from '../content/reportSections';

export default function MainContent() {
  return (
    <main className="container mx-auto px-6 py-12">
      {/* Part 1: Energy Overview */}
      <ReportSection
        id="overview"
        title={reportSections.overview.title}
        content={reportSections.overview.content}
      />

      {/* Energy Types Interactive Section */}
      <EnergyTypesSection />

      {/* Part 2: Citizenship */}
      <ReportSection
        id="citizenship"
        title={reportSections.citizenship.title}
        content={reportSections.citizenship.content}
      />

      {/* Part 3: Energy & Citizenship Relationship */}
      <ReportSection
        id="relationship"
        title={reportSections.relationship.title}
        content={reportSections.relationship.content}
      />

      {/* Part 4: Algeria Context */}
      <ReportSection
        id="algeria"
        title={reportSections.algeria.title}
        content={reportSections.algeria.content}
      />

      {/* Simulators Section */}
      <SimulatorsSection />

      {/* Videos Section */}
      <VideosSection />

      {/* Part 5: Conclusion */}
      <ReportSection
        id="conclusion"
        title={reportSections.conclusion.title}
        content={reportSections.conclusion.content}
        highlight
      />
    </main>
  );
}
