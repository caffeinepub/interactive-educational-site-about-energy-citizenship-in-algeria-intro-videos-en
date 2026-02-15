import { useState, useEffect } from 'react';

const INTRO_SESSION_KEY = 'energy-citizenship-intro-seen';

export function useSessionIntroGate() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_SESSION_KEY);
    if (seen === 'true') {
      setShowIntro(false);
    }
  }, []);

  const enterSite = () => {
    sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
    setShowIntro(false);
  };

  const reopenIntro = () => {
    setShowIntro(true);
  };

  return { showIntro, enterSite, reopenIntro };
}
