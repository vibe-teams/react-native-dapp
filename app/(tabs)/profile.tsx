import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, Text } from 'react-native';

export default function Profile() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          // style={styles.reactLogo}
        />
      }>
      <Text>
      Profile
      </Text>
    </ParallaxScrollView>
  )
}