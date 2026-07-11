import './Education.css';

const CREDENTIALS = [
  {
    title: 'MBA',
    school: 'Assumption University, Bangkok',
    year: '2018',
    monogram: 'AU',
  },
  {
    title: 'BBA',
    school: 'Siam University, Bangkok',
    year: '2015',
    monogram: 'SU',
  },
  {
    title: 'B.A. in English',
    school: 'Yangon',
    year: '2016',
    monogram: 'YG',
  },
  {
    title: 'Mini HR-OD Program',
    school: 'Assumption University',
    year: null,
    monogram: 'OD',
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner">
        <p className="section__label">Credentials · Seals on file</p>
        <h2 className="section__title">Education &amp; certifications</h2>

        <ul className="seal-row" aria-label="Education and certifications">
          {CREDENTIALS.map((item, index) => (
            <li
              key={item.title}
              className="seal"
              style={{ '--seal-nudge': `${(index % 3) * 0.35 - 0.35}rem` }}
            >
              <div className="seal__ring" aria-hidden="true">
                <span className="seal__monogram">{item.monogram}</span>
              </div>
              <h3 className="seal__degree">{item.title}</h3>
              <p className="seal__meta">
                {item.school}
                {item.year ? ` · ${item.year}` : ''}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
