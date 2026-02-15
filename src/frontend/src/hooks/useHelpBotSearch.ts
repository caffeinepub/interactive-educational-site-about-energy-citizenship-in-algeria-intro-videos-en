import { useState } from 'react';
import { helpBotQaAr } from '../content/helpBotQa.ar';

export interface SearchResult {
  question: string;
  answer: string;
  sectionId?: string;
}

export function useHelpBotSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const suggestedQuestions = [
    'ما هي أنواع الطاقة المتجددة؟',
    'ما هي مواطنة الطاقة؟',
    'ما هي موارد الطاقة في الجزائر؟',
    'كيف تعمل المحاكيات؟',
    'ما هي فوائد الطاقة الشمسية؟'
  ];

  const search = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Simple keyword matching for Arabic text
    const normalizedQuery = query.toLowerCase().trim();
    const keywords = normalizedQuery.split(/\s+/);

    const results = helpBotQaAr
      .map(qa => {
        // Calculate relevance score based on keyword matches
        let score = 0;
        const normalizedQuestion = qa.question.toLowerCase();
        const normalizedAnswer = qa.answer.toLowerCase();

        keywords.forEach(keyword => {
          if (normalizedQuestion.includes(keyword)) score += 3;
          if (normalizedAnswer.includes(keyword)) score += 1;
        });

        return { ...qa, score };
      })
      .filter(qa => qa.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setSearchResults(results);
  };

  return {
    searchResults,
    suggestedQuestions,
    search
  };
}
