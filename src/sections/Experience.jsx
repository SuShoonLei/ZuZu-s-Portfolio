import './Experience.css';

/* TODO: replace with exact resume wording when available */
const ROLES = [
  {
    company: 'Avery Media Entertainment Agency (TikTok)',
    role: 'HR Leader',
    dates: 'AUG 2025 — PRESENT',
    datetime: '2025-08',
    summary:
      'Lead full-cycle HR operations for a fast-paced entertainment and creator agency environment — oversee recruitment, onboarding, and people practices that support talent and business growth — partner with leadership on payroll, employee relations, and strategic L&D priorities.',
  },
  {
    company: 'Hana Microfinance Co., Ltd',
    role: 'Regional HR Coordinator',
    dates: 'APR 2022 — JUNE 2025',
    datetime: '2022-04/2025-06',
    summary:
      'Coordinated regional HR activities across recruitment, payroll support, and employee development — supported compliance and administrative HR processes aligned with organizational standards — facilitated learning initiatives and HR coordination for multi-location teams.',
  },
  {
    company: 'IEM Co., Ltd (Trading)',
    role: 'HR Executive',
    dates: 'AUG 2020 — SEPT 2021',
    datetime: '2020-08/2021-09',
    summary:
      'Managed day-to-day HR executive responsibilities including recruitment and employee administration — supported payroll and HR compliance workflows within a trading business context — assisted managers with people operations and workforce coordination.',
  },
  {
    company: 'Shwe Taung Development Co., Ltd (Construction)',
    role: 'HR L&D Associate',
    dates: 'JULY 2019 — JULY 2020',
    datetime: '2019-07/2020-07',
    summary:
      'Delivered learning & development support for construction-sector teams and talent programs — assisted with training coordination, HR administration, and capability-building initiatives — contributed to recruitment and people-process support across operational units.',
  },
  {
    company: 'CMHL Co. Ltd (City Mart)',
    role: 'Training Officer',
    dates: 'JAN 2018 — MAY 2019',
    datetime: '2018-01/2019-05',
    summary:
      'Designed and delivered employee training programs across a retail organization — collaborated with HR on job descriptions, recruitment support, and staff development — tracked training outcomes and supported continuous learning for store and corporate teams.',
  },
  {
    company: 'Myanmar Airways International (MAI)',
    role: 'HR Assistant',
    dates: 'JULY 2015 — JULY 2016',
    datetime: '2015-07/2016-07',
    summary:
      'Provided HR administrative support across recruitment documentation and employee records — assisted with onboarding coordination and day-to-day HR inquiries — supported payroll and compliance-related clerical tasks for the HR team.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <p className="section__label">Ledger · Career history</p>
        <h2 className="section__title">Professional experience</h2>

        <ol className="ledger">
          {ROLES.map((item) => (
            <li key={`${item.company}-${item.dates}`} className="ledger__entry" tabIndex={0}>
              <time className="ledger__dates" dateTime={item.datetime}>
                {item.dates}
              </time>
              <div className="ledger__body">
                <h3 className="ledger__company">{item.company}</h3>
                <p className="ledger__role">{item.role}</p>
                <p className="ledger__summary">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
