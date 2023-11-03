"use client";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";

const ImageList = ({ images, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="image-list" direction="horizontal">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Image src={image.img} alt={`Image ${image.id}`} width={200} height={200} />
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageList;
