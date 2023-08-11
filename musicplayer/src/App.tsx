import {useState, type PropsWithChildren, useEffect} from 'react';
import {setupPlayer, addTrack} from '../musicPlayerServeces';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [isPlayerReady, setisPlayerReady] = useState();
  const isDarkMode = useColorScheme() === 'dark';

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }
    setisPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#00ff00" />
      </SafeAreaView>
    );
  }

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <SafeAreaView style={backgroundStyle}></SafeAreaView>;
}

const styles = StyleSheet.create({});

export default App;
