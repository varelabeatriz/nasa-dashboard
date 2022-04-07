import styled from 'styled-components';

export const FeedContainer = styled.div`
    background-color: #EBEBEB;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    margin: 10px;
    border-radius: 12px;
    padding: 20px;
    width: 95%;
    height: 82vh;

    div.row {
        display: flex;

        div.column {
            width: 70%;
        }
    }

    h3 {
        color: #696969;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }

    div.info-container {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        gap: 30px;

        div.info {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #4C8CED;
            padding: 20px;
            height: 80px;
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

    .launches-title {
        margin-top: 20px;
    }
`