import Contact from '../sections/Contact';
import PageNav from '../components/PageNav';

export default function ContactPage() {
  return (
    <div className="page page--contact">
      <Contact />
      <PageNav currentIndex={4} />
    </div>
  );
}
