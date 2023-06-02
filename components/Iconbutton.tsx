import { Text, View } from "react-native"

export type IconButtonProps = {
    IconFamily: any,
    name: string,
    text?: string | number
  }
  
  const IconButton = ({IconFamily, name, text}:IconButtonProps) => {
    return (
      <View className='flex-row items-center'>
             <IconFamily name={name} size={16} color={'grey'}/>
              <Text className='ml-[2px] text-gray-600 pt-0.5'>{text}</Text>
      </View>
    )
  }

  export default IconButton