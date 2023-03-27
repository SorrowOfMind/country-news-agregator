import { useState } from 'react';

const useModal = (initialValue: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialValue);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
