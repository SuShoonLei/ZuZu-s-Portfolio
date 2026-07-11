import Education from '../sections/Education';
import PageNav from '../components/PageNav';

export default function EducationPage() {
  return (
    <div className="page page--education">
      <Education />
      <PageNav currentIndex={3} />
    </div>
  );
}
