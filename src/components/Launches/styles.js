import styled from 'styled-components';

export const LaunchesContainer = styled.div`
    background-color: #d3d3d3;
    margin: 20px 0;
    border-radius: 12px;

    div.table {
        display: flex;
        flex-direction: column;

        > div {
            display: flex;
            justify-content: space-between;
            padding: 20px;

            &:nth-child(2n) {
                background-color: #e3e3e3;
            }
        }
    }
`