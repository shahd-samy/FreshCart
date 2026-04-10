import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../../services/auth-service";


export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token') || sessionStorage.getItem('token'));
    const [userInfo, setUserInfo] = useState(null);
    const [isVerified, setIsVerified] = useState(false);

    
    useEffect(() => {
        const checkToken = async () => {
            if (!token) {
                setLoading(false);
                setIsVerified(false);
                return;
            }
            try {
                const response = await verifyToken(token);
                console.log('Token verification:', response);
                if (response.success) {
                    setIsVerified(true);
                    setUserInfo(response.data.decoded);
                    localStorage.setItem('userinfo', JSON.stringify(response.data.decoded));
                } else {
                    localStorage.removeItem('token');
                    sessionStorage.removeItem('token');
                    localStorage.removeItem('userinfo');
                    setToken(null);
                    setUserInfo(null);
                }
            } catch (error) {
                console.log('Verification error:', error);
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                localStorage.removeItem('userinfo');
                setToken(null);
                setUserInfo(null);
            } finally {
                setLoading(false);
            }
        };
        checkToken();
    }, [token]);




    function logout() {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
                             localStorage.removeItem('userinfo');

        setToken(null)
    }

    return <AuthContext.Provider value={{ token,loading, userInfo,setToken, logout,isVerified }}>
        {children}
    </AuthContext.Provider>
}
