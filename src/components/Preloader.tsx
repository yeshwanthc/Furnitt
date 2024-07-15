import React from 'react';
import styles from '@/styles/Preloader.module.scss'; 

const Preloader = () => {
  return (
    <div className='flex justify-center items-center bg-black h-[100vh] text-white'>
    <div className={styles.loader}></div>
    </div>

  );
};

export default Preloader;
