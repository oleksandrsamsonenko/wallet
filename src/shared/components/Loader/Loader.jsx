import { ColorRing } from 'react-loader-spinner';
import style from './Loader.module.scss';

const Loader = (
  <div className={style.loader}>
    <ColorRing
      visible={true}
      height="250"
      width="250"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={[
        'rgba(36, 204, 167, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(36, 204, 167, 1)',
      ]}
    />
  </div>
);

export default Loader;
