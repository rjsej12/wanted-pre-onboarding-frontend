import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (location.pathname === '/todo') {
      if (!accessToken) {
        alert('로그인 후 이용 가능합니다');
        navigate('/signin');
      }
    }

    if (location.pathname === '/signin' || location.pathname === '/signup') {
      if (accessToken) navigate('/todo');
    }
  }, []);

  return;
}
