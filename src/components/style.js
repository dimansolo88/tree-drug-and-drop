import styled from 'styled-components'

export const TreeLine = styled.button`
  font-family: Menlo, Consolas, monospace;
  background: none;
  color: #42526e;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  cursor: pointer;
  &:hover {
    background-color: #d6d7d9;
  }
  &:active {
    background-color: #d6d7d9;
  }
`

export const StyledContainerApp = styled.div`
  display: flex;
  height: 100vh;
  margin-top: 1rem;
`

export const StyledTreeBlock = styled.div`
  background-color: rgb(244, 245, 247);
  padding: 3rem;
`
