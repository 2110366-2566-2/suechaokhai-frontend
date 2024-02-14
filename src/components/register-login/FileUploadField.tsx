// FileUploadField.tsx

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

type FileUploadProps = {
  label: string;
  minFileSize: number;
  maxFileSize: number;
};

const FileUploadField: React.FC<FileUploadProps> = ({
  label,
  minFileSize,
  maxFileSize,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSizeValid, setIsSizeValid] = useState(true);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const isSizeValid = file
      ? file.size >= minFileSize && file.size <= maxFileSize
      : true;

    if (isSizeValid) {
      setSelectedFile(file || null);
    } else {
      setSelectedFile(null);
      setIsSizeValid(false);
    }
  };

  return (
    <div className="my-4">
      <label className="flex h-[60px] w-[510px] cursor-pointer items-center justify-center rounded-[10px] border border border-[#B3B3B3] p-2">
        {!selectedFile && (
          <Image
            src="/img/UploadIcon.png"
            alt="Upload"
            width={32}
            height={30}
            style={{ maxHeight: "32px", maxWidth: "32px" }}
            className="pt-1.5"
          />
        )}
        {selectedFile && (
          <Image
            src="/img/FileIcon.png"
            alt="File"
            width={32}
            height={35}
            style={{ maxHeight: "35px", maxWidth: "32px" }}
            className="pt-1"
          />
        )}
        <span className={`px-2 pt-1.5 text-[18px] font-bold text-[#1983E4] `}>
          {selectedFile ? selectedFile.name : label}
        </span>
        <input
          type="file"
          accept=".png, .jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      {!isSizeValid && (
        <div className="mt-2 text-red-500">
          File size should be between {minFileSize / 1024} KB and{" "}
          {maxFileSize / 1024} KB.
        </div>
      )}
    </div>
  );
};

export default FileUploadField;
