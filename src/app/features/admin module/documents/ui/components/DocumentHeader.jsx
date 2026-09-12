import React from 'react'

const DocumentHeader = ({ register, handleSubmit, createDocument }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold"> Documents</h2>

      <form onSubmit={handleSubmit(createDocument)} className="flex gap-2 justify-center items-center ">
        <label
          htmlFor="file"
          className="cursor-pointer bg-(--text-third) px-2 py-1 rounded"
        >
          Select Document
        </label>

        <input
          {...register("document", { required: "select document" })}
          id="file"
          type="file"
          className="hidden"
        />
        <button className="bg-(--text-four) rounded px-2 py-1 ">add</button>
      </form>
    </div>
  );
};

export default DocumentHeader