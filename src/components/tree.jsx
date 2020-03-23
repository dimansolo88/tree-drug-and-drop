import React, { createContext, useState } from 'react'
import TreeData from './treeData'
import { StyledContainerApp, StyledTreeBlock } from './style'
const treeData = require('../treeData')
export const TreeContext = createContext({})

const Tree = () => {
  const [tree, setTree] = useState(treeData)



  const toggleOpenClose = item => {
    item.isOpen = !item.isOpen
    const newTree = {...tree}
    setTree(newTree)

  }



  const addChild = (parent, title) => {
    const newTree = Object.assign({}, tree)

    parent.children.push({
      [Date.now()]: {
        label: `New Item${Date.now()}`,
        children: [],
      },
    })

    setTree(newTree)
  }

  const funcs = {
    setTree,
    toggleOpenClose,
    addChild,
  }

  return (
    <TreeContext.Provider value={{ setTree, funcs }}>
      <StyledContainerApp>
        <StyledTreeBlock>
          <TreeData tree={tree} />
        </StyledTreeBlock>
      </StyledContainerApp>
    </TreeContext.Provider>
  )
}

export default Tree
