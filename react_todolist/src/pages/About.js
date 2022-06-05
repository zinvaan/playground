import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  // 현재 경로가(search) '?detail-true' 인지 확인
  const detail = search === '?detail=true';
  const goBack = () => {
    navigate(-1);
  };
  // 홈으로 가기
  const goHome = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.
      </p>
      {detail && <p>detail 값을 true로 설정하셨군요!</p>}
      <button onClick={goBack}>back</button>
      <button onClick={goHome}>home</button>
    </div>
  );
};

export default About;
