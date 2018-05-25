import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {registerScreens, registerScreenVisibilityListener} from './screens';

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();

async function prepareIcons() {
  try {

    const [sword, emoticon, stadium] = await Promise.all([
      Icon.getImageSource('sword', 30),
      Icon.getImageSource('emoticon', 30),
      Icon.getImageSource('stadium', 30)
    ]);
    
    return { sword, emoticon, stadium };
  } catch (error) {
    console.log(error);
  }
}

async function startApp() {

  const icons = await prepareIcons();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Solo',
        screen: 'example.SoloScreen',
        icon: icons.sword,
        selectedIcon: icons.sword,
        title: 'Solo'
      },
      {
        label: 'Me',
        screen: 'example.ProfileScreen',
        icon: icons.emoticon,
        selectedIcon: icons.emoticon,
        title: 'Me'
      },
      {
        label: 'Battle',
        screen: 'example.BattleScreen',
        icon: icons.stadium,
        selectedIcon: icons.stadium,
        title: 'Battle'
      }
    ]
  });
}

startApp();
