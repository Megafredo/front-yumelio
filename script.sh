#!bin/bash

{
  echo "//& Import Scss
import './Styles/$COMPONENT_NAME_VARIABLE_SHELL.scss';

//& Imports Modules

//& Imports Components

const $COMPONENT_NAME_VARIABLE_SHELL = () => {
  return (
    <section className=\"\">
    </section>
  );
}; 
export default $COMPONENT_NAME_VARIABLE_SHELL;
"
} > ./src/Components/$COMPONENT_NAME_VARIABLE_SHELL/$COMPONENT_NAME_VARIABLE_SHELL.tsx

{
  echo "@use '../../../Assets/sass/mixins.scss';
@use '../../../Assets/sass/vars.scss';
@use '../../../Assets/sass/animations.scss';
@use './theme.scss';
" 
} > ./src/Components/$COMPONENT_NAME_VARIABLE_SHELL/Styles/$COMPONENT_NAME_VARIABLE_SHELL.scss

{
  echo "@use '../../../Assets/sass/mixins.scss';
@use '../../../Assets/sass/vars.scss';
@use '../../../Assets/sass/animations.scss';
" 
} > ./src/Components/$COMPONENT_NAME_VARIABLE_SHELL/Styles/_theme.scss