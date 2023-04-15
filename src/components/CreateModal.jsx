import React, { useState } from "react";
import Form from "./Form";

const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center w-full my-5 ">
      <div className="flex justify-center w-full">
        <button
          onClick={handleClose}
          className="p-5 font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-900 hover:to-emerald-900"
        >
          ADD SUPERHERO!!!
        </button>
      </div>
      <div className={`${isOpen ? " `flex`" : "hidden"} absolute`}>
        <Form handleClose={handleClose}></Form>
      </div>
    </div>
  );
};

export default CreateModal;
