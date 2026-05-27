import apiHandler from '../apiHandler';
import { UserLoginRequest } from './patches.types';

class UserApi {
  public login(payload: UserLoginRequest) {
    return apiHandler.post('/auth/login', payload).then((r) => r.data);
  }
  public logout() {
    return apiHandler.get('/auth/logout').then((r) => r.data);
  }
  public getSubordinates() {
    return apiHandler.get('/users/subordinates').then((r) => r.data);
  }
  public me() {
    return apiHandler.get('/auth/me').then((r) => r.data);
  }
}

export default UserApi;
