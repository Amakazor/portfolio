import React from 'react';
import HeadingBase, {HeadingBaseProps} from '../components/headingBase';

export default function H3(props: HeadingBaseProps) {
    return <HeadingBase as={'h3'} fontSize={'2rem'} {...props} />;
}
