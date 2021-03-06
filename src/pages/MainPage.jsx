import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserContentList from '@components/domain/UserContentList';
import { MainHeader } from '@components/common/Header';
import { fetchIntroductionList } from '../redux/introduction';

// 추가해야 할 로직
// 유저 로그인 시, 자기소개글 여부 (Boolean) 확인
// false일 시, 블러 처리가 되면서 모달창 띄워줌
// true일 시, 블러 처리가 풀리면서 다른 사람들 글 확인

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIntroductionList());
  }, [dispatch]);

  return (
    <>
      <MainHeader />
      <UserContentList />
    </>
  );
};

export default MainPage;
