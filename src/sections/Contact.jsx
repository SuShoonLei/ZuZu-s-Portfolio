import './Contact.css';

const PHONE = '(+66) 063 130 2665';
const PHONE_HREF = 'tel:+66631302665';
const EMAIL = 'cupidoflove1500@gmail.com';
const EMAIL_HREF = `mailto:${EMAIL}`;
const LINE_ID = 'm_m_zu';


export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">
        <p className="section__label">Correspondence</p>
        <h2 className="section__title">Let&apos;s connect</h2>

        <p className="contact__closing">Yours in People Operations,</p>
        <p className="contact__signature" aria-hidden="true">
          Myat Myint Zu
        </p>

        <address className="contact__details">
          <p>Bangkok, Thailand</p>
          <p>
            <a href={PHONE_HREF}>{PHONE}</a>
          </p>
          <p>
            <a href={EMAIL_HREF}>{EMAIL}</a>
          </p>
          <p>LINE ID: {LINE_ID}</p>
        </address>
      </div>
    </section>
  );
}
