import {FC, useState, ChangeEvent} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface UserModalProps {
  username: string;
  setUserName: (userName: string) => void;
}

const UserModal: FC<UserModalProps> = ({username, setUserName}) => {
  const [show, setShow] = useState(!username);
  const [name, setName] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onClick = () => {
    setUserName(name);
    setShow(false);
  };

  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Как вас зовут</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input name="user" type={'text'} placeholder="Введите ваше имя" onChange={onChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={!name} onClick={onClick}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
