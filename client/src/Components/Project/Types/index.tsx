export interface ProjectsType {
  id: number;
  title: string;
  color: string;
  projects: {
    id: number;
    name: string;
    "link-github": string;
    "link-demo": string;
    "link-swaggerdocs": string;
    description: string;
    "image-mockup":string,
    "name-logotypes": Array<string>;
    logotypes: Array<string>;
  }[];
}
