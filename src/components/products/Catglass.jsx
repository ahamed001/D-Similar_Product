import React, { useState } from 'react';
import ProductImages from '../../mockdata/images';

const Catglass = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImages[0].url);

  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className='flex justify-around h-screen mt-10'>
      <div className='border-1 w-1/3 h-[60vh]'>
      <img src={selectedImage} alt="Selected Image" />
      <div className=' flex justify-center'>
        {ProductImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className= ' w-10 h-10 border-black p-1 mx-1 border-2 rounded-full'
            onMouseEnter={() => handleImageSelection(image.url)}
          />
        ))}
        </div>
      </div>
      <div className='border-1 w-1/3 h-[60vh]'>
       2
      </div>
      <div className='border-1 w-1/4 h-[60vh]'>3</div>
    </div>
  );
};

export default Catglass;
