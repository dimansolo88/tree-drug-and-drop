import React from 'react'
import { Tree } from './components/index'
import 'antd/dist/antd.css'
import { GlobalStyle, StyledAppWrapper } from './theme/globalStyle'
import { Header } from './blocks/header/index'

function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <GlobalStyle />
      <Tree />
    </StyledAppWrapper>
  )
}

export default App
