import Hero from '../sections/Hero';
import About from '../sections/About';
import PageNav from '../components/PageNav';

export default function IntroductionPage() {
  return (
    <div className="page page--intro">
      <Hero />
      <About />
      <PageNav currentIndex={0} />
    </div>
  );
}
