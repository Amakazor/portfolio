import {useMemo} from 'react';
import ClipPathSVG from '../components/ClipPathSVG';
import cyrb53 from '../helpers/cyrb53';

export const useClipPathSvg = (
    pathDParamter: string,
): {svgElement: JSX.Element; id: string} => {
    const id = useMemo(() => `ClipPath${cyrb53(pathDParamter)}`, [pathDParamter]);
    const svgElement = ClipPathSVG({pathDParamter: pathDParamter, id: id});

    console.log(id);
    return {svgElement: svgElement, id: id};
};
