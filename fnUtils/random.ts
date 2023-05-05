/** 指定颜色字符的格式 */
type ColorType = 'hex' | 'rgb' | 'rgba';

const maxNumber = 255;
const hexColorChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

/**
 * 得到某个区间内的随机数字
 * @param {number} maxNumber 最大值
 * @returns {number} 返回 [0-maxNumber] 中的一个随机数
 */
const getDistNumber = (maxNumber: number) => Math.ceil(Math.random() * (maxNumber - 1));

/**
 *
 * @returns {string} 返回一个字符, 描述一个十六进制的随机颜色字符
 */
const getHexColorChar = () => hexColorChar[getDistNumber(16) + 0];

/**
 *
 * @returns {string} 返回一个随机的十六进制颜色字符串
 */
export const getHexColor = (): string => {
  let colorStr = '#';
  for (let i = 0;i < 6;i ++) colorStr += getHexColorChar();
  return colorStr;
}
/**
 *
 * @returns {string} 返回一个随机的RGB颜色字符串
 */
export const getRgbaColor = (): string => {
  const r = getDistNumber(maxNumber);
  const g = getDistNumber(maxNumber);
  const b = getDistNumber(maxNumber);
  const a = Math.random() * 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
/**
 *
 * @returns {string} 返回一个随机的RGBA颜色字符串
 */
export const getRgbColor = (): string => {
  const r = getDistNumber(maxNumber);
  const g = getDistNumber(maxNumber);
  const b = getDistNumber(maxNumber);
  return `rgb(${r}, ${g}, ${b})`;
}
/**
 * @param {ColorType} type 返回随机颜色字符串的格式
 * @returns {string} 返回一个随机的颜色字符串
 */
export const getColor = (type: ColorType = 'hex'): string => {
  if (type === 'hex') return getHexColor();
  if (type === 'rgb') return getRgbColor();
  if (type === 'rgba') return getRgbaColor();

  return '';
}




