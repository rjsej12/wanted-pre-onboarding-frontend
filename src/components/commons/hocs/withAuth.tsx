import { Navigate } from 'react-router-dom';

export const withAuth = (Component: any) => (props: any) => {
  if (!localStorage.getItem('accessToken')) {
    alert('로그인 후 이용 가능합니다');
    return <Navigate to="/signin" />;
  }

  return <Component {...props} />;
};
