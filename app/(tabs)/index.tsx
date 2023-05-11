import { FlatList, View } from 'react-native';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

export default function TabOneScreen() {
  return (
    <View className='flex-1 bg-white' >
    <FlatList
        data={tweets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ View>
  );
}


const renderItem = ({item}) => {
  return (
    <Tweet tweet={item} />
  )
}

