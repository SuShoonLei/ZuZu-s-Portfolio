import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Antigravity from '../components/Antigravity';
import MetallicPaint from '../components/MetallicPaint';
import './Hero.css';

const HEADER_WORDS = ['RE:', 'MYAT', 'MYINT', 'ZU', '-', 'PERSONAL', 'RECORD'];

function useMetallicNameSrc() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function createWordmark() {
      try {
        if (document.fonts?.load) {
          await document.fonts.load('600 italic 220px Fraunces');
        }
        await document.fonts?.ready;
      } catch {
        // Fall through with system serif if Fraunces is slow to load.
      }

      if (cancelled) return;

      const text = 'Myat Myint Zu';
      const width = 2000;
      const sidePad = 80;
      const maxTextWidth = width - sidePad * 2;

      const measure = document.createElement('canvas').getContext('2d');
      let fontSize = 240;
      do {
        measure.font = `italic 600 ${fontSize}px Fraunces, Georgia, "Times New Roman", serif`;
        if (measure.measureText(text).width <= maxTextWidth) break;
        fontSize -= 4;
      } while (fontSize > 60);

      measure.font = `italic 600 ${fontSize}px Fraunces, Georgia, "Times New Roman", serif`;
      const metrics = measure.measureText(text);
      const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.85;
      const descent = metrics.actualBoundingBoxDescent || fontSize * 0.3;
      // Extra padding so italic descenders/flourishes are never clipped.
      const verticalPad = Math.ceil(fontSize * 0.55);
      const height = Math.ceil(ascent + descent + verticalPad * 2);

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.font = `italic 600 ${fontSize}px Fraunces, Georgia, "Times New Roman", serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(text, sidePad, verticalPad + ascent);

      setImageSrc(canvas.toDataURL('image/png'));
    }

    createWordmark();
    return () => {
      cancelled = true;
    };
  }, []);

  return imageSrc;
}

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const nameSrc = useMetallicNameSrc();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(HEADER_WORDS.length);
      return undefined;
    }

    setVisibleCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= HEADER_WORDS.length) window.clearInterval(id);
    }, 220);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__particles" aria-hidden="true">
        <Antigravity
          count={250}
          magnetRadius={6}
          ringRadius={5}
          waveSpeed={0.3}
          waveAmplitude={0.8}
          particleSize={1.2}
          lerpSpeed={0.06}
          color="#E7B8C2"
          autoAnimate={true}
          particleVariance={0.6}
          rotationSpeed={0.1}
          particleShape="sphere"
        />
      </div>

      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__re" aria-label="MYAT MYINT ZU - PERSONAL RECORD">
          {HEADER_WORDS.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={`hero__re-word${index < visibleCount ? ' is-visible' : ''}`}
            >
              {word}
            </span>
          ))}
        </p>

        <div className="hero__name" aria-label="Myat Myint Zu">
          <h1 className={`hero__name-fallback${nameSrc ? ' is-hidden' : ''}`}>
            Myat Myint Zu
          </h1>
          {nameSrc ? (
            <MetallicPaint
              imageSrc={nameSrc}
              seed={12}
              scale={3}
              liquid={0.4}
              speed={0.2}
              brightness={1.6}
              contrast={0.6}
              refraction={0.008}
              blur={0.02}
              fresnel={1}
              lightColor="#FBF6F2"
              darkColor="#B97C89"
              tintColor="#E7B8C2"
            />
          ) : null}
        </div>

        <p className="hero__title">HR Leader | Human Resources Specialist</p>
        <p className="hero__tagline">
          Results-driven HR professional with 7+ years across entertainment, finance, trading,
          construction, and retail - specializing in full-cycle recruitment, payroll, and strategic
          L&D.
        </p>

        <p className="hero__links">
          <a href="#about" className="hero__text-link">
            About me
          </a>
          <span aria-hidden="true"> · </span>
          <Link to="/contact" className="hero__text-link">
            Let&apos;s connect
          </Link>
        </p>
      </div>
    </section>
  );
}
