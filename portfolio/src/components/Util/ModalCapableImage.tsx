import React, { useState } from "react";

type ModalCapableImageProps = {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
  image: string | undefined;
}

export const ModalCapableImage = ( { isOpen, setIsOpen, image }: ModalCapableImageProps ) => {
  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} flex flex-col top-0 right-0 left-0 justify-center items-center w-full h-full`}>
      <button className="absolute text-white top-0 right-0 pt-6 pr-6" onClick={() => setIsOpen(false)}>
        X
      </button>
      <img className="flex w-5/6 aspect-video rounded-md top-0 right-0 left-0 md:w-[800px]" src={image} alt={"Work Sample"} />
      <div className="fixed w-full h-full top-0 bg-black opacity-60 -z-10" onClick={() => setIsOpen(false)}/>
    </div>
  )
}