import qr from 'qr-image';

const createQR = (url) => {
  const newUrl = url.replaceAll('^', '/');
  const QR = qr.image(newUrl, { type: 'png' });
  return QR;
};

export default { createQR };
