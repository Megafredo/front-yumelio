//& Import SCSS
import './Cursor.scss';

//& Imports Modules
import { useSelector } from 'react-redux';
//& Imports Components

const Cursor = () => {
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);
  return (
    <>
      {mediaScreen === 'desktop' && (
        <>
        <div className="cursor outer"></div>
        <div className="cursor inner"></div>
        </>
      )}
    </>
  );
};

export default Cursor;
