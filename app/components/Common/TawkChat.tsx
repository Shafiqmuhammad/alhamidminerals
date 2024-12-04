import React, { useEffect } from 'react';

const TawkChat = () => {
    useEffect(() => {
        const s0 = document.getElementsByTagName('script')[0];
        const s1 = document.createElement('script');
        s1.async = true;
        // s1.src = 'https://embed.tawk.to/664a6b3a9a809f19fb32d5a5/1hu9b5nok';

        //s1.src = 'https://embed.tawk.to/5ec6a3efc75cbf1769ee213e/default';
        s1.src = 'https://tawk.to/chat/66ace4ce32dca6db2cb94412/1i49lri5j';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        if (s0 && s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        }

        // Cleanup function
        return () => {
            if (s1.parentNode) {
                s1.parentNode.removeChild(s1);
            }
        };
    }, []);

    return null; // Tawk.to script is loaded asynchronously, so this component doesn't render anything
};

export default TawkChat;
