const realEstateItems = [
  'Concept Development & Sales Marketing',
  'Architectural Design',
  'Value Addition',
  'Project Management',
  'Construction Finance',
];

export default function RealEstate() {
  return (
    <section id="realestate" className="relative py-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[56px] items-center">
        {/* Image placeholder */}
        <div className="rounded-[18px] overflow-hidden aspect-[4/5] shadow-soft order-last lg:order-first">
          <div
            className="w-full h-full flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(150deg, var(--color-blue-mid), var(--color-blue-deep))',
            }}
          >
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0 1.5px, transparent 1.5px 22px)',
              }}
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8DC63F"
              strokeWidth={1.2}
              className="w-[70px] h-[70px] relative z-10"
            >
              <path d="M3 21V10l9-7 9 7v11" />
              <path d="M9 21v-6h6v6" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="reveal">
          <span className="eyebrow">Real Estate</span>
          <h2
            className="mt-3.5 mb-1.5"
            style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}
          >
            From concept to completion
          </h2>
          <p className="text-gray text-[15px] max-w-[480px]">
            ECOPRIME supports real estate projects across development, design and delivery.
          </p>

          <ul className="mt-5">
            {realEstateItems.map((item, i) => (
              <li
                key={item}
                className="flex gap-3.5 items-start py-3.5 border-b border-line last:border-b-0 text-[15px]"
              >
                <span className="w-[26px] h-[26px] rounded-full bg-gray-light text-blue-deep font-heading font-extrabold text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
