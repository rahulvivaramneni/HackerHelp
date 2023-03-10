import { useEffect, useState } from 'react';
import './huddleApp.css';

import { huddleIframeApp, HuddleAppEvent, HuddleIframe, IframeConfig, HuddleClientMethodName } from '@huddle01/huddle01-iframe';
import AuthBackground from 'assets/images/auth/AuthBackground';

function HuddleApp() {
    const [walletAddress, setWalletAddress] = useState('');

    const iframeConfig = {
        roomUrl: 'https://iframe.huddle01.com/IR2dbc',
        height: '600px',
        width: '100%'
    };

    const reactions = ['😍', '🤔', '👀', '🙌', '👍', '🔥', '🎉', '❤️', '💯'];

    useEffect(() => {
        huddleIframeApp.on(HuddleAppEvent.PEER_JOIN, (data) => console.log({ iframeData: data }));
        huddleIframeApp.on(HuddleAppEvent.PEER_LEFT, (data) => console.log({ iframeData: data }));
    }, []);

    return (
        <div className="App">
            <div className="container">
                <div>
                    <br />

                    {Object.keys(huddleIframeApp.methods)
                        .filter((key) => !['sendReaction', 'connectWallet'].includes(key))
                        .map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    huddleIframeApp.methods[key]();
                                }}
                            >
                                {key}
                            </button>
                        ))}
                </div>

                <HuddleIframe  backgroundImage={'https://www.sattvagroup.in/wp-content/uploads/2018/05/Image-Tower.jpg'} config={iframeConfig} />
                <br />
                {reactions.map((reaction) => (
                    <button key={reaction} onClick={() => huddleIframeApp.methods.sendReaction(reaction)}>
                        {reaction}
                    </button>
                ))}

                
            </div>
        </div>
    );
}

export default HuddleApp;
// <input type="text" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder="Wallet Address" />

//                 <button onClick={() => huddleIframeApp.methods.connectWallet(walletAddress)}>Connect Wallet</button>