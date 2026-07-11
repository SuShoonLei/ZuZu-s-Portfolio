import { Link } from 'react-router-dom';
import { PAGES } from '../pages/pageConfig';
import './PageNav.css';

export default function PageNav({ currentIndex }) {
  const prev = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const next = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;
  const current = PAGES[currentIndex];

  return (
    <nav className="page-nav" aria-label="Page">
      <div className="page-nav__inner">
        <div className="page-nav__side page-nav__side--prev">
          {prev ? (
            <Link to={prev.path} className="page-nav__btn page-nav__btn--ghost">
              <span className="page-nav__direction">Previous</span>
              <span className="page-nav__label">{prev.label}</span>
            </Link>
          ) : (
            <span className="page-nav__placeholder" aria-hidden="true" />
          )}
        </div>

        <p className="page-nav__progress" aria-live="polite">
          <span className="sr-only">Page </span>
          {currentIndex + 1}
          <span className="page-nav__progress-sep">/</span>
          {PAGES.length}
        </p>

        <div className="page-nav__side page-nav__side--next">
          {next ? (
            <Link to={next.path} className="page-nav__btn page-nav__btn--primary">
              <span className="page-nav__direction">Next</span>
              <span className="page-nav__label">{next.nextLabel || next.label}</span>
            </Link>
          ) : (
            <Link to="/" className="page-nav__btn page-nav__btn--ghost">
              <span className="page-nav__direction">Back</span>
              <span className="page-nav__label">Introduction</span>
            </Link>
          )}
        </div>
      </div>

      <p className="page-nav__current sr-only">Current page: {current.label}</p>
    </nav>
  );
}
