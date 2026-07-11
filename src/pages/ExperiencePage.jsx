import Experience from '../sections/Experience';
import PageNav from '../components/PageNav';

export default function ExperiencePage() {
  return (
    <div className="page page--experience">
      <Experience />
      <PageNav currentIndex={2} />
    </div>
  );
}
