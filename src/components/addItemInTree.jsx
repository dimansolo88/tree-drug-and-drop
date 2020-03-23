import React, { useContext, useState } from 'react'
import { TreeLine } from './style'
import { TreeContext } from './tree'
import PropTypes from 'prop-types'

const AddItem = ({ parent }) => {
  const { funcs } = useContext(TreeContext)

  const [editMOde, setEditMOde] = useState(false)
  const [value, setValue] = useState('')

  const toggleOpenCloseEditMOde = () => {
    setEditMOde(!editMOde)
    if (value) {
      funcs.addChild(parent, value)
      setValue('')
    }
  }

  const inputHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  return (
    <li>
      {editMOde ? (
        <input
          type="text"
          value={value}
          onChange={inputHandler}
          onBlur={toggleOpenCloseEditMOde}
        />
      ) : (
        <TreeLine onClick={toggleOpenCloseEditMOde}>+</TreeLine>
      )}
    </li>
  )
}

AddItem.propTypes = {
  parent: PropTypes.object,
}

export default AddItem
