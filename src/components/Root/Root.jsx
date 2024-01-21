import './Root.css';
import logo from '../../assets/logo.svg';
import github from '../../assets/github.svg';
import { NavLink, Outlet } from 'react-router-dom';
import routenames from '../../navigation/routnames';

export default function Root() {
  const getClassName = ({ isActive }) => isActive ? 'selected' : '';
  return (
    <div className="root">
      <div className="upper">
        <section className="left"></section>
        <section className="middle">
          <header>
            <div className="logo-box">
              <figure className="logo-wrap">
                <img src={logo} alt="" className="logo" />
              </figure>
              <h6 className="name">Pete</h6>
            </div>
            <ul className="links">
              <li className="link">
                <NavLink to="/" className={getClassName}><span className="hashtag">#</span>home</NavLink>
              </li>
              <li className="link">
                <NavLink to={routenames.projects} className={getClassName}><span className="hashtag">#</span>projects</NavLink>
              </li>
              <li className="link">
                <NavLink to={routenames.about} className={getClassName}><span className="hashtag">#</span>about-me</NavLink>
              </li>
              <li className="link">
                <NavLink to={routenames.contact} className={getClassName}><span className="hashtag">#</span>contacts</NavLink>
              </li>
            </ul>
          </header>
          <main className="content">
            <Outlet />
          </main>
        </section>
        <section className="right"></section>
      </div>
      <footer>
        <section className="top">
          <div className="info-wrap">
            <div className="info">
              <div className="logo-box">
                <figure className="logo-wrap">
                  <img src={logo} alt="logo" className="logo" />
                </figure>
                <h6 className="name">Pete</h6>
              </div>
              <p className="email">onumdev@gmail.com</p>
            </div>
            <p className="proffession">Full-stack Software Developer</p>
          </div>
          <div className="media-wrap">
            <h2 className="media-text">Media</h2>
            <div className="social-icons">
              <img src={github} alt="" className="ic" />
              <img src={github} alt="" className="ic" />
              <img src={github} alt="" className="ic" />
            </div>
          </div>
        </section>
        <p className="copyright">© Copyright 2022. Design inspired by Elias. Built by yours truly</p>
      </footer>
    </div>
  )
}