import React, {ReactChild} from 'react';
import styled from 'styled-components';
import {
    GatsbyImage,
    getImage,
    IGatsbyImageData,
    ImageDataLike,
} from 'gatsby-plugin-image';
import Carousel from 'nuka-carousel';

interface textAndImageBoxProps extends textAndImageBoxContainerProps, transitionProps {
    images: ImageDataLike[];

    children?: ReactChild | ReactChild[];
}

interface textAndImageBoxContainerProps extends borderProps {
    paddingBottom?: boolean;
    reversed?: boolean;
    background: string;
}

interface borderProps {
    borderGradient: string;
    borderColor: string;
}

interface textContainerProps extends borderProps {
    reversed?: boolean;
}

interface transitionProps {
    $transitionTime: time;
}

const TextAndImageBoxContainer = styled.div<textAndImageBoxContainerProps>`
    display: flex;
    flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
    background: ${props => props.background};

    width: 100%;
    border-radius: 1rem;
    overflow: hidden;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const TextAndImageBackground = styled.div<textAndImageBoxContainerProps>`
    background: ${props => props.borderGradient};
    padding: 0.3rem;
    border-radius: 1rem;
    margin-left: 1vw;
    margin-right: 1vw;
`;

const ImageContainer = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        aspect-ratio: 3/2;
    }
`;

const TextContainer = styled.div<textContainerProps>`
    width: 50%;
    border-right: ${props => (props.reversed ? '0.125rem' : 0)} solid
        ${props => props.borderColor};
    border-left: ${props => (!props.reversed ? '0.125rem' : 0)} solid
        ${props => props.borderColor};
    padding: calc(0.25rem + 1.25vw);

    @media (max-width: 1000px) {
        width: 100%;
        border-right: none;
        border-left: none;
    }
`;

const FullsizeCarousel = styled(Carousel)`
    width: 100%;
    height: 100% !important;

    & ul {
        height: 100% !important;
    }

    & li {
        height: 100% !important;
    }
`;

const FullsizeImg = styled(GatsbyImage)<transitionProps>`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    img {
        transition: transform ${props => props.$transitionTime}, opacity 0.25s linear !important;
    }

    &:hover img {
        transform: scale(1.2);
    }
`;

const TextAndImageBox = (props: textAndImageBoxProps) => {
    return (
        <TextAndImageBackground {...props}>
            <TextAndImageBoxContainer {...props}>
                <ImageContainer>
                    {props.images.length > 1 ? (
                        <FullsizeCarousel
                            autoplayInterval={3000}
                            defaultControlsConfig={{pagingDotsStyle: {display: 'none'}}}
                            dragging={false}
                            autoplay
                            pauseOnHover
                            wrapAround
                        >
                            {props.images.map((image, index) => (
                                <FullsizeImg
                                    $transitionTime={props.$transitionTime}
                                    key={index}
                                    image={getImage(image) as IGatsbyImageData}
                                    alt={''}
                                ></FullsizeImg>
                            ))}
                        </FullsizeCarousel>
                    ) : (
                        <FullsizeImg
                            $transitionTime={props.$transitionTime}
                            image={getImage(props.images[0]) as IGatsbyImageData}
                            alt={''}
                        ></FullsizeImg>
                    )}
                </ImageContainer>
                <TextContainer {...props}>{props.children}</TextContainer>
            </TextAndImageBoxContainer>
        </TextAndImageBackground>
    );
};

export default TextAndImageBox;
