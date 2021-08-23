import React from 'react';
import HeadingBase, {HeadingBaseProps} from '../components/headingBase';

export default function H2(props: HeadingBaseProps) {
    return <HeadingBase as={'h2'} fontSize={'3.5rem'} {...props} />;
}
