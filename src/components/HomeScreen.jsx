import { bookInfo } from '../data/bookData';

export default function HomeScreen({ onEnter }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-fadeIn">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-white/20">
          <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-2xl p-8 sm:p-10 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-1.2 0-2.2.6-2.8 1.5L7 8.5c-.2.3-.3.7-.2 1l1.1 3.8c.1.4.4.7.8.8l3.3 1.2 3.3-1.2c.4-.1.7-.4.8-.8l1.1-3.8c.1-.3 0-.7-.2-1l-2.2-4C14.2 3.6 13.2 3 12 3z"/>
                <path d="M6 15l-2 4h16l-2-4" fill="none" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 15v5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <circle cx="12" cy="6.5" r="1.5" fill="currentColor" opacity="0.3"/>
                <path d="M9 19.5h6" stroke="currentColor" stroke-width="1.2" fill="none"/>
                <path d="M4 15.5c1 0 2-.5 2-1.5 0 1 1 1.5 2 1.5" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
                <path d="M16 15.5c1 0 2-.5 2-1.5 0 1 1 1.5 2 1.5" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
                <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
              </svg>
            </div>

            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium mb-4 border border-emerald-500/30">
              মোহাম্মদীয়া লাইব্রেরী
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-3">
              {bookInfo.title}
            </h1>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-3" />

            <p className="text-emerald-200/80 text-xs font-medium mb-1">
              রচনা: {bookInfo.author}
            </p>
            <p className="text-emerald-200/60 text-xs mb-1">
              ভূমিকা: {bookInfo.introductionBy}
            </p>
            <p className="text-emerald-200/60 text-xs mb-8">
              প্রকাশনায়: {bookInfo.publisher}
            </p>

            <button
              onClick={onEnter}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold rounded-xl shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
            >
              <span>পড়া শুরু করুন</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="text-emerald-300/40 text-xs mt-6">
              দ্বীনি দাওয়াত ও তাবলীগের পথনির্দেশিকা
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/30" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
