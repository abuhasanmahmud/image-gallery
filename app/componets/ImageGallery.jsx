"use client";
import React from "react";
import { images } from "./../../utils/data";
import ImageList from "./ImageList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorderImages = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const ImageGallery = () => {
  const featureImg = images.find((img) => img.feature === true);
  const otherImage = images.filter((img) => img.feature !== true);
  //   console.log("feature", featureImg);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedImages = reorderImages(images, result.source.index, result.destination.index);
    // Update your state or API here with the updatedImages
    console.log("Updated images:", updatedImages);
  };
  return (
    <div>
      <p className="w-96 mx-auto my-4 text-2xl font-bold text-green-700">Image Gallery</p>
      {/* <div className="flex flex-row mx-3">
        <div className="basis-4/12 ">
          <img src={featureImg?.img} alt="" />
        </div>
        <div className="basis-8/12">
          <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {otherImage?.map((item) => (
              <div>
                <img src={item?.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <ImageList images={images} onDragEnd={onDragEnd} />
    </div>
  );
};

export default ImageGallery;
