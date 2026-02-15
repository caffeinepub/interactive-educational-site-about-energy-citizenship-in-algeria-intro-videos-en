import { useState } from 'react';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import { useHelpBotSearch } from '../hooks/useHelpBotSearch';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export default function HelpBotPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { searchResults, suggestedQuestions, search } = useHelpBotSearch();

  const handleSearch = () => {
    if (query.trim()) {
      search(query);
      setQuery('');
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    search(question);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="فتح مساعد المساعدة"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Help panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h3 className="text-lg font-bold text-right">مساعد المشروع</h3>
            <p className="text-sm opacity-90 text-right">اسأل أي سؤال حول الطاقة والمواطنة</p>
          </div>

          {/* Content */}
          <ScrollArea className="h-96 p-4">
            {searchResults.length === 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-right mb-4">
                  اختر سؤالاً من الأسئلة المقترحة أو اكتب سؤالك الخاص:
                </p>
                <div className="space-y-2">
                  {suggestedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(q)}
                      className="w-full text-right p-3 bg-accent hover:bg-accent/80 rounded-lg text-sm transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map((result, idx) => (
                  <div key={idx} className="bg-accent/40 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-right">{result.question}</h4>
                    <p className="text-sm text-muted-foreground mb-3 text-right">{result.answer}</p>
                    {result.sectionId && (
                      <button
                        onClick={() => scrollToSection(result.sectionId!)}
                        className="text-xs text-primary hover:underline flex items-center gap-1 mr-auto"
                      >
                        <ChevronDown className="w-3 h-3" />
                        انتقل إلى القسم
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => search('')}
                  className="text-sm text-primary hover:underline"
                >
                  ← العودة إلى الأسئلة المقترحة
                </button>
              </div>
            )}
          </ScrollArea>

          {/* Search input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 text-right"
              />
              <Button onClick={handleSearch} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
