import { Link } from 'react-router-dom';
import tokenWayLogoWhite from '../assets/TokenWay logo White.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={tokenWayLogoWhite}
                alt="TokenWay"
                className="h-6"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#how-checkout-works" className="text-slate-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-6 py-2 rounded-lg font-semibold transition-all duration-200">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
