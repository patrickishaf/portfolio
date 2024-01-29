import './Contact.css';
import discord from '../../assets/discord.svg';
import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';

export default function Contact() {
  const contactText = "If you want to contact me, it's very easy! Just click on any social media icon anywhere on this site. I'll just add that I respond to messages on LinkedIn a bit faster so you might wanna use that option😉";
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
          <p className="interests">{contactText}</p>
        </div>
        <div className="contact-right">
          <div className="support-box">
          </div>
          <div className="msg-me-box">
            <p className="msg-me-box-title">Message me here</p>
            <div className="msg-me-action">
              <img src={twitter} alt="full-stack software developer" className="msg-me-img" />
              <span className="msg-me-action-text">
                <a href="https://x.com/thecodeninjaeu" target="_blank" rel="noreferrer">@thecodeninjaeu</a>
              </span>
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
            <p className="social-tile-text">
              <a href="https://linkedin.com/in/pete-onum" target="_blank" rel="noreferrer">Pete Onum</a>
            </p>
          </div>
          <div className="social-tile">
            <img src={discord} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">
              <a href="https://x.com/thecodeninjaeu" target="_blank" rel="noreferrer">patrickishaf</a>
            </p>
          </div>
          <div className="social-tile">
            <img src={github} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">
              <a href="https://github.com/patrickishaf" target="_blank" rel="noreferrer">patrickishaf</a>
            </p>
          </div>
          <div className="social-tile">
            <img src={twitter} alt="full-stack software developer" className="social-tile-ic" />
            <p className="social-tile-text">
              <a href="https://x.com/thecodeninjaeu" target="_blank" rel="noreferrer">@thecodeninjaeu</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}