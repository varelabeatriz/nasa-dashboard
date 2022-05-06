import styled from 'styled-components';

export const LaunchesContainer = styled.div`

    div.table {
        display: flex;
        flex-direction: column;
        color: #696969;
        background-color: #d3d3d3;
        border-radius: 12px;

        > div {
            display: flex;
            justify-content: space-between;
            padding: 15px;

            &:nth-child(2n) {
                background-color: #e3e3e3;
            }
        }
    }
`