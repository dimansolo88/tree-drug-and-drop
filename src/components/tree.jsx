import React, { createContext, useState } from 'react'
import TreeData from './treeData'
import { StyledContainerApp, StyledTreeBlock } from './style'
export const treeData = require('../treeData')
export const TreeContext = createContext({})

const Tree = () => {
  const [tree, setTree] = useState(treeData)

  const toggleOpenClose = (item) => {
    item.isOpen = !item.isOpen
    const newTree = { ...tree }
    setTree(newTree)
  }

  const addChild = (parent, title) => {
    const newTree = Object.assign({}, tree)

    parent.children.push({
      [Date.now()]: {
        label: `${title} ${Date.now()}`,
        children: [],
      },
    })
    setTree(newTree)
  }

  // debugger
  // const nn = Object.assign({}, tree)
  // const b = nn
  //
  // debugger
  // console.log(nn)
  // setTree(nn)
  // Object.prototype.removeChild = function (value, objs) {
  //   if (!objs) { objs = [] }
  //
  //   for (var prop in this) {
  //     if (this.hasOwnProperty(prop)) {
  //       if (this[prop] === 'Parent 1') {
  //         return prop
  //       } else if (typeof this[prop] === 'object' && objs.indexOf(this[prop]) == -1) {
  //         objs.push(this[prop])
  //         var res = this[prop].removeChild('Parent 1', objs)
  //         if (res) { return prop + '.' + res }
  //       }
  //     }
  //   }
  // }

  const funcs = {
    setTree,
    toggleOpenClose,
    addChild,
    // removeChild,
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
