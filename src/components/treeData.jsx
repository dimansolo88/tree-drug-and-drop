import React, {useRef} from "react";
import TreeItem from "./treeItem";
import AddItem from "./addItemInTree";

const TreeData = ({ tree,  item, }) => {
    const dragItem = useRef()
    const dragItemNode = useRef()
    const newTreeToArray =  tree.hasOwnProperty('root')
        ? [tree] : tree


    return (
        <ul>
            {newTreeToArray.map(child => <TreeItem
                key={Object.keys(child)[0]} item={child} dragItem={dragItem} dragItemNode={dragItemNode}
                 />)}


            {newTreeToArray[0]?.root?.label === 'Root' ? null : (
                <AddItem parent={item} />
            )}
        </ul>
    );
}

export default TreeData
