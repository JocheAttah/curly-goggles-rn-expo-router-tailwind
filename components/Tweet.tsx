import { View, Text, Image } from 'react-native'
import React from 'react'

import { EllipsisVerticalIcon } from 'react-native-heroicons/mini'
import { ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon } from 'react-native-heroicons/outline'
import { EvilIcons } from '@expo/vector-icons'
import tweets from '../assets/data/tweets'

const tweet = tweets[0];


const Tweet = () => {
  return (
    <View className='bg-white flex flex-row justify-center items-start px-4 py-4 border-0 border-b-[0.3px] border-b-gray-400  '>
      <Image src={tweet.user.image} className='w-[50px] h-[50px] rounded-[50px]' />
      <View className='ml-2.5'>
        <View className='flex-row justify-between items-center mb-0.5'>
          <View className='flex-row'>
            <Text className='text-sm font-bold'>{tweet.user.name}</Text>
            <Text className='text-sm font-normal text-gray-500'> @{tweet.user.username}</Text>
          </View>
          <EllipsisVerticalIcon size={20} color={'grey'} />
        </View>
        <View>
          <Text>{tweet.content}</Text>
        </View>
        <View className='flex-row justify-between items-center pr-4 mt-2'>
          <View className='flex-row items-center'>
           <ChatBubbleOvalLeftIcon size={20} color={'grey'}/>
            <Text className='ml-[2px] text-gray-600'>{tweet.numberOfComments}</Text>
          </View>
          <View className='flex-row items-center'>
           <EvilIcons name='retweet' size={30} color={'grey'}/>
            <Text className='ml-[2px] text-gray-600'>{tweet.numberOfRetweets}</Text>
          </View>
          <View className='flex-row items-center'>
           <HeartIcon size={20} color={'grey'}/>
            <Text className='ml-[2px] text-gray-600'>{tweet.numberOfLikes}</Text>
          </View>
          <View>
           <ShareIcon size={20} color={'grey'}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Tweet