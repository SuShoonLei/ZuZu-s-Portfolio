import Competencies from '../sections/Competencies';
import PageNav from '../components/PageNav';

export default function CompetenciesPage() {
  return (
    <div className="page page--competencies">
      <Competencies />
      <PageNav currentIndex={1} />
    </div>
  );
}
