import {NavigatorScreenParams} from '@react-navigation/native'
export type RootStackParamList = {
    HomeTabs: NavigatorScreenParams<BottomTabParamList>;
    Profile: undefined;
    List: undefined;
    Topics: undefined;
    Bookmarks: undefined;
    Moments: undefined;
    Monetization: undefined;
    "Twitter for Professionals": undefined;
    "Settings and Privacy": undefined;
    "Help Center": undefined;
}
export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Spaces: undefined;
    Notifications: undefined;
    Messages: undefined;
}