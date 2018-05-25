import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import SoloScreen from '../Components/Solo/index';
import BattleScreen from '../Components/Battle/index';
import ProfileScreen from '../Components/Profile/index';
import GameScreen from '../Components/Game/index';

export function registerScreens() {
  Navigation.registerComponent('example.SoloScreen', () => SoloScreen);
  Navigation.registerComponent('example.BattleScreen', () => BattleScreen);
  Navigation.registerComponent('example.ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('example.GameScreen', () => GameScreen);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
