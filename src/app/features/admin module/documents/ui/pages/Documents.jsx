// import useDocument from "../../hooks/useDocument";

import useDocument from "../../hooks/useDocument";
import DocumentCard from "../components/DocumentCard";
import DocumentHeader from "../components/DocumentHeader";

const Documents = () => {
  const { data, createDocument, deleteDocument, register, handleSubmit } = useDocument();

  return (
    <div className="flex flex-col p-1 ">
      <DocumentHeader
        register={register}
        handleSubmit={handleSubmit}
        createDocument={createDocument}
      />
      <DocumentCard data={data} />
    </div>
  );
};

export default Documents;
