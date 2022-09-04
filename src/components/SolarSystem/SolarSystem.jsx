import { SolarSystemContainer } from './styles';

export function SolarSystem(){

    return (
        <div>
            <p>Sistema Solar</p>
            <SolarSystemContainer>
                <div className='earth-orbit'>
                    <div className='earth'></div>
                    <div className='mercury-orbit'>
                        <div className='sun'></div>
                    </div>
                </div>
            </SolarSystemContainer>
        </div>
        
    )
}