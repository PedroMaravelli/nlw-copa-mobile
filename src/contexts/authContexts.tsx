import { createContext, ReactNode , useEffect} from "react";
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {useState} from 'react'


WebBrowser.maybeCompleteAuthSession();


interface UserProps {
    name: string
    avatarUrl:string
}

export interface AuthContextDataProps{
    user:UserProps
    isUserLoading:boolean
    signIn: () => Promise<void>;

}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider( {children} : AuthProviderProps){

    const [isUserLoading , setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserProps>({} as UserProps)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId:'313270323028-9pkv7pfb9gj8hbg77ob39uu3nmhm4o48.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['profile', 'email']
    })

    async function signIn() {
        try {

            
            setIsUserLoading(true)
            await promptAsync()
        } catch (error) {
            console.log(error);
            throw error
        }finally{
            setIsUserLoading(false)
        }
        
    }

    async function sigInwithGoogle(access_token:string) {
        console.log('TOKEN DE AUTENTICAÇÃO ===>', access_token);
        
        
    }

    useEffect(() =>{
        if(response?.type === 'success' && response.authentication?.accessToken){
            sigInwithGoogle(response.authentication.accessToken)

        }

    },[response])
    return(
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user

        }}>{children}</AuthContext.Provider>
        
        
    )
}