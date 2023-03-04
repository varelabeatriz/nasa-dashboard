import styled from 'styled-components';

export const SideBarContainer = styled.div`
    width: 10%;

    &.dark-mode {
        background-color: #552EC3;
    }

    &.light-mode {
        background-color: #4C8CED;
    }

    margin: 10px;
    display: flex;
    padding: 120px 20px 20px;
    border-radius: 12px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);

    img {
        width: 200px;
    }

    h3 {
        font-family: sans-serif;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        button {
            border: 0;
            background-color: transparent;
            color: white;
            margin: 10px 0;
            font-family: 600;
            font-size: 18px;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 16px;
                margin-right: 10px;
            }
        }
    }

    @media(max-width: 768px) {
        display: none;
    }
`;