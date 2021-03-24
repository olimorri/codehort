import { IUser } from '../interfaces';
import { ILesson } from '../interfaces/lesson';

const baseUrl: string = 'http://localhost:3001';

function fetchRequest(path: string, options?: any): Promise<any> {
  return fetch(baseUrl + path, options)
    .then((res: Response) => {
      if (res.status >= 400) {
        Promise.reject();
      } else if (res.status === 204) {
        return res;
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${path}`, error);
    });
}

export function getLesson(): Promise<ILesson> {
  return fetchRequest('/lesson/1');
}

//TODO: TEST
export function userLogin(username: string, password: string): Promise<IUser> {
  return fetchRequest(`/user/login`, { body: { username, password } });
}

//TODO: This need to be finalised, I think we need to send additional data - username - as well as handling this on FE
export function userLogout(): Promise<void> {
  return fetchRequest('/logout');
}

//TODO: TEST
export function getUser(username: string): Promise<IUser> {
  return fetchRequest(`/user/profile/${username}`);
}
