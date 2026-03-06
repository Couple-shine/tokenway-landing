import { Shield, Award, Users, Target } from 'lucide-react';
import guillermoPhoto from '../assets/guillermo.jpg';
import michaelaPhoto from '../assets/michaela.jpg';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Evolution',
      description: 'Progress in capital markets through a smooth and steady transition.',
    },
    {
      icon: Award,
      title: 'Clarity',
      description: 'We choose clarity and transparency in a noisy world of capital finance.',
    },
    {
      icon: Users,
      title: 'Credibility',
      description: 'Trust is earned & finance runs on confidence.',
    },
    {
      icon: Target,
      title: 'Flow',
      description: 'Capital should move as smoothly as ideas. We keep the flow running.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About DLTBridge
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Connecting Traditional Finance to Digital Capital Markets
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                TokenWay is the leading tokenization platform in Central and Eastern Europe,
                providing MiCA-compliant infrastructure for issuers and investors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We bridge traditional finance and blockchain technology, offering white-label
                solutions that enable businesses to launch and manage digital securities with
                full regulatory compliance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform handles everything from investor verification and payment processing
                to token allocation and regulatory reporting, allowing you to focus on growing
                your business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-cool-to/10 to-slate-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why CEE? - The Strategic Hub for European Interoperability
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Situated at the heart of Europe, the Central and Eastern European region is a regulation-forward, technologically aggressive launchpad for digital capital markets.
                Operating from Prague, TokenWay is positioned at the exact center of this financial evolution.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our vision relies on an open, collaborative ecosystem.
                We prioritize borderless cooperation, forming strategic partnerships with trading venues, tier-one institutions, and regulatory sandboxes to foster a unified digital market.
                We are validating our infrastructure in this high-growth region to perfect the model, but our mandate is continental.
                From the center of Europe, we are building the definitive interoperability layer to connect fragmented ledgers and scale seamless, borderless liquidity across the entire European Union.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Credibility is a must to open the market. Our leadership team combines deep technical innovation with decades of institutional finance and legal expertise.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-56 border-b border-slate-200 relative overflow-hidden">
                  <img
                    src={guillermoPhoto}
                    alt="Guillermo Alda"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cool-from/15 to-brand-cool-to/15" />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-slate-500">
                    CEO &amp; Co-Founder
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    Guillermo Alda
                  </h3>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Deep tech entrepreneur, engineer, and digital assets investor with a prior AI studio exit.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-56 border-b border-slate-200 relative overflow-hidden">
                  <img
                    src={michaelaPhoto}
                    alt="Dr. Michaela Day"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-brand-navy/10" />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-slate-500">
                    CLO &amp; Co-Founder
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    Dr. Michaela Day
                  </h3>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Doctor in Law bringing over 25 years of expertise in international transactions and real estate.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-56 bg-gradient-to-br from-brand-cool-to/20 to-brand-cool-from/20 border-b border-slate-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <span className="text-3xl font-bold text-brand-navy">EX</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-slate-500">
                    Other Experts
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    Cross-Functional Teams
                  </h3>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Top-tier teams: Tech R&amp;D, Go-To-Market, Real Estate, and Strategic Execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Company Information
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <strong className="text-white">TokenWay s.r.o.</strong>
                </p>
                <p>
                  Sokolovská 428/130<br />
                  186 00 Prague<br />
                  Czech Republic
                </p>
                <p className="pt-4">
                  <a
                    href="mailto:inquiries@tokenway.io"
                    className="text-brand-cool-to hover:text-white transition-colors"
                  >
                    inquiries@tokenway.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
