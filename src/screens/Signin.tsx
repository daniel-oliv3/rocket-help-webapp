import { VStack, Heading } from 'native-base';

import Logo from '../assets/'

export function SignIn(){
    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Heading color="gray.100">
                Acesse sua conta
            </Heading>
        </VStack>
    )
}