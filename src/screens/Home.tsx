import { HStack, VStack } from 'native-base';

export function Home() {
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

        </HStack>

    </VStack>
  );
}