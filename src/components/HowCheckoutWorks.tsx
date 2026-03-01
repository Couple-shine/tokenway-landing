export default function HowCheckoutWorks() {
  const boxes = [
    {
      title: 'Core Banking Platforms',
      description: 'COBOL compatible integration',
    },
    {
      title: 'Institutional CRM Systems',
      description: 'Wealth management platform connectivity',
    },
    {
      title: 'EUDlt Settlement Platforms',
      description: 'Prague DLT + EU TSS interoperability',
    },
    {
      title: 'Institutions retain complete regulatory control.',
      description: 'TokenWay provides DLT orchestration infrastructure.',
    },
  ];

  return (
    <section id="how-checkout-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            DLT Bridge Connects Institutional Infrastructure
          </h2>
          <div className="text-slate-600 italic font-medium">
            Product of TokenWay
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {boxes.map((box) => (
            <div
              key={box.title}
              className="bg-gradient-to-br from-slate-50 to-brand-cool-to/10 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {box.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
