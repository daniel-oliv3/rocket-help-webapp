import { HStack, Text } from 'native-base';


export type OrderProps = {
    id: string;
    patrimony: string;
    when: string;
    status: 'open' | 'closed'
}


type Props = {
    
}


export function Order() {
  return (
    <HStack>
        <Text></Text>

    </HStack>
  );
}