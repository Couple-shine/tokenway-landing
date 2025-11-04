import { TrendingUp } from 'lucide-react';

export default function CEEOpportunity() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-yellow-300 font-medium">Market Opportunity</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unlocking the Untapped Investment Market of Central and Eastern Europe
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The Central and Eastern European (CEE) region represents one of Europe's most dynamic yet underserved financial markets. Households across the area — excluding Russia — generate approximately €300–350 billion in annual investment spending through deposits, pensions, funds, and securities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">€300–350B</div>
                <div className="text-slate-300">Annual CEE investment spending</div>
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">4–5×</div>
                <div className="text-slate-300">Larger than Czech market alone</div>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Despite this enormous potential, digital investment solutions and tokenized financial products remain limited. TokenWay is leading the transformation by providing compliant tokenization infrastructure and direct investor access for companies throughout the CEE region.
            </p>

            <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-xl p-6 border-l-4 border-yellow-400">
              <p className="text-xl font-semibold text-white">
                Our mission: to connect CEE's investment power with next-generation blockchain finance — securely, transparently, and under European regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
