import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocument, removeDocument } from "../state/documentSlice";
import {useForm} from 'react-hook-form'

const useDocument = () => {

  const dispatch = useDispatch();
 const {register, handleSubmit,reset,formState:{errors}} = useForm()

  const data = useSelector((store) => store.document.document
  );

  
  


 

function createDocument(data) {
  const file = data.document[0];

  const reader = new FileReader();

  reader.onload = () => {
    const documentData = {
      id: crypto.randomUUID(),
      name: file.name,
      type: file.type,
      size: file.size,
      blob: reader.result,
    };

    dispatch(addDocument(documentData));
    reset();
  };

  reader.readAsDataURL(file);
}


  function deleteDocument(id){
    dispatch(removeDocument(id))
  }

  return { data, createDocument, deleteDocument, register, handleSubmit };
};

export default useDocument;
