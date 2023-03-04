import styled from 'styled-components';

export const FeedContainer = styled.div`
    &.dark-mode {
        background-color: #4A4165;

        h3 {
            color: #ffffff;
        }

        div.row {
            div.column {
                div.info {
                    background-color: #552EC3;
                }

                .table {
                    background-color: #3D3652;
                    color: #BBBBBB;

                    div:nth-child(2n) {
                        background-color: #4F456C;
                    }
                }
            }

            .chart-container {
                background-color: #3D3652;
            }
        }

        .astronomy-picture {
            p {
                color: #ffffff;
            }

            button {
                background-color: #552EC3;
            }
        }
    }

    &.light-mode {
        background-color: #EBEBEB;
    }

    background-color: #EBEBEB;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    margin: 10px;
    border-radius: 12px;
    padding: 20px;

    div.row {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin-top: 10px;

        div.column {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    h3 {
        color: #696969;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }

    div.info-container {
        height: 30%;
        display: flex;
        justify-content: space-between;
        gap: 30px;

        div.info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #4C8CED;
            padding: 20px;
            width: 30%;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
            border-radius: 14px;
            color: white;

            p {
                text-align: center;
            }

            p:first-child {
                font-size: 40px;
            }
        }
    }

    @media(max-width: 768px) {
        div.row {
            flex-direction: column;

            div.column {
                width: 100%;
            }
        }
    }
`