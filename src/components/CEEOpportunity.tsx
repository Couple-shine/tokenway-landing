import { TrendingUp } from 'lucide-react';

export default function CEEOpportunity() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-cool-to/20 border border-brand-cool-to/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-brand-cool-to" />
            <span className="text-sm text-brand-cool-to font-medium">Market Opportunity</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Regulation, Infrastructure Innovation, and Issuer Demand Are Converging
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              European capital markets represent hundreds of billions in annual issuance volume:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-brand-cool-to/10 rounded-xl p-6 border border-brand-cool-to/20">
                <div className="text-4xl font-bold text-brand-cool-to mb-2">€800B</div>
                <div className="text-slate-300">Corporate bond issuance annually in Europe</div>
              </div>
              <div className="bg-brand-cool-to/10 rounded-xl p-6 border border-brand-cool-to/20">
                <div className="text-4xl font-bold text-brand-cool-to mb-2">€100B</div>
                <div className="text-slate-300">Non-IPO equity issuance annually</div>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              At the same time, digital securities infrastructures — from DLT venues under the EU DLT Pilot Regime to national electronic securities registers — are emerging in parallel across jurisdictions.
              <br />
              The direction is clear: infrastructure is digitizing.
              <br />
              The landscape, however, remains fragmented.
              <br />
              Banks face a growing number of regulated digital market infrastructures across Europe, each with different technical and operational requirements.
            </p>

            <div className="bg-gradient-to-r from-brand-cool-from/20 to-brand-cool-to/20 rounded-xl p-6 border-l-4 border-brand-cool-to">
              <p className="text-xl font-semibold text-white leading-relaxed">
                DLT Bridge enables financial institutions to integrate once and maintain strategic flexibility — connecting to multiple regulated digital securities environments without infrastructure lock-in.
                <br />
                As digital issuance scales, institutions positioned early will expand cross-border product access while preserving regulatory control within the bank.
              </p>
              <p className="text-sm text-slate-200 mt-3">
                Product of TokenWay. Participant in the CzechInvest regulatory sandbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
