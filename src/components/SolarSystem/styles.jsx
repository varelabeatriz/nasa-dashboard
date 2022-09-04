import styled, { keyframes } from 'styled-components';

export const earth = keyframes `
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`

const orbit = `
    border-radius: 50%;
    border: 1px solid #5A60A4;
    transition-timing-function: linear;
`;

const planet = `
    border-radius: 50%;
    position: absolute;
`;

export const SolarSystemContainer = styled.div`
    padding: 50px;

    .earth-orbit {
        height: 400px;
        width: 400px;
        margin: 100px auto;
        animation: ${earth} 40s infinite;
        position: relative;
        ${orbit}

        .earth {
            height: 3px;
            width: 3px;
            background-color: blue;
            top: -5px; 
	        left: 45px;
            ${planet}
        }

        .mercury-orbit {
            height: 340px;
            width: 340px;
            position: absolute;
            top: 29px;
            left: 29px;
            ${orbit}

            .sun {
                ${planet}
                background-color : orange;
                height: 300px;
                width: 300px;
                top: 50%;  
                left: 50%; 
                transform: translate(-50%, -50%);
            }
        }

        .mercury {
            height: 5px;
            width: 5px;
            background-color: grey;
            border-radius: 50%; 
            position: absolute;
            top: -2.5px; 
	        left: 45px;
        }

        .sun {
      
        }
    }
`

