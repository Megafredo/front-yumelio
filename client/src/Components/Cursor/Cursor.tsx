//& Import SCSS
import './Cursor.scss';

//& Imports Modules
import { useSelector } from 'react-redux';

//& Types
import { RootState } from '../../Store';

const Cursor = () => {
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);
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
