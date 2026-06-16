import { useState } from 'react';

export default function TOCScreen({ chapters, onSelectChapter, onBack, dark }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = chapters.filter(ch =>
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (ch.titleAr && ch.titleAr.includes(searchQuery))
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <button onClick={onBack} className={`inline-flex items-center gap-1.5 text-sm font-medium mb-4 transition-all hover:opacity-70 ${dark ? 'text-emerald-400' : 'text-emerald-700'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          হোমে ফিরুন
        </button>
        <h1 className={`font-serif text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
          সূচিপত্র
        </h1>
        <p className={`mt-1 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          মোট {chapters.length}টি অধ্যায়
        </p>
      </div>

      <div className="relative mb-8">
        <div className={`flex items-center rounded-xl border-2 transition-all ${
          dark
            ? 'border-gray-700 bg-gray-800/50 focus-within:border-emerald-500'
            : 'border-gray-200 bg-white focus-within:border-emerald-600'
        }`}>
          <svg className={`w-5 h-5 ml-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="অধ্যায় অনুসন্ধান করুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-3 py-3 bg-transparent text-sm outline-none placeholder:text-gray-400 ${dark ? 'text-gray-100' : 'text-gray-800'}`}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className={`p-3 ${dark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={`text-center py-12 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">কোনো অধ্যায় পাওয়া যায়নি</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((chapter, idx) => (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className={`group w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                dark
                  ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 hover:border-emerald-700/50'
                  : 'border-gray-100 bg-white hover:bg-emerald-50/50 hover:border-emerald-200'
              } shadow-sm hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  dark ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {String(chapter.id).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className={`font-serif font-bold text-base leading-relaxed ${dark ? 'text-gray-100 group-hover:text-emerald-300' : 'text-gray-800 group-hover:text-emerald-700'} transition-colors`}>
                    {chapter.title}
                  </h3>
                  {chapter.titleAr && (
                    <p className={`text-xs mt-0.5 font-arabic ${dark ? 'text-gray-600' : 'text-gray-400'}`} dir="rtl">
                      {chapter.titleAr}
                    </p>
                  )}
                  <p className={`text-sm mt-2 line-clamp-2 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {chapter.summary}
                  </p>
                  <div className={`flex items-center gap-2 mt-3 text-xs font-medium ${dark ? 'text-emerald-500' : 'text-emerald-600'}`}>
                    <span>{chapter.topics.length}টি বিষয়</span>
                    <span>•</span>
                    <span className={`group-hover:inline ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      পড়ুন →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all hover:opacity-70 ${dark ? 'text-emerald-400' : 'text-emerald-700'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          হোমে ফিরুন
        </button>
      </div>
    </div>
  );
}
