interface IHeaders {
  'Content-Type': string;
}

export interface IApiOptions {
  method: string;
  headers: IHeaders;
  body: string;
}
