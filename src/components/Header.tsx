import { Heading, HStack, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';



type Props = StyledProps & {
  title: string;
}


/* Heading */
export function Header() {

  const { colors } = useTheme();


  return (
    <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pb={6}
        pt={12}
    >

      <IconButton 
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
      />

      <Heading>

      </Heading>

    </HStack>
  );
}