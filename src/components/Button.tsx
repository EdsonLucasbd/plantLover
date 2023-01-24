import { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';

type ButtomProps = PropsWithChildren<{
  classes: string
  isDisabled?: boolean
  onPress(): void
}>

export const CustomButtom = ({ children, classes, isDisabled = false, onPress }: ButtomProps) => {
  let color = isDisabled ? 'bg-appGreen-300/50' : 'bg-appGreen-300'

  return (
    <TouchableOpacity className={`${classes} ${color} rounded-xl flex items-center 
      justify-center`}
      onPress={onPress}
      disabled={isDisabled}
    >
      {children}
    </TouchableOpacity>
  );
}