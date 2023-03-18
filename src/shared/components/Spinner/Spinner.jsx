import { Watch, ThreeDots } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';

export const SpinnerClock = () => {
  const isDesctopMin = useMediaQuery({ query: '(min-width: 1280px)' });
  const margin = isDesctopMin ? '100px' : '65px';

  return (
    <Watch
      height={isDesctopMin ? '120' : '70'}
      width={isDesctopMin ? '120' : '70'}
      radius="48"
      color="#ffffff"
      ariaLabel="watch-loading"
      wrapperStyle={{
        justifyContent: 'center',
        marginTop: margin,
      }}
      visible={true}
    />
  );
};

export const SpinnerDots = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#1976d2"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
