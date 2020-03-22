import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
html,
body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.8;
    letter-spacing: 0.5px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
}

div {  box-shadow: 0 0 25px rgba(0, 0, 0, 0.0424);

}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`

export const StyledAppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

