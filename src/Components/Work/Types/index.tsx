export interface WorkTypes {
  id: number;
  title: {
    firstLine: string;
    secondLine: string;
  },
  subtitle: {
    firstLine: string;
    secondLine: string;
  },
  color: string,
  description: Array<string>;
}