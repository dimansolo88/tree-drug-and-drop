import React, { useContext } from 'react'
import { TreeLine } from './style'
import { TreeContext } from './tree'
import PropTypes from 'prop-types'

const AddItem = ({ parent }) => {
  const { funcs } = useContext(TreeContext)
  return (
    <li>
      <TreeLine onClick={() => funcs.addChild(parent)}>+</TreeLine>
    </li>
  )
}

AddItem.propTypes = {
  parent: PropTypes.object,
}

export default AddItem
