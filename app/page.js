"use client";

import { images } from "@/utils/data";
import ImageGallery from "./componets/ImageGallery";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [allImages, setImages] = useState(images);

  const handleDelete = (updatedImages) => {
    setImages(updatedImages);
  };
  return (
    <>
      <ToastContainer />
      <div className="">
        <h2 className="text-center py-8 text-2xl font-bold text-green-500">Image Gallery</h2>

        <ImageGallery images={allImages} onDelete={handleDelete} />
      </div>
    </>
  );
}
