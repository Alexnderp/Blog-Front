import React from "react";
import Popup from "reactjs-popup";
import FormPost from "../FormPost/FormPost";
import { Note } from "@phosphor-icons/react";

function ModalPost() {
  return (
    <>
      <Popup trigger={<Note
              alt="Nova Postagem"
              className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"
            />} modal>
        <div>
          <FormPost />
        </div>
      </Popup>
    </>
  );
}

export default ModalPost;
