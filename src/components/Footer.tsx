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
            DLTBridge makes digital future effortless - providing one fully compliant and seamless solution.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed mb-12">
            Empower your business with compliant tokenization technology that brings transparency, trust, and new opportunities for investors.
          </p>

          <Link
            to="/contact"
            className="group bg-gradient-to-r from-brand-cool-from to-brand-cool-to hover:opacity-90 text-brand-navy px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 mx-auto"
          >
            Get in Touch Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-400 space-y-2">
            <div className="text-slate-300">
              DLT Bridge by TokenWay | © 2026 TokenWay s.r.o.
            </div>
            <div>
              <a
                href="https://dltb.eu"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                dltb.eu
              </a>{' '}
              | TokenWay&apos;s institutional DLT product
            </div>
            <div>Prague, Czech Republic</div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Institutional Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
