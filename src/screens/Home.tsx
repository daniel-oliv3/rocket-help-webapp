import { useState } from 'react';
import { HStack, VStack, IconButton, useTheme, Text, Heading, FlatList } from 'native-base';
import { SignOut } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';


export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' |'closed'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '123',
            patrimony: '123456',
            when: '18/07/2022 as 10:00',
            status: 'open'
        },
        {
            id: '164',
            patrimony: '654321',
            when: '02/08/2022 as 16:13',
            status: 'open'
        },
        {
            id: '131',
            patrimony: '123456',
            when: '18/07/2022 as 10:00',
            status: 'open'
        },
        {
            id: '124',
            patrimony: '654321',
            when: '02/08/2022 as 16:13',
            status: 'open'
        },
        {
            id: '193',
            patrimony: '123456',
            when: '18/07/2022 as 10:00',
            status: 'open'
        },
        {
            id: '174',
            patrimony: '654321',
            when: '02/08/2022 as 16:13',
            status: 'open'
        },
        {
            id: '113',
            patrimony: '123456',
            when: '18/07/2022 as 10:00',
            status: 'open'
        },
        {
            id: '144',
            patrimony: '654321',
            when: '02/08/2022 as 16:13',
            status: 'open'
        }
    ]);

    const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pt={12}
            pb={5}
            px={6}
        >
            <Logo />

            <IconButton 
                icon={<SignOut size={26} color={colors.gray[300]} />}
            />

        </HStack>

        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color="gray.100">
                    Meus chamados
                </Heading>
                <Text color="gray.200">
                    3
                </Text>
            </HStack>

            <HStack space={3} mb={8}>
            <Filter 
                type="open"
                title="em andamento"
                onPress={() => setStatusSelected('open')}
                isActive={statusSelected === 'open'}
            />


            <Filter 
                type="closed"
                title="finalizado"
                onPress={() => setStatusSelected('closed')}
                isActive={statusSelected === 'closed'}
            />
            </HStack>

            <FlatList 
                data={orders}                 
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Order data={item}/>}
            />


            <Button title="Nova solicitação" />
        </VStack>        
    </VStack>
  );
}