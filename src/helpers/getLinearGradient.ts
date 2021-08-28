export interface gradientColor {
    color: string;
    position: percentage;
}

const getLinearGriadient = (angle: angle, colors: gradientColor[]) =>
    `linear-gradient(${angle}, ${colors
        .map(color => `${color.color} ${color.position}`)
        .join(', ')})`;
export default getLinearGriadient;
