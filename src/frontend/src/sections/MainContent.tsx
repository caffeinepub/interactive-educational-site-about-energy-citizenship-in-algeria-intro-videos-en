import ReportSection from './ReportSection';
import EnergyTypesSection from './EnergyTypesSection';
import SimulatorsSection from './SimulatorsSection';
import VideosSection from './VideosSection';
import { reportSections } from '../content/reportSections';

export default function MainContent() {
  return (
    <main className="container mx-auto px-6 py-12">
      {/* Part 1: Energy Overview - Sky theme */}
      <ReportSection
        id="overview"
        title={reportSections.overview.title}
        content={reportSections.overview.content}
        themeVariant="section-theme-sky"
      />

      {/* Energy Types Interactive Section - Emerald theme */}
      <EnergyTypesSection themeVariant="section-theme-emerald" />

      {/* Part 2: Citizenship - Amber theme */}
      <ReportSection
        id="citizenship"
        title={reportSections.citizenship.title}
        content={reportSections.citizenship.content}
        themeVariant="section-theme-amber"
      />

      {/* Part 3: Energy & Citizenship Relationship - Rose theme */}
      <ReportSection
        id="relationship"
        title={reportSections.relationship.title}
        content={reportSections.relationship.content}
        themeVariant="section-theme-rose"
      />

      {/* Part 4: Algeria Context - Violet theme */}
      <ReportSection
        id="algeria"
        title={reportSections.algeria.title}
        content={reportSections.algeria.content}
        themeVariant="section-theme-violet"
      />

      {/* Simulators Section - Teal theme */}
      <SimulatorsSection themeVariant="section-theme-teal" />

      {/* Videos Section - Orange theme */}
      <VideosSection themeVariant="section-theme-orange" />

      {/* Part 5: Conclusion - Indigo theme */}
      <ReportSection
        id="conclusion"
        title={reportSections.conclusion.title}
        content={reportSections.conclusion.content}
        highlight
        themeVariant="section-theme-indigo"
      />
    </main>
  );
}
