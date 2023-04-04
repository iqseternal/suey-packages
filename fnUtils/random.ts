type ColorType = 'hex' | 'rgb' | 'rgba'

const maxNumber = 255;
const hexColorChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

const getDistNumber = (maxNumber: number) => Math.ceil(Math.random() * (maxNumber - 1));

const getHexColorChar = () => hexColorChar[getDistNumber(16) + 0];

export const getHexColor = (): string => {
  let colorStr = '#';
  for (let i = 0;i < 6;i ++) colorStr += getHexColorChar();
  return colorStr;
}

export const getRgbaColor = (): string => {
  const r = getDistNumber(maxNumber);
  const g = getDistNumber(maxNumber);
  const b = getDistNumber(maxNumber);
  const a = Math.random() * 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export const getRgbColor = (): string => {
  const r = getDistNumber(maxNumber);
  const g = getDistNumber(maxNumber);
  const b = getDistNumber(maxNumber);
  return `rgb(${r}, ${g}, ${b})`;
}

export const getColor = (type: ColorType = 'hex'): string => {
  if (type === 'hex') return getHexColor();
  if (type === 'rgb') return getRgbColor();
  if (type === 'rgba') return getRgbaColor();

  return '';
}




