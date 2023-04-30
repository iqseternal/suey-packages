"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = exports.getRgbColor = exports.getRgbaColor = exports.getHexColor = void 0;
const maxNumber = 255;
const hexColorChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const getDistNumber = (maxNumber) => Math.ceil(Math.random() * (maxNumber - 1));
const getHexColorChar = () => hexColorChar[getDistNumber(16) + 0];
const getHexColor = () => {
    let colorStr = '#';
    for (let i = 0; i < 6; i++)
        colorStr += getHexColorChar();
    return colorStr;
};
exports.getHexColor = getHexColor;
const getRgbaColor = () => {
    const r = getDistNumber(maxNumber);
    const g = getDistNumber(maxNumber);
    const b = getDistNumber(maxNumber);
    const a = Math.random() * 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
exports.getRgbaColor = getRgbaColor;
const getRgbColor = () => {
    const r = getDistNumber(maxNumber);
    const g = getDistNumber(maxNumber);
    const b = getDistNumber(maxNumber);
    return `rgb(${r}, ${g}, ${b})`;
};
exports.getRgbColor = getRgbColor;
const getColor = (type = 'hex') => {
    if (type === 'hex')
        return (0, exports.getHexColor)();
    if (type === 'rgb')
        return (0, exports.getRgbColor)();
    if (type === 'rgba')
        return (0, exports.getRgbaColor)();
    return '';
};
exports.getColor = getColor;
