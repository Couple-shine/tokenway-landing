import { Settings, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white scroll-mt-24" id="how-it-works">
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
              DLTBridge provides a solution for all financial institutions that are ready for the digital era and seek enterprise-grade DLT infrastructure that helps them expand investor access under compliant frameworks.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our platform scales to your needs, combining an advanced DLT interoperability solution with proven regulatory expertise to ensure every project meets EU standards.
            </p>

            <div className="flex justify-center">
              <a
                className="group bg-gradient-to-r from-brand-cool-from to-brand-cool-to hover:opacity-90 text-brand-navy px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                href="/contact"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
