import { IUser, IUserLesson } from '../interfaces';
import { ILesson } from '../interfaces/lesson';

const baseUrl: string = 'http://localhost:3001';

function fetchRequest(path: string, options?: RequestInit): Promise<any> {
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

//lesson
export function getLesson(): Promise<ILesson> {
  return fetchRequest('/lesson/1');
}

//user

export function userRegister(username: string, password: string, email: string): Promise<IUser> {
  const body = { username, password, email };
  return fetchRequest(`/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export function userLogin(username: string, password: string): Promise<IUser> {
  const body = { username, password };
  return fetchRequest(`/user/login`, { body: JSON.stringify(body) });
}

//TODO: This need to be finalised, I think we need to send additional data - username - as well as handling this on FE
export function userLogout(): Promise<void> {
  return fetchRequest('/logout');
}

export function getUser(username: string): Promise<IUser> {
  return fetchRequest(`/user/profile/${username}`);
}

//userLesson

export function addUserLesson(
  userId: string,
  lessonId: number,
  stepCompleted: number
): Promise<IUserLesson> {
  const body = { userId, lessonId, stepCompleted };
  return fetchRequest(`/user-lesson`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export function updateUserLessonProgress(
  userId: string,
  lessonId: number,
  stepCompleted: number
): Promise<IUserLesson> {
  const body = { userId, lessonId, stepCompleted };
  return fetchRequest(`/user-lesson`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}
