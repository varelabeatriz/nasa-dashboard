import { SideBarContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function SideBar(){
    let navigate = useNavigate();
    return (
        <SideBarContainer>
            <img src="nasa-logo.png" alt="" />
            <nav>
                <button
                    onClick={()=> {
                        navigate("/");
                    }}
                 >Home
                </button>
                <button>Images</button>
                <button>People in Space</button>
                <button
                    onClick={()=> {
                        navigate("/about");
                    }}
                 > About
                </button>
                <button>Github</button>
            </nav>
        </SideBarContainer>
    )
}