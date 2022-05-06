import { SideBarContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function SideBar(props){
    let navigate = useNavigate();
    return (
        <SideBarContainer className={`${props.darkMode ? 'dark-mode' : 'light-mode'}`}>
            <nav>
                <button
                    onClick={()=> {
                        navigate("/");
                    }}
                 >
                    <img src='home.svg' alt='home icon'></img>
                    Home
                </button>
                <button>
                    <img src='images.svg' alt='icon'></img>
                    Images</button>
                <button>
                    <img src='rocket.svg' alt='rocket icon'></img>
                    People in Space</button>
                <button
                    onClick={()=> {
                        navigate("/about");
                    }}
                 >
                    <img src='about.svg' alt='about icon'></img>
                    About
                </button>
                <button>
                    <img src='github.svg' alt='github icon'></img>
                    Github</button>
            </nav>
        </SideBarContainer>
    )
}