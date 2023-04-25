import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate();
    // const { setToken, getUser } = useContext(DataContext) as AllContext;
    const searchParams = new URLSearchParams(document.location.search);
    const token = searchParams.get('token')!;
    const getAndSetToken = async () => {
      if (token !== null && token !== 'error') {
        localStorage.setItem('signature', token);
        // await getUser();
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    };
  
    useEffect(() => {
      getAndSetToken();
    }, []);
  
    return null;
}

export default Social