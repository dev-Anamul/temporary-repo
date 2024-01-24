/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';

function App() {
    return (
        <div className="h-[500px]">
            <JitsiMeeting
                style={{ height: '100%', width: '100%' }}
                roomName="random"
                onApiReady={(externalAPI) => {
                    console.log('externalAPI', externalAPI);
                }}
                getIFrameRef={(ref) => {
                    ref.style.height = '100%';
                    ref.style.width = '100%';
                }}
            />
            <JaaSMeeting
                style={{ height: '100%', width: '100%' }}
                roomName="random"
                onApiReady={(externalAPI) => {
                    console.log('externalAPI', externalAPI);
                }}
                getIFrameRef={(ref) => {
                    ref.style.height = '100%';
                    ref.style.width = '100%';
                }}
            />
        </div>
    );
}

export default App;
