import React from 'react';
import HeadingBase, {HeadingBaseProps} from '../components/headingBase';

export default function H1(props: HeadingBaseProps) {
    return <HeadingBase as={'h1'} fontSize={'5rem'} {...props} />;
}
