import styled from 'styled-components';

export const LaunchesContainer = styled.div`

    height: 70%;

    h3{
        margin: 10px 0;
    }

    .table {
        height: 90%;
        width: 100%;
        color: #696969;
        background-color: #d3d3d3;
        border-radius: 12px;

        > tr {
            padding: 15px;

            &:nth-child(2n) {
                background-color: #e3e3e3;
            }

            td {
                padding: 12px;
                text-align: left;
            }
        }
    }
`