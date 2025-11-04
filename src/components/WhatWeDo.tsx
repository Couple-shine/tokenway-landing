import { Shield, Globe, Zap } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Bespoke Tokenization Solutions for Modern Finance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            TokenWay helps companies issue, manage, and sell digital tokens directly from their own websites — safely, transparently, and fully compliant with EU MiCA regulations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Our white-label tokenization platform gives you total brand control, enabling direct token sales and investor onboarding under your own identity, while we handle blockchain infrastructure, compliance, and payments.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Fully Compliant</h3>
              <p className="text-slate-600">EU MiCA regulations built into every transaction</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">White-Label Ready</h3>
              <p className="text-slate-600">Launch under your brand with full customization</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Infrastructure</h3>
              <p className="text-slate-600">Blockchain, payments, and compliance handled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
