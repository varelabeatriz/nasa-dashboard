import styled from 'styled-components';

export const ImagesContainer = styled.div`
    .image-container {
        display: flex;
        width: 500px;

        .prev-image {
            img {
                transform: rotate(180deg);
            }
        }

        .prev-image, .next-image {
            display: flex;
            align-items: center;

            button {
                border: 0;

                img {
                    height: 20px;
                    width: 20px;
                }
            }
        }

        img {
            width: 200px;
        }
    }
`