/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { WebView } from 'react-native-webview'

const uri = 'https://sample.calls.sendbird.com/login?referrer=%2Fdirect-call%2Ffull-screen'
const appId = 'A87436DE-5C89-49B2-8883-9A45835CA6F2'
const runOnLoad = `document.getElementById('appIdInput').value = "${appId}";`

const App = () => {
    return (
        <WebView
          source={{ uri: uri }}
          injectedJavaScript={runOnLoad}
        />
    )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
