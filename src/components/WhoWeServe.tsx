import { Landmark, Building2, Briefcase } from 'lucide-react';

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Solution for regulated capital market institutions and banks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              DLTBridge provides a solution for all financial institutions that are ready for the digital era and seek enterprise-grade DLT infrastructure that helps them expand investor access under compliant frameworks.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Our platform scales to your needs, combining an advanced DLT interoperability solution with proven regulatory expertise to ensure every project meets ESMA standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border border-slate-200 text-left hover:border-brand-cool-to/40 transition-all hover:shadow-md h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Banks &amp; Brokers</h3>
              <p className="text-slate-600 leading-relaxed">
                Institutional DLT settlement infrastructure
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 text-left hover:border-brand-cool-to/40 transition-all hover:shadow-md h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Capital Market Institutions</h3>
              <p className="text-slate-600 leading-relaxed">
                ESOP, bond, institutional placement systems
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 text-left hover:border-brand-cool-to/40 transition-all hover:shadow-md h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Investment Firms</h3>
              <p className="text-slate-600 leading-relaxed">
                DLT-enabled capital distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
