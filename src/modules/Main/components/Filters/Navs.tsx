﻿import styles from './styles.module.scss';

const Navs = () => {
  return (
    <div className={styles.filters__navs}>
      <button className={styles.filters__nav} type='button'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 31.0001C24.2843 31.0001 31 24.2844 31 16.0001C31 7.71585 24.2843 1.00012 16 1.00012C7.71573 1.00012 1 7.71585 1 16.0001C1 24.2844 7.71573 31.0001 16 31.0001Z'
            fill='white'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.2818 10.665L14.8933 11.1921C13.9658 10.5941 12.8694 10.2494 11.7054 10.2461L11.5466 8.05325C11.5213 7.63597 11.1513 7.32344 10.7357 7.36905C10.3201 7.41466 10.0245 7.79815 10.0887 8.21205L10.4198 10.3221C9.28285 10.5772 8.28105 11.1516 7.50394 11.9405L5.89396 10.513C5.73347 10.3694 5.52567 10.3119 5.32802 10.3322C5.14219 10.3525 4.96311 10.4437 4.83641 10.6025C4.57286 10.9286 4.63706 11.4084 4.97494 11.655L6.71838 12.9271C6.1254 13.858 5.78753 14.9577 5.79091 16.12L3.63526 16.2501C3.62343 16.2501 3.61161 16.2501 3.59978 16.2535C3.1994 16.2974 2.90714 16.6573 2.94937 17.061C2.99498 17.4766 3.37847 17.7722 3.79237 17.7064L5.92606 17.3719C6.17102 18.5105 6.73696 19.5123 7.51745 20.2945L6.09162 21.8977V21.9011C5.94464 22.0616 5.88551 22.2677 5.90578 22.4653C5.92437 22.6529 6.01391 22.8319 6.17271 22.9586C6.49707 23.2239 6.97685 23.1631 7.22519 22.8269L8.50743 21.0919C8.73381 21.2389 8.97201 21.3689 9.21697 21.4838V20.3114C9.18656 20.2928 9.15446 20.2759 9.12405 20.2573L9.21697 20.1323V19.0511C9.21697 17.8533 9.94847 16.7755 11.0635 16.3346L14.4692 14.9848L14.6399 14.7804C14.503 14.4898 14.324 14.2246 14.1128 13.9897L15.1957 12.7683C15.4119 12.9913 15.6062 13.2346 15.7785 13.4964L15.9306 13.412M14.2783 12.03L13.3086 13.3444C12.8728 13.0944 12.3761 12.9423 11.8524 12.9153L11.7629 11.2867C12.6768 11.3002 13.5401 11.5688 14.2767 12.0317L14.2783 12.03ZM10.609 11.4033L10.8523 13.0166C10.3421 13.1501 9.88765 13.4001 9.51092 13.7346L8.29626 12.645C8.92471 12.0419 9.71702 11.6026 10.6107 11.4033H10.609ZM7.55969 13.5387L8.87909 14.5016C8.63075 14.9392 8.48209 15.4358 8.45844 15.9595L6.82987 16.0575C6.83832 15.1436 7.10355 14.2786 7.55969 13.5387ZM8.20841 19.5191C7.60192 18.894 7.15761 18.1034 6.95489 17.2114L8.56656 16.9597C8.70171 17.4682 8.95511 17.9226 9.29299 18.2976L8.2101 19.5191H8.20841Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.0109 7.77446C21.2238 8.27452 21.2964 8.86242 21.168 9.52128L21.6664 10.3981C21.8488 10.719 21.6174 11.1194 21.2474 11.1194H21.0599V12.6517C21.0599 13.0909 20.6764 13.4305 20.2405 13.3781L19.5716 13.297V14.7702L19.5682 14.7752C19.0715 14.9425 18.5393 15.0337 17.9852 15.0337C17.2453 15.0337 16.5425 14.8715 15.9124 14.581L15.9073 14.5691V11.4843C15.9073 11.4843 13.7297 9.41654 15.4714 7.09364C16.6118 5.57151 18.8181 5.60192 20.1459 6.65778'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.6357 19.7657L18.0748 16.4782L18.3941 16.1335L17.9396 15.3632H17.5629L17.0713 16.1335L17.3923 16.4782L16.8416 19.7015'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.2063 10.8796V10.2917C16.2063 9.87442 16.5441 9.53654 16.9614 9.53654H17.1152C17.1929 9.53654 17.2554 9.59905 17.2554 9.67676C17.2554 9.9403 17.4682 10.1532 17.7318 10.1532V8.78308C17.7318 8.68847 17.7267 8.59387 17.7149 8.50095L17.6152 7.69512C17.5899 7.49408 17.7706 7.32852 17.9683 7.36907L18.3501 7.44847C18.617 7.50422 18.889 7.52618 19.161 7.51266L20.5733 7.44847C21.097 7.42482 21.5481 7.06836 21.6917 6.56492L21.7998 6.18988L21.6342 6.21184C20.901 6.30814 20.1543 6.1865 19.4904 5.86214L19.1559 5.69996C19.1559 5.69996 19.1441 5.69489 19.1373 5.69151C18.3332 5.30633 17.3939 5.31816 16.5796 5.68307L16.0981 5.89931'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.21729 21.4839V24.937'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.0292 13.7954L17.7705 23.4722L21.4263 17.7604L21.0124 16.321L21.5209 15.9612L21.0226 14.983L20.0292 13.7954Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.0227 14.9832L22.783 15.6809'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.4612 13.7954L17.7216 23.4722L14.0658 17.7604L14.478 16.321L13.9712 15.9612L14.4679 14.983L15.4612 13.7954Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24.9334 19.2048C24.7797 19.0342 24.4993 18.9565 24.4993 18.6743C24.4993 18.2858 25.0314 18.2858 25.0314 17.8955C25.0314 17.5053 24.4993 17.5053 24.4993 17.1167C24.4993 16.7282 25.0314 16.7282 25.0314 16.3379C25.0314 15.9477 24.4993 15.9477 24.4993 15.5591C24.4993 15.1706 25.0314 15.1706 25.0314 14.7803C25.0314 14.3901 24.4993 14.3901 24.4993 14.0015C24.4993 13.613 25.0314 13.6113 25.0314 13.221C25.0314 12.8308 24.4993 12.8308 24.4993 12.4405L24.2222 11.3019C24.1969 11.1972 24.104 11.1245 23.9958 11.1245C23.9333 11.1245 23.8725 11.1499 23.8286 11.1955L23.0751 11.9692C22.8876 12.1618 22.7829 12.4203 22.7829 12.6906V19.2589C21.526 19.7251 20.6289 20.933 20.6289 22.3521C20.6289 24.1767 22.1071 25.6549 23.9316 25.6549C25.7562 25.6549 27.2344 24.1767 27.2344 22.3521C27.2344 20.8773 26.2681 19.6305 24.9351 19.2065L24.9334 19.2048ZM23.9316 24.7815C23.4502 24.7815 23.0599 24.3912 23.0599 23.9097C23.0599 23.4283 23.4502 23.038 23.9316 23.038C24.4131 23.038 24.8034 23.4283 24.8034 23.9097C24.8034 24.3912 24.4131 24.7815 23.9316 24.7815Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        руководителям
      </button>
      <button
        className={`${styles.filters__nav} ${styles.filters__nav_active}`}
        type='button'
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 31.0001C24.2843 31.0001 31 24.2844 31 16.0001C31 7.71585 24.2843 1.00012 16 1.00012C7.71573 1.00012 1 7.71585 1 16.0001C1 24.2844 7.71573 31.0001 16 31.0001Z'
            fill='white'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.5703 20.6764C26.5703 20.0074 26.028 19.4651 25.359 19.4651C24.69 19.4651 24.1477 20.0074 24.1477 20.6764C24.1477 21.3454 24.69 21.8877 25.359 21.8877C26.028 21.8877 26.5703 21.3454 26.5703 20.6764Z'
            fill='white'
          />
          <path
            d='M16.208 13.7903L16.9446 13.5302'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0596 10.0264L18.3772 11.0299H17.5038C16.9328 11.0299 16.4243 10.6633 16.2469 10.1194C16.0104 9.39799 15.9901 8.62257 16.1895 7.89107L16.2013 7.84714C16.4987 6.75918 17.4869 6.00403 18.6154 6.00403H19.1239C20.516 6.00403 21.5617 7.27782 21.2897 8.64284L21.783 9.6666C21.827 9.75614 21.8253 9.86088 21.783 9.94873C21.729 10.0585 21.6175 10.1278 21.4941 10.1278H21.4773V11.4371C21.4773 11.7158 21.2086 11.9169 20.94 11.8375L20.1494 11.6043V12.9676C19.4466 13.4153 18.5563 13.4457 17.8265 13.0454L17.6846 12.9676V11.0299'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.237 8.81515V8.73237C18.237 8.54485 18.0849 8.39111 17.8957 8.39111C17.7082 8.39111 17.5544 8.54316 17.5544 8.73237V9.69531'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.2371 8.5702L18.7912 8.23908C19.2085 7.99074 19.3808 7.47379 19.1983 7.02441L19.2034 7.02948C19.7778 7.58867 20.5262 7.93837 21.3236 8.02115'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.5561 12.895L16.7942 13.4289L18.1305 14.5084C18.3332 14.6722 18.6373 14.576 18.7083 14.3242L18.9988 13.4593'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.999 13.461L19.3082 14.3158C19.3859 14.5675 19.6984 14.657 19.8961 14.4813L21.0888 13.4289L20.3252 12.895'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M23.2968 16.5729L22.9386 16.7351C22.8018 16.7976 22.6413 16.7351 22.5805 16.5999L22.224 15.8127C22.1615 15.6758 22.224 15.5154 22.3592 15.4545L22.7173 15.2924'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M29.2941 13.0049C28.4984 11.253 26.434 10.4759 24.6804 11.2716C22.9285 12.0673 22.1514 14.1317 22.9471 15.8853C23.7428 17.6372 25.8073 18.4143 27.5608 17.6186C29.3127 16.8229 30.0898 14.7585 29.2941 13.0049ZM23.5688 15.6032C22.9285 14.1942 23.5536 12.5336 24.9626 11.8933C26.3715 11.253 28.0322 11.8781 28.6724 13.287C29.3127 14.696 28.6876 16.3566 27.2787 16.9969C25.8698 17.6372 24.2091 17.0121 23.5688 15.6032Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M22.5991 16.6421L19.5988 18.5275C19.1173 18.8299 18.4787 18.639 18.2422 18.1203C18.0074 17.6017 18.2828 16.9952 18.8284 16.8313L22.2241 15.8143'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.1146 16.4174C25.6247 16.4056 25.1517 16.2079 24.7986 15.8633'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.8445 12.667C27.3057 12.8427 27.701 13.1924 27.9223 13.6789C28.0879 14.0438 28.1318 14.4341 28.0693 14.8024'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.223 15.6116H16.0777V16.7756C16.0777 17.1084 15.7804 17.3669 15.4442 17.3263L14.9273 17.2638V18.3822L14.9239 18.3856C14.5387 18.5123 14.1282 18.5816 13.6991 18.5816C13.1264 18.5816 12.5841 18.4582 12.0959 18.2369L12.0908 18.2268V15.8836C12.0908 15.8836 10.4065 14.3125 11.7546 12.5488C13.1619 10.7057 16.6673 11.8595 16.1622 14.3953L16.5474 15.0609C16.6893 15.3058 16.5085 15.6082 16.223 15.6082V15.6116Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.6599 17.9801L11.9775 27.7717L10.2527 21.173L11.0247 19.7066L10.6615 19.5631L10.6852 18.6542L11.6599 17.9801Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.6581 18.7471L8.02601 19.6526C7.93479 19.6847 7.84694 19.7286 7.77261 19.7894C7.59522 19.9398 7.49048 20.1577 7.49048 20.3942V24.4893'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.8729 25.8797C16.6949 25.8797 17.3612 25.2254 17.3612 24.4183C17.3612 23.6113 16.6949 22.957 15.8729 22.957C15.0509 22.957 14.3845 23.6113 14.3845 24.4183C14.3845 25.2254 15.0509 25.8797 15.8729 25.8797Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.3394 25.3273C16.6739 25.1601 16.9019 24.8188 16.9019 24.4252'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.2987 23.5872C15.025 23.7696 14.8442 24.0771 14.8442 24.4251C14.8442 24.6853 14.9439 24.9235 15.1095 25.1025'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.4429 25.8797C22.2649 25.8797 22.9313 25.2254 22.9313 24.4183C22.9313 23.6113 22.2649 22.957 21.4429 22.957C20.6209 22.957 19.9546 23.6113 19.9546 24.4183C19.9546 25.2254 20.6209 25.8797 21.4429 25.8797Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.9092 25.3273C22.2437 25.1601 22.4717 24.8188 22.4717 24.4252'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.8685 23.5872C20.5948 23.7696 20.4141 24.0771 20.4141 24.4251C20.4141 24.6853 20.5137 24.9235 20.6793 25.1025'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0911 22.7932C17.8849 22.0988 17.2312 21.5903 16.4574 21.5903C15.9422 21.5903 15.481 21.815 15.1701 22.1698L14.3879 22.9959C14.023 23.3625 13.7983 23.8642 13.7983 24.4184C13.7983 25.5435 14.7275 26.4557 15.8729 26.4557C16.9406 26.4557 17.8224 25.6584 17.9373 24.6397'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.6386 24.6498C18.8504 24.6498 19.0221 24.4812 19.0221 24.2731C19.0221 24.065 18.8504 23.8964 18.6386 23.8964C18.4268 23.8964 18.2551 24.065 18.2551 24.2731C18.2551 24.4812 18.4268 24.6498 18.6386 24.6498Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.6385 25.0519C19.077 25.0519 19.4325 24.7032 19.4325 24.2731C19.4325 23.8429 19.077 23.4943 18.6385 23.4943C18.2 23.4943 17.8445 23.8429 17.8445 24.2731C17.8445 24.7032 18.2 25.0519 18.6385 25.0519Z'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.1791 22.8101C19.1791 22.5179 18.9375 22.2797 18.6385 22.2797C18.3395 22.2797 18.0979 22.5179 18.0979 22.8101'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.113 21.6241L16.9696 21.0565C17.0709 20.9889 17.1909 20.9501 17.3193 20.9501C17.6656 20.9501 17.9477 21.2254 17.9477 21.5667C17.9477 21.587 17.9477 21.6056 17.9443 21.6241C17.9443 21.6258 17.8784 22.3404 17.8784 22.3404'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.179 22.7932C19.3851 22.0988 20.0388 21.5903 20.8126 21.5903C21.3278 21.5903 21.789 21.815 22.0999 22.1698L22.8821 22.9959C23.247 23.3625 23.4717 23.8642 23.4717 24.4184C23.4717 25.5435 22.5425 26.4557 21.3971 26.4557C20.3294 26.4557 19.4476 25.6584 19.3327 24.6397'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.392 22.3404C19.392 22.3404 19.3261 21.6258 19.3261 21.6241C19.3244 21.6056 19.3228 21.587 19.3228 21.5667C19.3228 21.2254 19.6032 20.9501 19.9512 20.9501C20.0813 20.9501 20.2012 20.9889 20.3009 21.0565L21.1574 21.6241'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='17.9441' cy='21.6241' r='0.084469' fill='#00324B' />
          <path
            d='M15.51 8.29655C15.4475 8.25432 15.3833 8.21209 15.3191 8.17154C14.9981 7.96882 14.6552 7.7965 14.2953 7.65459C14.1298 7.59039 14.025 7.42653 14.0318 7.24914L14.0656 6.36559C14.074 6.14598 13.9118 5.95676 13.6939 5.93142L12.1549 5.75235C11.937 5.72701 11.7359 5.87399 11.6937 6.08854L11.5231 6.95519C11.4893 7.12919 11.3491 7.26434 11.1734 7.28968C10.6091 7.36909 10.0668 7.5262 9.55831 7.75089C9.39444 7.82353 9.20523 7.78298 9.08359 7.65121L8.50582 7.02783C8.35716 6.86734 8.10882 6.84707 7.9365 6.98391L6.72184 7.94516C6.54952 8.082 6.51067 8.32696 6.63399 8.50942L7.11209 9.22065C7.21176 9.36762 7.20669 9.5619 7.10026 9.70381C6.76238 10.1532 6.48364 10.6532 6.27753 11.1905C6.21334 11.3577 6.04947 11.4641 5.87039 11.4574L5.0426 11.4253C4.82298 11.4168 4.63377 11.579 4.60843 11.7969L4.42935 13.336C4.40401 13.5539 4.55099 13.7549 4.76554 13.7972L5.60178 13.961C5.77579 13.9948 5.90925 14.1334 5.93459 14.3091C6.01906 14.8784 6.18124 15.4274 6.41268 15.9393C6.48702 16.1032 6.44647 16.2958 6.3147 16.4174L5.70314 16.985C5.54265 17.1337 5.52238 17.382 5.65922 17.5544L6.62048 18.769C6.75732 18.9413 7.00228 18.9802 7.18473 18.8569L7.91116 18.3703M8.2558 16.3143C5.17437 11.0063 11.2916 6.16625 15.7482 10.3863'
            stroke='#00324B'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Рекрутерам
      </button>
      <button className={styles.filters__nav} type='button'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 31.0001C24.2843 31.0001 31 24.2844 31 16.0001C31 7.71585 24.2843 1.00012 16 1.00012C7.71573 1.00012 1 7.71585 1 16.0001C1 24.2844 7.71573 31.0001 16 31.0001Z'
            fill='white'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.5703 20.6764C26.5703 20.0074 26.028 19.4651 25.359 19.4651C24.69 19.4651 24.1477 20.0074 24.1477 20.6764C24.1477 21.3454 24.69 21.8877 25.359 21.8877C26.028 21.8877 26.5703 21.3454 26.5703 20.6764Z'
            fill='white'
          />
          <path
            d='M16.208 13.7903L16.9446 13.5302'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0596 10.0264L18.3772 11.0299H17.5038C16.9328 11.0299 16.4243 10.6633 16.2469 10.1194C16.0104 9.39799 15.9901 8.62257 16.1895 7.89107L16.2013 7.84714C16.4987 6.75918 17.4869 6.00403 18.6154 6.00403H19.1239C20.516 6.00403 21.5617 7.27782 21.2897 8.64284L21.783 9.6666C21.827 9.75614 21.8253 9.86088 21.783 9.94873C21.729 10.0585 21.6175 10.1278 21.4941 10.1278H21.4773V11.4371C21.4773 11.7158 21.2086 11.9169 20.94 11.8375L20.1494 11.6043V12.9676C19.4466 13.4153 18.5563 13.4457 17.8265 13.0454L17.6846 12.9676V11.0299'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.237 8.81515V8.73237C18.237 8.54485 18.0849 8.39111 17.8957 8.39111C17.7082 8.39111 17.5544 8.54316 17.5544 8.73237V9.69531'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.2371 8.5702L18.7912 8.23908C19.2085 7.99074 19.3808 7.47379 19.1983 7.02441L19.2034 7.02948C19.7778 7.58867 20.5262 7.93837 21.3236 8.02115'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.5561 12.895L16.7942 13.4289L18.1305 14.5084C18.3332 14.6722 18.6373 14.576 18.7083 14.3242L18.9988 13.4593'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.999 13.461L19.3082 14.3158C19.3859 14.5675 19.6984 14.657 19.8961 14.4813L21.0888 13.4289L20.3252 12.895'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M23.2968 16.5729L22.9386 16.7351C22.8018 16.7976 22.6413 16.7351 22.5805 16.5999L22.224 15.8127C22.1615 15.6758 22.224 15.5154 22.3592 15.4545L22.7173 15.2924'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M29.2941 13.0049C28.4984 11.253 26.434 10.4759 24.6804 11.2716C22.9285 12.0673 22.1514 14.1317 22.9471 15.8853C23.7428 17.6372 25.8073 18.4143 27.5608 17.6186C29.3127 16.8229 30.0898 14.7585 29.2941 13.0049ZM23.5688 15.6032C22.9285 14.1942 23.5536 12.5336 24.9626 11.8933C26.3715 11.253 28.0322 11.8781 28.6724 13.287C29.3127 14.696 28.6876 16.3566 27.2787 16.9969C25.8698 17.6372 24.2091 17.0121 23.5688 15.6032Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M22.5991 16.6421L19.5988 18.5275C19.1173 18.8299 18.4787 18.639 18.2422 18.1203C18.0074 17.6017 18.2828 16.9952 18.8284 16.8313L22.2241 15.8143'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.1146 16.4174C25.6247 16.4056 25.1517 16.2079 24.7986 15.8633'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.8445 12.667C27.3057 12.8427 27.701 13.1924 27.9223 13.6789C28.0879 14.0438 28.1318 14.4341 28.0693 14.8024'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.223 15.6116H16.0777V16.7756C16.0777 17.1084 15.7804 17.3669 15.4442 17.3263L14.9273 17.2638V18.3822L14.9239 18.3856C14.5387 18.5123 14.1282 18.5816 13.6991 18.5816C13.1264 18.5816 12.5841 18.4582 12.0959 18.2369L12.0908 18.2268V15.8836C12.0908 15.8836 10.4065 14.3125 11.7546 12.5488C13.1619 10.7057 16.6673 11.8595 16.1622 14.3953L16.5474 15.0609C16.6893 15.3058 16.5085 15.6082 16.223 15.6082V15.6116Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.6599 17.9801L11.9775 27.7717L10.2527 21.173L11.0247 19.7066L10.6615 19.5631L10.6852 18.6542L11.6599 17.9801Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.6581 18.7471L8.02601 19.6526C7.93479 19.6847 7.84694 19.7286 7.77261 19.7894C7.59522 19.9398 7.49048 20.1577 7.49048 20.3942V24.4893'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.8729 25.8797C16.6949 25.8797 17.3612 25.2254 17.3612 24.4183C17.3612 23.6113 16.6949 22.957 15.8729 22.957C15.0509 22.957 14.3845 23.6113 14.3845 24.4183C14.3845 25.2254 15.0509 25.8797 15.8729 25.8797Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.3394 25.3273C16.6739 25.1601 16.9019 24.8188 16.9019 24.4252'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.2987 23.5872C15.025 23.7696 14.8442 24.0771 14.8442 24.4251C14.8442 24.6853 14.9439 24.9235 15.1095 25.1025'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.4429 25.8797C22.2649 25.8797 22.9313 25.2254 22.9313 24.4183C22.9313 23.6113 22.2649 22.957 21.4429 22.957C20.6209 22.957 19.9546 23.6113 19.9546 24.4183C19.9546 25.2254 20.6209 25.8797 21.4429 25.8797Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.9092 25.3273C22.2437 25.1601 22.4717 24.8188 22.4717 24.4252'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.8685 23.5872C20.5948 23.7696 20.4141 24.0771 20.4141 24.4251C20.4141 24.6853 20.5137 24.9235 20.6793 25.1025'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0911 22.7932C17.8849 22.0988 17.2312 21.5903 16.4574 21.5903C15.9422 21.5903 15.481 21.815 15.1701 22.1698L14.3879 22.9959C14.023 23.3625 13.7983 23.8642 13.7983 24.4184C13.7983 25.5435 14.7275 26.4557 15.8729 26.4557C16.9406 26.4557 17.8224 25.6584 17.9373 24.6397'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.6386 24.6498C18.8504 24.6498 19.0221 24.4812 19.0221 24.2731C19.0221 24.065 18.8504 23.8964 18.6386 23.8964C18.4268 23.8964 18.2551 24.065 18.2551 24.2731C18.2551 24.4812 18.4268 24.6498 18.6386 24.6498Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.6385 25.0519C19.077 25.0519 19.4325 24.7032 19.4325 24.2731C19.4325 23.8429 19.077 23.4943 18.6385 23.4943C18.2 23.4943 17.8445 23.8429 17.8445 24.2731C17.8445 24.7032 18.2 25.0519 18.6385 25.0519Z'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.1791 22.8101C19.1791 22.5179 18.9375 22.2797 18.6385 22.2797C18.3395 22.2797 18.0979 22.5179 18.0979 22.8101'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.113 21.6241L16.9696 21.0565C17.0709 20.9889 17.1909 20.9501 17.3193 20.9501C17.6656 20.9501 17.9477 21.2254 17.9477 21.5667C17.9477 21.587 17.9477 21.6056 17.9443 21.6241C17.9443 21.6258 17.8784 22.3404 17.8784 22.3404'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.179 22.7932C19.3851 22.0988 20.0388 21.5903 20.8126 21.5903C21.3278 21.5903 21.789 21.815 22.0999 22.1698L22.8821 22.9959C23.247 23.3625 23.4717 23.8642 23.4717 24.4184C23.4717 25.5435 22.5425 26.4557 21.3971 26.4557C20.3294 26.4557 19.4476 25.6584 19.3327 24.6397'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.392 22.3404C19.392 22.3404 19.3261 21.6258 19.3261 21.6241C19.3244 21.6056 19.3228 21.587 19.3228 21.5667C19.3228 21.2254 19.6032 20.9501 19.9512 20.9501C20.0813 20.9501 20.2012 20.9889 20.3009 21.0565L21.1574 21.6241'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='17.9441' cy='21.6241' r='0.084469' fill='#D0D4D9' />
          <path
            d='M15.51 8.29655C15.4475 8.25432 15.3833 8.21209 15.3191 8.17154C14.9981 7.96882 14.6552 7.7965 14.2953 7.65459C14.1298 7.59039 14.025 7.42653 14.0318 7.24914L14.0656 6.36559C14.074 6.14598 13.9118 5.95676 13.6939 5.93142L12.1549 5.75235C11.937 5.72701 11.7359 5.87399 11.6937 6.08854L11.5231 6.95519C11.4893 7.12919 11.3491 7.26434 11.1734 7.28968C10.6091 7.36909 10.0668 7.5262 9.55831 7.75089C9.39444 7.82353 9.20523 7.78298 9.08359 7.65121L8.50582 7.02783C8.35716 6.86734 8.10882 6.84707 7.9365 6.98391L6.72184 7.94516C6.54952 8.082 6.51067 8.32696 6.63399 8.50942L7.11209 9.22065C7.21176 9.36762 7.20669 9.5619 7.10026 9.70381C6.76238 10.1532 6.48364 10.6532 6.27753 11.1905C6.21334 11.3577 6.04947 11.4641 5.87039 11.4574L5.0426 11.4253C4.82298 11.4168 4.63377 11.579 4.60843 11.7969L4.42935 13.336C4.40401 13.5539 4.55099 13.7549 4.76554 13.7972L5.60178 13.961C5.77579 13.9948 5.90925 14.1334 5.93459 14.3091C6.01906 14.8784 6.18124 15.4274 6.41268 15.9393C6.48702 16.1032 6.44647 16.2958 6.3147 16.4174L5.70314 16.985C5.54265 17.1337 5.52238 17.382 5.65922 17.5544L6.62048 18.769C6.75732 18.9413 7.00228 18.9802 7.18473 18.8569L7.91116 18.3703M8.2558 16.3143C5.17437 11.0063 11.2916 6.16625 15.7482 10.3863'
            stroke='#D0D4D9'
            strokeWidth='0.7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        HR-партнерам
      </button>
    </div>
  );
};

export default Navs;
