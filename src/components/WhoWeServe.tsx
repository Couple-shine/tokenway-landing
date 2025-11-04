import { Building, Building2, Briefcase } from 'lucide-react';

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Solutions for Enterprises, Financial Institutions, and Innovative SMEs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              TokenWay partners with companies of all sizes — from major enterprises to SMEs — that seek to tokenize assets, create investment products, or expand investor access under compliant frameworks.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Our platform scales to your needs, combining advanced blockchain technology with proven regulatory expertise to ensure every project meets MiCA standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-yellow-300 transition-all hover:shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Enterprises</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-yellow-300 transition-all hover:shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Financial Institutions</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-yellow-300 transition-all hover:shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Innovative SMEs</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
