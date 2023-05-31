export interface FormData {
  'first-name': string;
  'last-name': string;
  subject: string;
  message: string;
}

export interface MessageState {
  message: string;
  type: 'error' | 'success';
}