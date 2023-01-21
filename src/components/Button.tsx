import { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';

type ButtomProps = PropsWithChildren<{
  classes: string
  isDisabled?: boolean
  onPress(): void
}>

export const CustomButtom = ({ children, classes, isDisabled = false, onPress }: ButtomProps) => {
  return (
    <TouchableOpacity className={`${classes} bg-appGreen-300 rounded-xl flex items-center 
      justify-center`}
      onPress={onPress}
      disabled={isDisabled}
    >
      {children}
    </TouchableOpacity>
  );
}