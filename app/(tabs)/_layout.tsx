import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Entypo, Feather, Fontisto } from '@expo/vector-icons';
import {BellIcon, EnvelopeIcon} from 'react-native-heroicons/outline'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel:false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) =><Entypo name='home' color={color} size={28} style={{ marginBottom: -3 }} />,
          headerTitle: () => (
            <Image source={require('../../assets/images/logo.png')} className='w-8 h-8' />

          ),
          // headerLeft: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Feather name="search" color={color} size={28} style={{ marginBottom: -3 }} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Feather name="mic" color={color} size={28} style={{ marginBottom: -3 }} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <BellIcon color={color} size={28} style={{ marginBottom: -3 }} />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <EnvelopeIcon  color={color} size={28} style={{ marginBottom: -3 }} />,
        }}
      />
    </Tabs>
  );
}
