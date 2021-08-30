import React from 'react';
import HeadingBase, {HeadingBaseProps} from '../components/headingBase';

export default function H2(props: HeadingBaseProps) {
    return <HeadingBase as={'h2'} fontSize={'calc(3rem + 1vw)'} {...props} />;
}
