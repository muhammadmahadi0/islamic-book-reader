export default function ReaderScreen({ chapter, onBack, dark }) {
  if (!chapter) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className={`inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-all hover:opacity-70 ${dark ? 'text-emerald-400' : 'text-emerald-700'}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        সূচিপত্রে ফিরুন
      </button>

      <div className={`rounded-2xl p-1 ${dark ? 'bg-gray-800/50' : 'bg-emerald-50/30'}`}>
        <article className={`rounded-2xl p-6 sm:p-8 md:p-10 leading-relaxed ${dark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} shadow-lg border ${dark ? 'border-gray-800' : 'border-gray-100'}`}>
          <header className="mb-10 pb-8 border-b border-dashed text-center">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              dark ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              অধ্যায় {chapter.id}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-relaxed">
              {chapter.title}
            </h1>
            {chapter.titleAr && (
              <p className="mt-2 text-sm opacity-50 font-arabic" dir="rtl">
                {chapter.titleAr}
              </p>
            )}
            <p className={`mt-4 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              {chapter.summary}
            </p>
            <div className={`flex items-center justify-center gap-2 mt-4 text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
              <span>{chapter.topics.length}টি বিষয়</span>
              <span>•</span>
              <span>পড়ার সময়: আনু. {chapter.topics.length * 3} মিনিট</span>
            </div>
          </header>

          <div className="space-y-10">
            {chapter.topics.map((topic, idx) => (
              <section key={idx} className="scroll-mt-20">
                <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-4 leading-relaxed ${
                  dark ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  {topic.heading}
                </h3>

                {topic.isQuote && topic.content ? (
                  <div className={`relative my-6 p-5 sm:p-6 rounded-xl border-r-4 ${
                    dark
                      ? 'bg-emerald-950/30 border-emerald-700 text-gray-300'
                      : 'bg-emerald-50 border-emerald-600 text-gray-700'
                  }`}>
                    <svg className={`absolute -top-3 -left-3 w-6 h-6 ${dark ? 'text-emerald-700' : 'text-emerald-400'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                    </svg>
                    <p className="text-base sm:text-lg leading-relaxed font-medium italic">
                      {topic.content}
                    </p>
                  </div>
                ) : (
                  <p className={`text-base sm:text-lg leading-relaxed mb-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {topic.content}
                  </p>
                )}

                {topic.points && (
                  <ul className="space-y-2 my-4">
                    {topic.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 ${
                          dark ? 'bg-emerald-500' : 'bg-emerald-500'
                        }`} />
                        <span className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <footer className="mt-12 pt-8 border-t border-dashed text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              dark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>
              — অধ্যায় {chapter.id} সমাপ্ত —
            </span>
            <button
              onClick={onBack}
              className={`block mx-auto mt-6 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                dark
                  ? 'bg-emerald-700/30 text-emerald-300 hover:bg-emerald-700/50'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              সূচিপত্রে ফিরুন
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}
