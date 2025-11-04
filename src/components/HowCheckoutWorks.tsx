import { Check } from 'lucide-react';

export default function HowCheckoutWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add the checkout',
      description: 'Drop our widget into your website. It looks like your brand.',
    },
    {
      number: '02',
      title: 'Set your offer',
      description: 'You bring the documents. We make them easy to read and accept.',
    },
    {
      number: '03',
      title: 'Verify & pay',
      description: 'Fast ID check (BankID/eID). Take cards or bank transfer. Funds go to a segregated paying-agent account—never to us.',
    },
    {
      number: '04',
      title: 'Allocate & record',
      description: 'We generate allocation files. Ownership is recorded on recognized market infrastructure. Investors see their position in a simple portal.',
    },
  ];

  const keyPoints = [
    'We are not a broker or an adviser.',
    'We do not hold client money.',
    'Works with your payment provider. Built for CEE.',
  ];

  return (
    <section id="how-checkout-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How TokenWay Checkout Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-yellow-500">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key Points
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-slate-900" />
                </div>
                <p className="text-slate-100 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
