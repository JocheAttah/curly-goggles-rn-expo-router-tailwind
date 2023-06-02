import { View, Text, Image } from 'react-native'
import React from 'react'

import { EllipsisVerticalIcon } from 'react-native-heroicons/solid'
import { Feather, Ionicons, Octicons } from '@expo/vector-icons'
import moment from 'moment'
import { TweetType } from '../types'
import IconButton from './Iconbutton'

export type Tweetprops ={
  tweet:TweetType;
}


const Tweet = ({tweet}: Tweetprops) => {
  return (
    <View className='bg-white w-screen flex-1  flex-row items-start px-4 py-4 border-0 border-b-[0.2px] border-b-gray-300'>
      <Image src={tweet.user.image} className='w-[50px] h-[50px] rounded-[50px]' />
      <View className='pl-2 w-[88%]'>
        <View className='flex-row justify-between items-center mb-0.5'>
          <View className='flex-row'>
            <Text className='text-sm font-bold'>{tweet.user.name}</Text>
            <Text className='text-sm font-normal text-gray-500'> @{tweet.user.username}</Text>
            <Text className='text-sm font-normal text-gray-500'> · {moment(tweet.createdAt).from(moment(new Date()))}</Text>
          </View>
          <View>
              <EllipsisVerticalIcon  size={16 } color={'grey'}  />
          </View>
        </View>
        <View className='w-full'>
          <Text>{tweet.content}</Text>
        </View>
        {tweet.image && <Image src={tweet.image} className='w-full my-2.5 aspect-video rounded-xl' /> }
        <View className='flex-row justify-between items-center pr-4 mt-2'>
          <IconButton IconFamily={Ionicons} name={'md-chatbubble-outline'} text={tweet.numberOfComments} />
          <IconButton IconFamily={Feather} name={'repeat'} text={tweet.numberOfRetweets} />
          <IconButton IconFamily={Feather} name={'heart'} text={tweet.numberOfLikes} />
          <IconButton IconFamily={Ionicons} name={'md-stats-chart'} text={tweet.impressions} />
          <IconButton IconFamily={Octicons} name={'share-android'} />
        </View>
      </View>
    </View>
  )
}

export default Tweet