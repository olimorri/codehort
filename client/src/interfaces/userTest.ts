export interface IUserTest {
  install: boolean;
  terminalRegex?: RegExp | null;
  regex?: string;
  message: string;
  suggestion: string;
  taskId?: number;
}
