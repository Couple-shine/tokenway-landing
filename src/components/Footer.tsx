import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import tokenWayLogoWhite from '../assets/TokenWay logo White.svg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <img
              src={tokenWayLogoWhite}
              alt="TokenWay"
              className="h-10 mx-auto"
            />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Join the Future
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            TokenWay is redefining tokenization across the CEE region — merging regulatory rigor, blockchain innovation, and local expertise.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed mb-12">
            Empower your business with compliant tokenization technology that brings transparency, trust, and new opportunities for investors.
          </p>

          <Link
            to="/contact"
            className="group bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 mx-auto"
          >
            Get in Touch Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-400">
            <div>© 2025 TokenWay. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
