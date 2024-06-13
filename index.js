/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {Text, TextInput, Alert} from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

Alert.defaultProps = Alert.defaultProps || {};
Alert.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
