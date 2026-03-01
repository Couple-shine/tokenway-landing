import { TrendingUp, Timer, Landmark } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    metric: 'Up to 207%',
    title: 'Profit Expansion',
    description:
      'Eliminate 50–80% intermediary, issuance, and distribution costs, generating +110%–207% higher annual profits.'
  },
  {
    icon: Timer,
    metric: 'T+0',
    title: 'Settlement',
    description:
      'Atomic settlement replaces legacy T+2 processes and reduces post-trade reconciliation failures and counterparty risks by automating AML/KYC at the protocol level under your own regulatory licenses.'
  },
  {
    icon: Landmark,
    metric: '€900B',
    title: 'Market Access',
    description:
      'A standardized, plug-and-play solution offers single access to all EU DLT nodes, creating a unified infrastructure across EU DLT settlement systems. This connectivity bridges legacy user interfaces to €800B in bond and €100B in equity markets throughout the EU.'
  }
];

export default function WhyTokenWay() {
  const cardStyles = [
    {
      wrapper:
        'bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all',
      badge: 'bg-brand-cool-to/10 text-brand-navy border border-brand-cool-to/20',
      icon: 'bg-gradient-to-br from-brand-cool-from to-brand-cool-to',
      accent: 'from-brand-cool-from/10 to-brand-cool-to/10',
    },
    {
      wrapper:
        'bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all',
      badge: 'bg-slate-900 text-white border border-white/10',
      icon: 'bg-brand-navy',
      accent: 'from-slate-900/5 to-brand-navy/10',
    },
    {
      wrapper:
        'bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all',
      badge: 'bg-brand-cool-from/10 text-brand-navy border border-brand-cool-from/20',
      icon: 'bg-gradient-to-br from-brand-cool-to to-brand-cool-from',
      accent: 'from-brand-cool-to/10 to-brand-cool-from/10',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Unlock Radical Capital Efficiency
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((item, index) => {
            const styles = cardStyles[index] ?? cardStyles[0];
            return (
              <div
                key={item.title}
                className={`${styles.wrapper} bg-gradient-to-br ${styles.accent}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${styles.badge}`}
                    >
                      {item.metric}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-4">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={`w-14 h-14 ${styles.icon} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mt-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-700 leading-relaxed mt-12 max-w-4xl mx-auto">
          As a CEE-based DLT orchestrator, DLTBridge connects technology and compliance to unlock the region&apos;s vast digital investment potential.
        </p>
      </div>
    </section>
  );
}
