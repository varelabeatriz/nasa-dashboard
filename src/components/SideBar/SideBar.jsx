import { SideBarContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function SideBar(){
    let navigate = useNavigate();
    return (
        <SideBarContainer>
            <img src="nasa-logo.png" alt="" />
            <h3>NasaDasboard</h3>
            <nav>
                <button
                    onClick={()=> {
                        navigate("/");
                    }}
                 >Home
                </button>
                <button
                    onClick={()=> {
                        navigate("/about");
                    }}
                 > About
                </button>
            </nav>
        </SideBarContainer>
    )
}