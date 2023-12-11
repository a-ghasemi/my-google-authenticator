import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItem = ({ id, index, children }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    );
};

export default DraggableItem;
