import React from 'react';
import HeadingBase, {HeadingBaseProps} from '../components/headingBase';

export default function H4(props: HeadingBaseProps) {
    return <HeadingBase as={'h4'} fontSize={'1.5rem'} {...props} />;
}
