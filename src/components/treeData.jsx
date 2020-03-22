import React, { useRef } from 'react'
import TreeItem from './treeItem'
import AddItem from './addItemInTree'
import PropTypes from 'prop-types'

const TreeData = ({ tree, item }) => {
  const dragItem = useRef()
  const dragItemNode = useRef()
  const newTreeToArray = tree.hasOwnProperty('root') ? [tree] : tree

  return (
    <ul>
      {newTreeToArray.map(child => (
        <TreeItem
          key={Object.keys(child)[0]}
          item={child}
          dragItem={dragItem}
          dragItemNode={dragItemNode} />
      ))}

      {newTreeToArray[0]?.root?.label === 'Root' ? null : (
        <AddItem parent={item} />
      )}
    </ul>
  )
}

TreeData.propTypes = {
  tree: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      root: PropTypes.shape({
        label: PropTypes.string.isRequired,
        children: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  ]),
  item: PropTypes.object,

}

export default TreeData
