import React, { useState } from 'react';
import ProductImages from '../../mockdata/images';
import ProductModels from '../../mockdata/models';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Md3DRotation } from "react-icons/md";


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

const Glass2 = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImages[0].url);
  const [selectedModel, setSelectedModel] = useState(ProductModels[0]);

  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };

  return (
    <div>
      <nav className=' bg-gradient-to-l from-[#DBDBF6] to-[#F1F1FE] w-full h-52'>
        <h2 className=' font-bold text-5xl text-gray-700 flex justify-center items-center h-full'>Product Details</h2>
      </nav>
    <section className=' md:flex justify-center mt-10'>
      <div className='sm:w-[100%] md:w-[40%] h-[60vh]'>
        <div className='h-[56vh] flex items-center bg-gray-50'>
          <img src={selectedImage} alt="Selected Image" />
        </div>
        <div className='flex justify-center my-2'>
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
      <div className='sm:w-[100%] md:w-[40%] h-[60vh] ml-10'>
        <h2 className=' text-3xl font-medium'>Glass2 Varients</h2>
      </div>
    </section>
    <div className=' flex justify-center my-20 text-3xl font-semibold'><Md3DRotation/><h1 className=' mx-2'>- 3d Model</h1></div>
    <div className='sm:w-[100%] md:w-[70%] h-[60vh] border-2 rounded-xl my-16 mx-auto'>
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
    </div>
  );
};

export default Glass2;
