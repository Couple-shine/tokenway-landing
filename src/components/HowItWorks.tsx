import { Settings, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-6">
              <Settings className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Integration without Disruption
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Over 55% of banks are paralyzed by legacy core systems. We built DLTBridge with an integration-first architecture that natively communicates with your existing frameworks.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our solution operates seamlessly and entirely within your bank&apos;s existing regulated environment. DLTBridge acts as the single interoperability infrastructure bridging EU DLT providers and capital institutions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We do not run trading systems or tokenization platforms. The ability to connect multiple nodes to multiple clients and act as a true digital infrastructure provider makes us unique.
            </p>

            <div className="flex justify-center">
              <button className="group bg-gradient-to-r from-brand-cool-from to-brand-cool-to hover:opacity-90 text-brand-navy px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
