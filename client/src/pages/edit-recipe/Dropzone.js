import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
function UploadImage(props) {
  return (
    <Dropzone className='dropzone'
      onDrop={props.handleOnDrop}
      accept={props.acceptedFileTypes}
      multiple={true}
      maxSize={props.imageMaxSize}
    >
      <p>Drop image here or click to upload</p>
    </Dropzone>
  );
}
export default UploadImage;
