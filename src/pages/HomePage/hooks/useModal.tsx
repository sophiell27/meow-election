import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsopenModal] = useState(true);
  const toggleModal = () => {
    return setIsopenModal(!isOpenModal);
  };
  return {
    isOpenModal,
    toggleModal,
  };
};

export default useModal;
