import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalMenu({
  isOpen,
  setOpen,
}: Props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-white">
      <div className="flex justify-end">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
      </div>
      <div>
        <div className="flex flex-col items-center justify-between h-[30vh]">
          <Link to="/">
            <button onClick={() => setOpen(!isOpen)}>Home</button>
          </Link>
          <Link to="/events">
            <button onClick={() => setOpen(!isOpen)}>Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
}