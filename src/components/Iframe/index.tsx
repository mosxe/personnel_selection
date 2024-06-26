﻿import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type Props = {
  isShow: boolean;
  onClose: (show: boolean) => void;
  link: string;
};

const Iframe = ({ isShow, onClose, link }: Props): JSX.Element | null => {
  const className = isShow ? `${styles.modal} ${styles.show}` : styles.modal;
  const addStyles = (ev: any) => {
    const fontSize =
      window.innerWidth > 1137
        ? '14px'
        : '15px !important';
    const contentFontSize = window.innerHeight <= 600 ? `.wtq-body {font-size: 14px} .wtq-header {font-size: 14px}` : '';
    const iframeTarget = ev.target as HTMLIFrameElement;
    const newStyle = document.createElement('style');
    newStyle.textContent = `body {font-size: ${fontSize};} ${contentFontSize}`;
    iframeTarget.contentDocument?.head.appendChild(newStyle);
  };

  useEffect(() => {
    const iframe = document.getElementById('iframe-assessment');
    if (iframe) {
      iframe.addEventListener('load', addStyles);
    }
    return () => {
      window.removeEventListener('load', addStyles);
    };
  }, [addStyles, isShow]);

  if (!isShow) {
    return null;
  }

  return createPortal(
    <div className={className}>
      <div className={styles['modal__container']}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__header']}>
            <div className={styles['modal__header--wrapper']}>
              <button
                type='button'
                className={styles['modal__button-close']}
                onClick={() => onClose(false)}
              ></button>
            </div>
          </div>
          <div className={styles['modal__body']}>
            <iframe
              id='iframe-assessment'
              className={styles.iframe}
              width='100%'
              height='100%'
              src={link}
              title='Тестирование'
              allowFullScreen={true}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Iframe;
