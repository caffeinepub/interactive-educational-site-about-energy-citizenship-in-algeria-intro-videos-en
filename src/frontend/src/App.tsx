import { useState } from 'react';
import IntroSplash from './components/IntroSplash';
import AppLayout from './components/AppLayout';
import TopNav from './components/TopNav';
import MainContent from './sections/MainContent';
import { useSessionIntroGate } from './hooks/useSessionIntroGate';

export default function App() {
  const { showIntro, enterSite, reopenIntro } = useSessionIntroGate();

  if (showIntro) {
    return <IntroSplash onEnter={enterSite} />;
  }

  return (
    <AppLayout>
      <TopNav onReopenIntro={reopenIntro} />
      <MainContent />
    </AppLayout>
  );
}
