import React, {useContext} from "react";
import {TreeLine} from "./style";
import {TreeContext} from "./tree";


const AddItem = ({ parent }) => {

    const {funcs} = useContext(TreeContext)
    console.log(`funcs  ${funcs}`)
    return (
        <li>
            <TreeLine onClick={() => funcs.addChild(parent)}>+</TreeLine>
        </li>
    );
}

export default AddItem
