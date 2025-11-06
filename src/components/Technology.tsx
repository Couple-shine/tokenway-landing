import { Cpu, DollarSign, ShieldCheck } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Technology & Compliance
          </h2>
          <p className="text-xl text-slate-600">
            Enterprise-Grade Architecture. Real Compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Dual-Chain Design</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Polygon</div>
                <p className="text-slate-600 text-sm">Fast and cost-efficient token issuance for utility and hybrid tokens.</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Corda (DLT Prague)</div>
                <p className="text-slate-600 text-sm">Institutional DLT infrastructure for compliant security tokens connected to the Prague Stock Exchange.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Payments & Custody</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Circle Alliance integration for USDC and EURC custody.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">SEPA banking integration for regional payments.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Audit-ready logs ensuring complete transparency and compliance.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Built for Regulation</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Integrated KYC/KYB verification workflows.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Full MiCA compliance.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Automated audit trails and regulatory reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
