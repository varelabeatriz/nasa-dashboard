import { HeaderContainer } from './styles';

export function Header (props){
    return (
        <HeaderContainer>
            <h1>
              <img src="nasa-logo.png" alt="" />
              Dashboard
            </h1>
            <div className='switch-container'>
                <label className="switch" >
                    <input type="checkbox" onClick={props.handleToggle}/>
                    <span class="slider round"></span>
                </label>
            </div>
        </HeaderContainer>
    )
}