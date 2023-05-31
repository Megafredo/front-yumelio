// Permet de corriger l'erreur d'importation SVG de typescript
declare module '\*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export { ReactComponent };
}

declare module "\*.jpg" {
  const jpgContent: string;
  export default jpgContent ;
}

declare module "\*.png" {
  const pngContent: string;
  export default pngContent ;
}

declare module "\*.json" {
  const jsonContent: string;
  export default jsonContent ;
}

