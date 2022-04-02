import { LaunchesContainer } from './styles';

const nextLaunchesUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5';

export function Launches (){

    return (
        <LaunchesContainer>
            <div className='table'>
                    <div>
                        <p> Blue Origin</p>
                        <p>New Shepard</p>
                        <p>Texas</p>
                        <p>United States</p>
                    </div>
                    <div>
                        <p> Blue Origin</p>
                        <p>New Shepard</p>
                        <p>Texas</p>
                        <p>United States</p>
                    </div>
                    <div>
                        <p> Blue Origin</p>
                        <p>New Shepard</p>
                        <p>Texas</p>
                        <p>United States</p>
                    </div>
                    <div>
                        <p> Blue Origin</p>
                        <p>New Shepard</p>
                        <p>Texas</p>
                        <p>United States</p>
                    </div>
                 
            </div>
        </LaunchesContainer>
    )
}