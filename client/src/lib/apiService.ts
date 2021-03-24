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
