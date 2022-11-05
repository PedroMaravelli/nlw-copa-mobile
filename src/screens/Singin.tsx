import { Center, Text, Icon } from "native-base";
import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";
import { Fontisto} from '@expo/vector-icons'
import {useAuth} from '../hooks/useAuth'

export function SingIn(){

    const {signIn, user} = useAuth()
    return(
        <Center flex={1} p={7} bgColor='gray.900'>
            <Logo width={212} height={40}></Logo>
            <Button 
            mt={5}
            title="ENTRAR COM GOOGLE"
            type="SECONDARY"
            leftIcon={<Icon as={Fontisto} name='google' size='md'></Icon>}
            onPress={signIn}>

            </Button>
            <Text textAlign='center' mt={5} color='white'>
            Não utilizamos nenhuma informação alem{'\n'}
             do seu e-mail para criação da sua conta.</Text>
            
            

        </Center>
    )
}