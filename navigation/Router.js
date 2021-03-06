import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import classDisplay from '../screens/classDisplay';
import studentProfile from '../screens/studentProfile'
import goodBehaviour from '../screens/goodBehaviour'
import expandedView from '../screens/expandedView'
import profileExpandedView from '../screens/profileExpandedView'

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  classDisplay: () => classDisplay,
  studentProfile: () => studentProfile,
  goodBehaviour: () => goodBehaviour,
  expandedView: () => expandedView,
  profileExpandedView: () => profileExpandedView,
}));
