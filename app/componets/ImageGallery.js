import React, { useState } from "react";
const ImageGallery = ({ images, onDelete }) => {
  const [sortCriteria, setSortCriteria] = useState("name"); // Initial sorting criteria
  const [sortedImages, setSortedImages] = useState([...images]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sorted = [...images];
    sorted.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortedImages(sorted);
  };

  const toggleSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const deleteSelectedImages = () => {
    const updatedImages = sortedImages.filter((_, index) => !selectedImages.includes(index));
    const Images = sortedImages.filter((_, index) => selectedImages.includes(index));
    console.log("updated image==", updatedImages, "now images", images);
    onDelete(updatedImages);
    setSelectedImages([]);
    setSortedImages(updatedImages);
  };

  return (
    <div className="image-gallery mx-12 ">
      <div className="flex justify-between">
        <div>
          <button
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={deleteSelectedImages}
            disabled={selectedImages.length === 0}
          >
            Delete Selected
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleSort("name")}
          >
            Sort by Name
          </button>
          <button
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleSort("date")}
          >
            Sort by Date
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4  py-6 mx-autu ">
        {sortedImages?.map((image, index) => (
          <div
            onClick={() => toggleSelection(index)}
            key={index}
            className={`image-item ${
              selectedImages.includes(index) ? "border-2 border-red-900 shadow" : ""
            }cursor-pointer `}
          >
            <img
              src={image.img}
              alt={image.name}
              className={`${
                index === 0
                  ? "border-4 border-pink-500 rounded-full h-60 w-72 animate-pulse "
                  : "w-48 h-48"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
