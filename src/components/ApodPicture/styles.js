import styled from 'styled-components';

export const ApodPictureContainer = styled.div `
    img {
        width: 400px;
        height: 300px;
        margin-right: 15px;
    }

    .astronomy-picture {
        display: flex;

        > div {
            small {
                color: #929292;
            }
        }
    }
`