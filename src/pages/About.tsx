import { Shield, Award, Users, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Compliance First',
      description: 'MiCA-compliant from day one. We prioritize regulatory alignment to protect issuers and investors.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Cutting-edge blockchain technology meets traditional finance to create seamless tokenization solutions.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'White-label solutions that match your brand. We succeed when you succeed.',
    },
    {
      icon: Target,
      title: 'Regional Expertise',
      description: 'Deep understanding of CEE markets, regulations, and business culture.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About TokenWay
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Building the future of compliant tokenization in Central and Eastern Europe
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

            <div className="bg-gradient-to-br from-yellow-50 to-slate-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why CEE?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Central and Eastern Europe represents a massive opportunity for digital securities.
                With growing economies, tech-savvy populations, and progressive regulatory frameworks,
                the region is perfectly positioned for tokenization.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a regional leader, we understand local markets, regulations, and business culture.
                We work with payment providers like BankID and eID that CEE investors already know
                and trust.
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
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
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
