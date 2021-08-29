import React from 'react';
import styled from 'styled-components';

interface clipPathSVGProps {
    pathDParamter: string;
    id: string;
}

const HiddenSVG = styled.svg`
    position: absolute;
`;

const ClipPathSVG = (props: clipPathSVGProps) => {
    return (
        <HiddenSVG>
            <clipPath
                height={0}
                width={0}
                id={props.id}
                clipPathUnits={'objectBoundingBox'}
            >
                <path d={props.pathDParamter} />
            </clipPath>
        </HiddenSVG>
    );
};

export default ClipPathSVG;
