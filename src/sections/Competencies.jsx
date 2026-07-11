import './Competencies.css';

const STAMPS = [
  { label: 'HR Management', rotate: -2.4, size: 'lg', outline: 'gold' },
  { label: 'Learning & Development', rotate: 2.1, size: 'md', outline: 'rose' },
  { label: 'Compliance & Admin', rotate: -1.2, size: 'md', outline: 'gold' },
  { label: 'Technical Skills', rotate: 2.8, size: 'sm', outline: 'rose' },
  { label: 'Languages', rotate: -3, size: 'md', outline: 'gold' },
  { label: 'Fluent English', rotate: 1.5, size: 'sm', outline: 'rose' },
  { label: 'Fluent Burmese', rotate: -0.8, size: 'sm', outline: 'gold' },
];

export default function Competencies() {
  return (
    <section id="competencies" className="section competencies">
      <div className="section__inner">
        <p className="section__label">What I bring · Endorsements</p>
        <h2 className="section__title">Core competencies</h2>

        <ul className="stamp-field" aria-label="Core competencies">
          {STAMPS.map((stamp) => (
            <li
              key={stamp.label}
              className={`stamp stamp--${stamp.size} stamp--${stamp.outline}`}
              style={{ '--stamp-rotate': `${stamp.rotate}deg` }}
            >
              <span className="stamp__inner">{stamp.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
