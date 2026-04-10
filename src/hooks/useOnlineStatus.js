import { useEffect, useState } from "react";

export function useOnlineStatus() {

    const [isOnline, SetIsOnline] = useState(true);

    useEffect(() => {

        function handleIsOnline() {
            SetIsOnline(true)
        }
        function handleIsOffline() {
            SetIsOnline(false)
        }


        window.addEventListener('online', handleIsOnline);
        window.addEventListener('offline', handleIsOffline);

        return function () {
            window.removeEventListener('online', handleIsOnline);
            window.removeEventListener('offline', handleIsOffline);

        }
    }, [])
return isOnline;

}