import './Contact.css';
import discord from '../../assets/discord.svg';
import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';

export default function Contact() {
  return (
    <div className="contactme">
      <section className="page-intro">
        <h1 className="page-name">
          <span className="accent">/</span>contact-me
        </h1>
        <p className="page-desc">Get in touch</p>
      </section>
      <section className="contact-main">
        <div className="contact-left">
          <p className="interests">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="contact-right">
          <div className="support-box">
            <p className="support-box-title">Support me here</p>
            <p className="support-box-text">4149500120690030</p>
          </div>
          <div className="msg-me-box">
            <p className="msg-me-box-title">Message me here</p>
            <div className="msg-me-action">
              <img src={discord} alt="full-stack software developer" className="msg-me-img" />
              <span className="msg-me-action-text">patrickishaf</span>
            </div>
            <a href="mailto:onumdev@gmail.com" className="msg-me-action">
              <img src={email} alt="full-stack software developer" className="msg-me-img" />
              <span className="msg-me-action-text">onumdev@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <section className="all-media page-section">
        <h1 className="pg-section-title">
          <span className="accent">#</span>all-media
        </h1>
        <div className="all-media-main">
          <div className="social-tile">
            <img src={linkedin} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">Pete Onum</p>
          </div>
          <div className="social-tile">
            <img src={discord} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">patrickishaf</p>
          </div>
          <div className="social-tile">
            <img src={github} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">patrickishaf</p>
          </div>
          <div className="social-tile">
            <img src={twitter} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">@thecodeninjaeu</p>
          </div>
        </div>
      </section>
    </div>
  )
}