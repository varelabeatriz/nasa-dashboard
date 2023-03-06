import styled from 'styled-components';

export const PeopleInSpaceContainer = styled.div`
    div {
        background-color: white;
        padding: 20px;
        margin: 15px;
        border-radius: 12px;

        p, h4 {
            color: #353535;
        }
    }

    .astronaut-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            margin: 15px 40px;
            position: relative;

            &:hover {
                span {
                    display: block;
                }
            }

            > span {
                display: none;
                position: absolute;
                bottom: 0;
                left: -10px;
            }
        }

        img.astronaut {
            width: 60px;
        }
    }
`