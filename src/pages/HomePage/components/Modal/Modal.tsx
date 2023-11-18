import useModal from '../../hooks/useModal';

const Modal = () => {
  const { isOpenModal, toggleModal } = useModal();
  return (
    <div className='w-[250px] h-[250px] bg-yellow-500'>
      Modal
      <button onClick={toggleModal}>click</button>
      <p>{isOpenModal ? 't' : 'f'}</p>
    </div>
  );
};

export default Modal;
