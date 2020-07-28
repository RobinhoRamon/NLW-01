import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const DropZone = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <>
          <img src={selectedFileUrl} alt="estabelecimento" />
          <span>
            Caso queira alterar basta clicar ou arrastar uma nova foto{" "}
          </span>
        </>
      ) : isDragActive ? (
        <p>
          <FiUpload /> Solte os Arquivos aqui
        </p>
      ) : (
        <p>
          <FiUpload />
          Clique ou arraste uma foto para adicionar a imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default DropZone;
