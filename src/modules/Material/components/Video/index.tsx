import { useRef } from 'react';
// import classnames from 'classnames';
// import styles from '../../styles.module.scss';

type Props = {
  id: string;
  link: string;
  status: string;
  onFormatedTime: (event: any) => void;
  updateData: () => Promise<any>;
  updateStatus: (id: string) => Promise<any>;
};

const Video = ({
  id,
  link,
  status,
  onFormatedTime,
  updateData,
  updateStatus
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isStartPlaying = useRef<boolean>(false);
  // const [isShowIcon, setShowIcon] = useState<boolean>(true);
  // const classNameIcon = classnames(styles.material__play, {
  //   [styles.material__play_show]: isShowIcon
  // });

  const onViewVideo = async () => {
    // setShowIcon(false);
    if (status !== 'завершено' && !isStartPlaying.current) {
      isStartPlaying.current = true;
      await updateStatus(id);
      await updateData();
    }
  };

  return (
    <>
      {/* <svg
        className={classNameIcon}
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle opacity='0.5' cx='40' cy='40' r='40' fill='#8D8E91' />
        <path
          d='M53.2778 37.4019C55.2778 38.5566 55.2778 41.4433 53.2778 42.598L35.6112 52.7979C33.6112 53.9526 31.1112 52.5092 31.1112 50.1998V29.8001C31.1112 27.4907 33.6112 26.0473 35.6112 27.202L53.2778 37.4019Z'
          fill='white'
        />
      </svg> */}
      <video
        controls
        ref={videoRef}
        onPlay={onViewVideo}
        // onPause={() => setShowIcon(true)}
        onLoadedMetadata={onFormatedTime}
      >
        <source src={link} />
      </video>
    </>
  );
};

export default Video;
