import { Input as NativeBaseInput, IInputProps } from "native-base";


export function Input({ ...rest }) {
    return (
        <NativeBaseInput 
            bg="gray.700"
            h={14}
            size="md"
            borderWidth={0}
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300" 
            { ...rest }
        />
    );
}














