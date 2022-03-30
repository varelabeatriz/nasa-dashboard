import { SideBarContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function SideBar(){
    let navigate = useNavigate();
    return (
        <SideBarContainer>
            <nav>
                <button
                    onClick={()=> {
                        navigate("/");
                    }}
                 >
                    <img src='home.svg'></img>
                    Home
                </button>
                <button>
                    <img src='images.svg'></img>
                    Images</button>
                <button>
                    <img src='rocket.svg'></img>
                    People in Space</button>
                <button
                    onClick={()=> {
                        navigate("/about");
                    }}
                 >
                    <img src='about.svg'></img>
                    About
                </button>
                <button>
                    <img src='github.svg'></img>
                    Github</button>
            </nav>
        </SideBarContainer>
    )
}