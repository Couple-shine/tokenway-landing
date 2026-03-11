import { Shield, Globe, Zap } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            One Integration. Multiple Regulated Infrastructures.
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Digital capital markets are fragmenting across Europe — spanning diverse DLT venues and national electronic securities frameworks. In this evolving landscape, banks need flexibility — not dependency on a single infrastructure.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            DLT Bridge by TokenWay enables institutions to integrate once and connect to multiple regulated digital securities environments, expanding product access while retaining full control over clients, payments, and compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Regulatory-Aligned</h3>
              <p className="text-slate-600">Structured for MiFID and DLT Pilot frameworks with regulated partners, clear role separation, and auditability.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">White-Label Ready</h3>
              <p className="text-slate-600">Seamlessly embedded within existing banking systems and brand environments.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-cool-to/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Infrastructure</h3>
              <p className="text-slate-600">Secure API connectivity, deterministic order-state management, audit trails, and reconciliation aligned with institutional standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
