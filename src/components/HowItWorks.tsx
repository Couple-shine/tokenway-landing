import { Settings, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-6">
              <Settings className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Tokenization, Tailored to You
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-yellow-50/50 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Every project is different — and so is our approach. TokenWay creates personalized tokenization solutions that fit your business model, investor base, and compliance requirements.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We integrate Circle Alliance APIs for USDC and EURC custody, fiat–crypto settlement, and SEPA payments, ensuring smooth transactions and regulatory alignment.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              From concept to launch, our team helps you design, implement, and operate a fully compliant token issuance system — built for growth and investor trust.
            </p>

            <div className="flex justify-center">
              <button className="group bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
