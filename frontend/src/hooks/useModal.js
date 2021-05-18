import { useState } from 'react';
import Modal from '../components/Modal';

const useModal = (
  isOpen = false,
  title = '',
  bodyMessage = '',
  callBackFunction = (status) => {}
) => {
  const [modal, setModal] = useState({ isOpen, title, bodyMessage, callBackFunction });

  const toggle = () => {
    setModal({
      ...modal,
      isOpen: !modal.isOpen,
    });
  };

  const updateModal = (data) => {
    setModal({
      ...modal,
      ...data,
    });
  };

  const updateModalAndToggle = (data) => {
    setModal({
      ...modal,
      ...data,
      isOpen: !modal.isOpen,
    });
  };

  const ModalElement = () => {
    return (
      <Modal
        {...modal}
        callBackFunction={(status) => {
          if (modal?.callBackFunction) modal.callBackFunction(status);
          toggle();
        }}
      />
    );
  };

  return {
    toggle,
    updateModal,
    updateModalAndToggle,
    ModalElement,
  };
};

export default useModal;
