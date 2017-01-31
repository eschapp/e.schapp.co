import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 2em;
    font-weight: 400;
    background: #EEE;
    font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;
  }
  h1 {
    font-size: 3.5em;
  }
  h2 {
    font-size: 2.5em;
    text-align: center;
  }
  h1, h2, h3, h4, h5, h6 {
    color: orange;
  }
  `