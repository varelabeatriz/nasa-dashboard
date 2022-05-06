import { HeaderContainer } from './styles';

export function Header (){
    return (
        <HeaderContainer>
            <h1>
              <img src="nasa-logo.png" alt="" />
              Dashboard
            </h1>
            <div className='switch-container'>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
        </HeaderContainer>
    )
}