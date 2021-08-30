import {ReactChild} from 'react';
import styled from 'styled-components';
import device from '../utility/device';

export interface HeadingBaseProps {
    textColor: string;
    textAling?: textAlign;
    fontSize?: string;
    children: ReactChild | ReactChild[];
    noMargin?: boolean;
    topMargin?: boolean;
}

const HeadingBase = styled.span<HeadingBaseProps>`
    color: ${props => props.textColor};
    font-weight: 500;
    margin: 0;
    margin-bottom: ${props => !props.noMargin && '0.5em'};
    margin-top: ${props => props.topMargin && '0.5em'};
    line-height: 1.1;
    text-align: ${props => props.textAling || 'center'};

    display: flex;
    flex-direction: row;
    align-items: baseline;

    font-size: ${props => props.fontSize ?? '1rem'};
    @media ${device.mobileL.max} {
        font-size: calc(0.6 * ${props => props.fontSize ?? '1rem'});
    }
`;

export default HeadingBase;
