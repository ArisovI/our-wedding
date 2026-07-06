const VenueIllustration = () => (
  <svg
    className="venue-illustration"
    viewBox="0 0 200 120"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      {/* left flower stem */}
      <path d="M40 110 C 40 80, 30 65, 34 40" />
      <circle cx="34" cy="34" r="7" />
      <circle cx="24" cy="40" r="6" />
      <circle cx="44" cy="42" r="6" />
      <circle cx="34" cy="46" r="5" fill="currentColor" opacity="0.15" />

      {/* champagne glasses */}
      <path d="M100 45 L108 70 L92 70 Z" />
      <line x1="100" y1="70" x2="100" y2="100" />
      <line x1="90" y1="100" x2="110" y2="100" />
      <path d="M100 45 C 100 52, 108 52, 108 45" />

      <path d="M130 55 L138 78 L122 78 Z" />
      <line x1="130" y1="78" x2="130" y2="100" />
      <line x1="121" y1="100" x2="139" y2="100" />

      {/* fork & knife */}
      <line x1="160" y1="40" x2="160" y2="100" />
      <line x1="156" y1="40" x2="156" y2="55" />
      <line x1="160" y1="40" x2="160" y2="55" />
      <line x1="164" y1="40" x2="164" y2="55" />
      <path d="M178 40 C 178 55, 172 55, 172 65 L172 100" />
    </g>
  </svg>
);

export default VenueIllustration;
