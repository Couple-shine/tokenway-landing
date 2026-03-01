import { Shield, Globe, Zap } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One Bridge. Every Ledger. Infinite Liquidity across the EU.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Banks &amp; Capital Institutions must adopt DLT now:
            <br />
            to cut costs, meet EU mandates, and stay competitive
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            DLTBridge runs the workflows that connect core banking systems to regulated DLT nodes while the bank keeps all client, payment, and regulatory roles. This enables financial institutions to endlessly scale their access to digital assets liquidity.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Fully Compliant</h3>
              <p className="text-slate-600">EU ESMA regulations, built into every transaction</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">White-Label Ready</h3>
              <p className="text-slate-600">Launch under your brand with full customization</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Infrastructure</h3>
              <p className="text-slate-600">Cut settlement time from T+2 to T+0.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
