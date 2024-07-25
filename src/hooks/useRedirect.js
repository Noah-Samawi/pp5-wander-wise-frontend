import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

export const useRedirect = (userAuthStatus) => {
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      if (userAuthStatus === 'loggedIn' && currentUser) {
        navigate('/');
      }
    };

    handleMount(); // Ensure this is correctly awaited if necessary
  }, [navigate, userAuthStatus, currentUser]);
};
