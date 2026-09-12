import React from "react";

const DocumentCard = ({ data }) => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((document) => (
        <div
          key={document.id}
          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
       
          <div className="h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            {document?.type?.startsWith("image/") ? (
              <img
                src={document.blob}
                alt={document.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-5xl">📄</div>
            )}
          </div>

        
          <div className="mb-4">
            <h3
              className="font-semibold text-gray-800 truncate"
              title={document.name}
            >
              {document.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">{document.type}</p>

            <p className="text-xs text-gray-400 mt-1">
              {(document.size / 1024).toFixed(1)} KB
            </p>
          </div>

        
          <div className="flex gap-2">
            <a
              href={document.blob}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-700"
            >
              Open
            </a>

            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentCard;
