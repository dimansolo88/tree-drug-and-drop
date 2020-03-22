import React, {createContext,useState} from "react";
import TreeData from "./treeData";
import {StyledContainerApp, StyledTreeBlock} from "./style";
const treeData = require('../treeData')
export const TreeContext = createContext({})


const Tree = () => {
    const [tree, setTree] = useState(treeData);

    const toggleOpen = item => {
        item.isOpen = !item.isOpen
        const newTree = Object.assign({}, tree)

        setTree(newTree)
    }

    const makeParent = item => {
        // console.log(item)
        const newTree = Object.assign({}, tree)
        item.children = []
        setTree(newTree)
    }

    const addChild = parent => {
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
        toggleOpen,
        makeParent,
        addChild
    }

    return (
        <TreeContext.Provider value={{setTree, funcs}}>
            <StyledContainerApp>
                <StyledTreeBlock>
                    <TreeData tree={tree} />
                </StyledTreeBlock>

            </StyledContainerApp>
        </TreeContext.Provider>
    );
}

export default Tree


