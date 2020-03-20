import React from "react";
import {TreeLine} from "./style";


const AddItem =({ parent, funcs }) => {
    return (
        <li>
            <TreeLine onClick={() => funcs.addChild(parent)}>+</TreeLine>
        </li>
    );
}

export default AddItem