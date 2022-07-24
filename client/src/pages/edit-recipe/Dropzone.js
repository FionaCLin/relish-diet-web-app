import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
function UploadImage() {
  // Extract an Base64 Image's File Extension
  function extractImageFileExtensionFromBase64(base64Data) {
    return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'));
  }
  const imageMaxSize = 1000000000; // bytes
  const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
  const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
  const [files, setFiles] = useState([]);
  const verifyFile = (files) => {
    if (files && files.length > 0){
        const currentFile = files[0]
        const currentFileType = currentFile.type
        const currentFileSize = currentFile.size
        if(currentFileSize > imageMaxSize) {
            alert("This file is not allowed. " + currentFileSize + " bytes is too large")
            return false
        }
        if (!acceptedFileTypesArray.includes(currentFileType)){
            alert("This file is not allowed. Only images are allowed.")
            return false
        }
        return true
    }
  }
  const handleOnDrop = (files, rejectedFiles) => {
    console.log(files);
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          'load',
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            /* this.setState({
              imgSrc: myResult,
              imgSrcExt: extractImageFileExtensionFromBase64(myResult),
            }); */
          },
          false,
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };
  return (
    <Dropzone className='dropzone'
      onDrop={handleOnDrop}
      accept={acceptedFileTypes}
      multiple={false}
      maxSize={imageMaxSize}
    >
      <p>Drop image here or click to upload</p>
    </Dropzone>
  );
}
export default UploadImage;
