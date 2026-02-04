import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const infoItems = [
    { icon: faUser, label: '이름', value: '이종호' },
    { icon: faPhone, label: '연락처', value: '010-8560-1074' },
    { icon: faEnvelope, label: '이메일', value: 'jj0101065@gmail.com' },
  ];

  return (
    <section className="about section" id="about">
      <div className="section__container">
        <h1 className="section__title">About Me</h1>
        <p className="section__description">
          사용자 중심의 웹 경험을 만들어가는 개발자입니다
        </p>

        <div className="about__content">
          <div className="about__intro">
            <p>
              안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 풀스택 웹 개발자입니다.
              클린 코드와 효율적인 아키텍처를 추구하며, 새로운 기술을 배우고 적용하는 것을 즐깁니다.
            </p>
          </div>

          <div className="about__info-grid">
            {infoItems.map((item, index) => (
              <div key={index} className="about__info-card">
                <div className="about__info-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="about__info-text">
                  <span className="about__info-label">{item.label}</span>
                  <span className="about__info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
