import TreeData from './treeData'
import React, { useContext } from 'react'
import { TreeLine } from './style'
import { TreeContext } from './tree'
import { findItem, changeItem } from '../utils/utils'
import PropTypes from 'prop-types'

const TreeItem = ({ item, dragItem, dragItemNode }) => {
  const [parent, isOpen] = Object.keys(item)


  const { setTree, funcs } = useContext(TreeContext)
  // const [currentLabel, setCurrentLabel] = useState('')

  const dragStartHandler = (event, item) => {
    dragItemNode.current = event.target
    dragItemNode.current.addEventListener('dragend', dragEndHandler)
    dragItem.current = item
    // event.dataTransfer.setData('label',item.label )
    // setCurrentLabel(item.label)
  }

  const dragEndHandler = event => {
    dragItem.current = null
    dragItemNode.current.removeEventListener('dragend', dragEndHandler)
    dragItemNode.current = null
  }

  const handleDragEnter = event => {
    if (dragItemNode.current !== event.target && dragItemNode.current) {
      const elementWillChange = event.target.innerText
      const currentElement = dragItemNode.current.innerText

      setTree(tree => {
        const changed = findItem(tree, elementWillChange)
        const current = findItem(tree, currentElement)
        changeItem(tree, elementWillChange, current.res)
        return Object.assign({}, changeItem(tree, currentElement, changed.res))
      })
    }
  }

  return (
    <li>
      <TreeLine
        draggable
        onDragStart={e => dragStartHandler(e, parent)}
        onDragEnter={e => handleDragEnter(e, parent)}
        onClick={() => funcs.toggleOpenClose(item)}

      >
         {item[parent].label}
      </TreeLine>
      {item[parent].children && !item[isOpen] && (
        <TreeData item={item[parent]} tree={item[parent].children} />
      )}
    </li>
  )
}

TreeItem.propTypes = {
  item: PropTypes.object,
  dragItem: PropTypes.object,
  dragItemNode: PropTypes.object,
}

export default TreeItem
