import styled from 'styled-components';

export const ApodPictureContainer = styled.div `
    padding-top: 20px;

    img {
        margin-right: 15px;
        border-radius: 8px;
    }

    .astronomy-picture {
        display: flex;

        > div {
            padding: 20px;

            small {
                color: #929292;
            }

            p {
                margin-top: 20px;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                color: #3d3d3d;
            }

            button {
                background-color: #4C8CED;
                border: 0;
                color: white;
                border-radius: 10px;
                padding: 10px 12px;
                margin-top: 20px;
            }
        }
    }
`