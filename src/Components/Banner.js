import React from 'react';
import styled from 'styled-components';
import BannerImg from '../image/banner.png';

export const Banner = styled.div`
    width: 100%;
    height: 210px;
    background-image:url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
`;