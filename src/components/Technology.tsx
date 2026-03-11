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
            Tokenway Dlt Bridge Technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise DLT Connectivity</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Universal Integration</div>
                <p className="text-slate-600 text-sm">A modular orchestration layer connecting multiple infrastructures, from regulated DLT venues to national frameworks (e.g., German eWpG).</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Zero Workflow Disruption</div>
                <p className="text-slate-600 text-sm">Connect once. Get access to a growing number of legally compliant digital registries seamlessly without altering your institution&apos;s internal operational workflows.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Production Infrastructure</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">ISOP/DORA compliant architecture</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">10k TPS enterprise capacity</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">BankID institutional authentication</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">24/7 enterprise monitoring systems</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 border border-slate-200">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-cool-from to-brand-cool-to rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Built for Regulation</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">Integrated KYC/KYB verification workflows.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">DORA-ready architecture.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-cool-to rounded-full mt-2"></div>
                <p className="text-slate-700">Automated audit trails and regulatory reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
