import React, { useState } from 'react';
import ProductImages from '../../mockdata/images';
import ProductModels from '../../mockdata/models';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const ModelTest = ({ src }) => {
  const [error, setError] = useState(null);
  const { scene } = useGLTF(src, '', setError);

  // If an error occurs during loading, display an error message
  if (error) {
    console.error('Error loading 3D model:', error);
    return <p>Error loading 3D model. Please try again later.</p>;
  }

  return <primitive object={scene} />;
};

const Catglass = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImages[0].url);
  const [selectedModel, setSelectedModel] = useState(ProductModels[0]);

  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className='flex justify-around h-screen mt-10'>
      <div className='border-1 w-1/3 h-[60vh]'>
        <img src={selectedImage} alt="Selected Image" />
        <div className='flex justify-center'>
          {ProductImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Image ${index}`}
              className={'w-10 h-10 border-black p-1 mx-1 border-2 rounded-full'}
              onMouseEnter={() => handleImageSelection(image.url)}
            />
          ))}
        </div>
      </div>
      <div className='border-1 w-1/3 h-[60vh]'>
        <Canvas>
          <OrbitControls />
          <Environment preset='studio' />
          <ModelTest src={selectedModel.src} />
        </Canvas>
        <div className='flex justify-center'>
          {ProductModels.map((model, index) => (
            <img
              key={index}
              src={model.img}
              className={'w-10 h-10 border-black p-1 mx-1 border-2 rounded-full'}
              onMouseEnter={() => handleModelSelection(model)}
            />
          ))}
        </div>
      </div>
      <div className='border-1 w-1/4 h-[60vh]'>
        <h1 className=' font-bold'>Price Details</h1>
        <button className=' bg-blue-500 text-white p-2 rounded-md'><a href='https://www.effeconsultancy.com/computer-glasses' target='blank'>Virtual TryOn</a></button>
      </div>
    </div>
  );
};

export default Catglass;
