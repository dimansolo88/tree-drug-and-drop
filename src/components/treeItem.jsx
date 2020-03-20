import TreeData from "./treeData";
import React, {useContext} from "react";
import {TreeLine} from "./style";
import {TreeContext} from "./tree";
import {findItem, changeItem} from "../utils/utils";

const TreeItem = ({ item , dragItem, dragItemNode }) => {
    const {setTree} = useContext(TreeContext)


    const dragStartHandler = (event, item) => {

        dragItemNode.current = event.target
        dragItemNode.current.addEventListener("dragend", dragEndHandler);
        dragItem.current = item;
    };

    const dragEndHandler = event => {
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', dragEndHandler)
        dragItemNode.current = null;
    }

    const handleDragEnter = event => {

        if (dragItemNode.current !== event.target && dragItemNode.current) {

            const elementWillChange = event.target.innerText;
            const currentElement = dragItemNode.current.innerText;

            setTree(tree => {
                const changed = findItem(tree, elementWillChange);
                const current = findItem(tree, currentElement);
                changeItem(tree, elementWillChange, current.res)
                return Object.assign({}, changeItem(tree, currentElement, changed.res));

            });


        }
    };


    const parent = Object.keys(item)[0];
    return (
        <li>
            <TreeLine
                draggable
                onDragStart={e => dragStartHandler(e, parent)}
                onDragEnter={e => handleDragEnter(e, parent)}
            >
                {item[parent].label}
            </TreeLine>
            {item[parent].children && (
                <TreeData item={item[parent]} tree={item[parent].children}  />
            )}
        </li>
    )
}

export default TreeItem