import { useState } from 'react';
import { Button, Modal } from 'antd';
import { RiLayoutGridFill } from 'react-icons/ri';
import { MdTableRows } from 'react-icons/md';
import { IoSkullSharp } from 'react-icons/io5';

import { switchLayout } from '../../features/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import Logo from './Logo';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const layout = useAppSelector((state) => state.layout.value);

  const handleLayout = () => dispatch(switchLayout());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header-container">
      <Logo />
      <div className="nav-buttons-wrapper">
        <Button
          type="primary"
          danger
          icon={<IoSkullSharp className="icon" />}
          onClick={openModal}
        />
        <Button
          type="primary"
          className="btn-layout"
          icon={layout ? <RiLayoutGridFill className="icon" /> : <MdTableRows className="icon" />}
          onClick={handleLayout}
        />
      </div>
      <Modal
        title="Troubles Along the Way"
        open={isModalOpen}
        onCancel={closeModal}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <p>text text text</p>
      </Modal>
    </header>
  );
}

export default Header;
