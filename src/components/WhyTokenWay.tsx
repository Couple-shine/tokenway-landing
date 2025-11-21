import { CheckCircle, Network, CreditCard, Store, MapPin } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Regulatory Confidence',
    description: 'TokenWay is MiCA-ready providing a compliant foundation for token issuance across Europe.'
  },
  {
    icon: Network,
    title: 'Advanced Technology',
    description: 'Dual-chain support — Polygon for scalable utility and hybrid tokens, and Corda (DLT Prague) for regulated security tokens integrated with the Prague Stock Exchange DLT node.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    description: 'Integrated Circle Alliance APIs for USDC and EURC settlements, alongside SEPA payments, make token purchases frictionless for both institutional and retail investors across the CEE region.'
  },
  {
    icon: Store,
    title: 'Direct Token Sales',
    description: 'Embed our white-label modules directly on your website and sell tokens under your brand — TokenWay delivers the secure, compliant backend infrastructure.'
  },
  {
    icon: MapPin,
    title: 'Regional Expertise',
    description: 'As a CEE-based tokenization provider, TokenWay connects technology and compliance to unlock the region\'s vast digital investment potential.'
  }
];

export default function WhyTokenWay() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why TokenWay
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-yellow-300 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-yellow-300 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
