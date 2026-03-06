import { Link, useLocation } from 'react-router-dom';
import tokenWayLogo from '../assets/tokenway_logo.svg';
// import tokenWayLogo from '../assets/logo.svg';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }}
            >
              <img
                src={tokenWayLogo}
                alt="TokenWay"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-brand-cool-from to-brand-cool-to hover:opacity-90 text-brand-navy px-6 py-2 rounded-lg font-semibold transition-all duration-200">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
