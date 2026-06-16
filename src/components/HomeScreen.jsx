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
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-xl overflow-hidden p-1">
              <img
                src="https://cdn-icons-png.flaticon.com/256/10031/10031075.png"
                alt="মসজিদ"
                className="w-full h-full object-contain"
              />
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
