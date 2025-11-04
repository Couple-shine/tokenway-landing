import circleLogo from '../assets/circle logo.svg';
import czechFintechLogo from '../assets/czech fintech association logo.svg';
import czechinvestLogo from '../assets/czechinvest logo.svg';
import diaLogo from '../assets/DIA logo.svg';
import polygonLogo from '../assets/polygon.svg';

export default function LogoCarousel() {
  const partners = [
    { name: 'Circle', logo: circleLogo },
    { name: 'Czech Fintech Association', logo: czechFintechLogo },
    { name: 'CzechInvest', logo: czechinvestLogo },
    { name: 'DIA', logo: diaLogo },
    { name: 'Polygon', logo: polygonLogo },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted By Leading Organizations & Technologies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center group"
              >
                <div className="h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center px-6 group-hover:border-yellow-300 group-hover:shadow-md transition-all">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
