import React from 'react';
import MainProfile from '../assets/imgs/main_profile.jpg';

const Home = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home" id="home">
      <div className="home__content">
        <img src={MainProfile} alt="이종호 프로필" className="home__avatar" />
        <h1 className="home__title">
          안녕하세요,
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            이종호
          </span>
          입니다
        </h1>
        <p className="home__description">
          사용자 경험을 중시하는 풀스택 웹 개발자
        </p>
        <button className="home__contact" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;
