import styled from 'styled-components';
import { rgba } from 'polished'

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image-container {
        display: flex;
        justify-content: center;
        width: 50%;
        padding: 20px;

        .prev-image {
            img {
                transform: rotate(180deg);
            }
        }

        .prev-image, .next-image {
            display: flex;
            align-items: center;

            button {
                background-color: transparent;
                border: 0;
                cursor: pointer;

                &:disabled { 
                    display: none;
                }

                img {
                    height: 20px;
                    width: 20px;
                }
            }
        }

        img {
            width: 100%;
        }
    }
`