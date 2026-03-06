import type { LucideIcon } from 'lucide-react';
import { TrendingUp, Timer, Landmark, Layers } from 'lucide-react';

type ParagraphBlock = {
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
};

type BulletBlock = {
  icon: LucideIcon;
  title: string;
  bullets: string[];
};

const blocks: Array<ParagraphBlock | BulletBlock> = [
  {
    icon: TrendingUp,
    title: 'Up to 50%+ Operational Simplification',
    paragraphs: [
      'Digital primary issuance on DLT-enabled infrastructures can remove multiple intermediary and reconciliation layers compared to legacy T+2 processes.',
      'TokenWay provides the orchestration layer that allows banks to capture these efficiencies without altering their regulatory perimeter.',
    ],
  },
  {
    icon: Timer,
    title: 'Impact depends on workflow design and selected infrastructure',
    paragraphs: [
      'T+0 Settlement Capabilities (Where Permitted)',
      'Integration with DLT-based settlement systems enables support for near-real-time or T+0 settlement models where permitted — reducing counterparty exposure windows and post-trade friction.',
      'TokenWay does not replace the venue — it unlocks access to infrastructure capable of doing so.',
    ],
  },
  {
    icon: Landmark,
    title: 'Broader Market Optionality',
    paragraphs: [
      'A single integration provides access to multiple regulated digital securities infrastructures across Europe — from DLT venues to electronic securities registers — expanding product capabilities without dependency on one system.',
      'This flexibility allows institutions to respond as the European digital capital markets landscape consolidates.',
    ],
  },
  {
    icon: Layers,
    title: 'Built for Institutional Scale',
    bullets: [
      'Secure API connectivity',
      'Deterministic order-state management',
      'Full audit trail and reconciliation',
      'Bank-owned compliance and payment control',
    ],
  }
];

function isBulletBlock(block: ParagraphBlock | BulletBlock): block is BulletBlock {
  return 'bullets' in block;
}

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
            Unlock Structural Capital Efficiency
          </h2>

          <p className="text-xl text-slate-600 max-w-6xl mx-auto leading-relaxed">
            Legacy capital markets infrastructure was built for paper-era workflows. Digital securities infrastructures are not.
            DLT Bridge by TokenWay enables banks to access DLT-enabled environments capable of supporting T+0 settlement (where supported by the underlying venue), streamlined issuance workflows, and materially reduced post-trade complexity.

            By replacing fragmented integrations with a single modular connection, institutions can significantly reduce operational overhead, reconciliation layers, and infrastructure duplication across digital securities activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blocks.map((item, index) => {
            const styles = cardStyles[index] ?? cardStyles[0];
            return (
              <div
                key={item.title}
                className={`${styles.wrapper} bg-gradient-to-br ${styles.accent}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={`w-14 h-14 ${styles.icon} rounded-2xl flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {isBulletBlock(item) ? (
                  <ul className="mt-6 space-y-2 text-slate-700 leading-relaxed">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cool-to flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                    {item.paragraphs.map((p, pIndex) => (
                      <p
                        key={pIndex}
                        className={
                          item.title ===
                            'Impact depends on workflow design and selected infrastructure' &&
                          pIndex === 0
                            ? 'font-semibold text-slate-900'
                            : undefined
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}
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
