import React, {createContext, useCallback, useState} from "react";
import TreeData from "./treeData";
const treeData = require('../treeData')
export const TreeContext = createContext({})


const Tree = () => {
    const [tree, setTree] = useState(treeData);

    return (
        <TreeContext.Provider value={{setTree}}>
            <div>
                <h1> Tree </h1>
                <TreeData tree={tree}/>
            </div>
        </TreeContext.Provider>
    );
}

export default Tree


