import styled from 'styled-components';

export const SideBarContainer = styled.div`
    margin: 10px;
    background-color: #4C8CED;
    width: 200px;
    height: 100vh;
    padding: 20px;
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
        }
    }
`;