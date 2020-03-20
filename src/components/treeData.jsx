import React, {useMemo, useRef} from "react";
import TreeItem from "./treeItem";

const TreeData = ({ tree,  item }) => {
    const dragItem = useRef()
    const dragItemNode = useRef()
    const newTreeToArray = useMemo(() => tree.hasOwnProperty('root') ? [tree] : tree, [tree])


    return (
        <ul>
            {newTreeToArray.map(child => <TreeItem
                key={Object.keys(child)[0]} item={child} dragItem={dragItem} dragItemNode={dragItemNode} />)}
        </ul>
    );
}

export default TreeData