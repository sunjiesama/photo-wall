import { history } from 'umi';
import Cookies from 'js-cookie';
export const getInitialState = async (): Promise<{
  userInfo?: any;
}> => {
  const token = Cookies.get('token');
  if (!token) {
    history.replace('/login');
  }
  return { userInfo: {} };
};
