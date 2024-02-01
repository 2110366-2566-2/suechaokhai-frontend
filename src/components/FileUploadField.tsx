// FileUploadField.tsx

import React, { useState, ChangeEvent } from 'react';
import Image from "next/image";

const FileUploadField: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="my-4">
       <label className="border p-2 cursor-pointer rounded-[10px] flex item-center justify-center w-[510px]  h-[60px] border border-[#B3B3B3]">
       {!selectedFile && <Image
          src="/img/UploadIcon.png"
          alt="Upload"
          width={32}
          height={30}
          style={{ maxHeight: '32px', maxWidth: '32px' }}
          className="pt-1.5"
        ></Image>}
        {selectedFile && <Image
          src="/img/FileIcon.png"
          alt="File"
          width={32}
          height={35}
          style={{ maxHeight: '35px', maxWidth: '32px' }}
          className="pt-1"
        ></Image>}
            <span className="text-[#1983E4] text-[18px] font-bold px-2 pt-1.5">
                {selectedFile ? selectedFile.name : 'Upload your valid ID card'} 
            </span>
        <input
          type="file"
          accept=".png, .jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUploadField;
