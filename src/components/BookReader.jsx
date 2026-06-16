import { useState } from 'react';
import { chapters, bookInfo } from '../data/bookData';
import HomeScreen from './HomeScreen';
import TOCScreen from './TOCScreen';
import ReaderScreen from './ReaderScreen';

export default function BookReader() {
  const [view, setView] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  const fontSizeMap = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
  };

  const fontSizes = ['small', 'medium', 'large'];

  const navigateToTOC = () => setView('toc');
  const navigateToHome = () => setView('home');
  const navigateToReader = (chapterId) => {
    setSelectedChapter(chapterId);
    setView('reader');
  };
  const navigateToTOCFromReader = () => setView('toc');

  const isDark = darkMode;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-cream text-gray-900'} transition-colors duration-500 font-sans`}>
      {view !== 'home' && (
        <nav className={`sticky top-0 z-30 ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-100'} backdrop-blur-md border-b shadow-sm transition-colors duration-500`}>
          <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={view === 'reader' ? navigateToTOCFromReader : navigateToHome}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-all`}
                title={view === 'reader' ? 'সূচিপত্রে ফিরুন' : 'হোমে ফিরুন'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <span className={`text-sm font-semibold hidden sm:block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {view === 'reader' && selectedChapter ? chapters.find(c => c.id === selectedChapter)?.title?.slice(0, 30) + '...' : 'সূচিপত্র'}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className={`flex items-center gap-0.5 p-0.5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                {fontSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`px-2 py-1 text-xs rounded-md transition-all ${fontSize === size ? (isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 shadow-sm') : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700')}`}
                  >
                    {size === 'small' ? 'অ' : size === 'medium' ? 'অ' : 'অ'}
                    <span className="block text-[8px]">{size === 'small' ? 'ছোট' : size === 'medium' ? 'মাঝি' : 'বড়'}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all ${isDark ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                title={isDark ? 'লাইট মোড' : 'নাইট মোড'}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      )}

      <main className={`transition-all duration-500 ${fontSizeMap[fontSize]}`}>
        {view === 'home' && <HomeScreen onEnter={navigateToTOC} />}
        {view === 'toc' && <TOCScreen chapters={chapters} onSelectChapter={navigateToReader} onBack={navigateToHome} dark={isDark} />}
        {view === 'reader' && <ReaderScreen chapter={chapters.find(c => c.id === selectedChapter)} onBack={navigateToTOCFromReader} dark={isDark} />}
      </main>

      <footer className={`text-center py-6 text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        <p>© {new Date().getFullYear()} মোহাম্মদীয়া লাইব্রেরী</p>
        <p className="mt-1">সাইয়্যেদ আবুল হাসান আলী নদভী রহ. রচিত গ্রন্থ অবলম্বনে</p>
      </footer>
    </div>
  );
}
