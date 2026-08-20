import { FolderIcon, GasIcon, BuildingIcon, MonitorIcon, TrainingIcon } from './Icons';

const specialties = [
  {
    title: 'Business Solutions',
    description: 'Business plans, feasibility studies and financial models.',
    href: '#services',
    Icon: FolderIcon,
  },
  {
    title: 'Gas',
    description: 'Gas value chain, plant development and reticulation.',
    href: '#gas',
    Icon: GasIcon,
  },
  {
    title: 'Real Estate',
    description: 'Concept development through to construction finance.',
    href: '#realestate',
    Icon: BuildingIcon,
  },
  {
    title: 'Remote Monitoring',
    description: 'Wireless telemetry for tanks and fuel operations.',
    href: '#remote',
    Icon: MonitorIcon,
  },
  {
    title: 'Training & Development',
    description: 'Capacity building across four core sectors.',
    href: '#training',
    Icon: TrainingIcon,
  },
];

export default function ProjectSpecialties() {
  return (
    <section id="specialties" className="relative pt-[110px] pb-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow">Project Specialties</span>
          <h2>Where we deliver</h2>
          <p className="mx-auto">
            Five specialist areas, each backed by ECOPRIME's core strategy, technology,
            process and organization competences.
          </p>
        </div>

        {/* Specialty cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5 reveal">
          {specialties.map(({ title, description, href, Icon }) => (
            <a
              key={title}
              href={href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-tight cursor-pointer"
            >
              {/* Background tile */}
              <div
                className="relative w-full h-full flex flex-col items-center justify-center text-white"
                style={{
                  background: 'linear-gradient(150deg, var(--color-blue-deep), var(--color-blue-mid))',
                }}
              >
                {/* Stripe pattern */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0 1.5px, transparent 1.5px 22px)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative z-10 w-[46px] h-[46px] rounded-xl bg-lime flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-[23px] h-[23px] text-blue-deep" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/95 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-[22px] mb-2">{title}</h3>
                <p className="text-[13px] text-white/72 mb-3">{description}</p>
                <span className="text-xs font-bold text-lime inline-flex items-center gap-1.5">
                  Learn More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
