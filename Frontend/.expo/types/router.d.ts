/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/(tabs)/Auth/login` | `/(tabs)/Auth/register` | `/(tabs)/Auth/resetPass` | `/(tabs)/Config/config` | `/(tabs)/Entry/audioEntry` | `/(tabs)/Entry/imageEntry` | `/(tabs)/Entry/textEntry` | `/(tabs)/Entry/videoEntry` | `/(tabs)/Home/home` | `/(tabs)/Home/listEntry` | `/(tabs)/Home/listWish` | `/(tabs)/Message/addMessage` | `/(tabs)/Message/addMessageVisual` | `/(tabs)/Message/editMessage` | `/(tabs)/Message/editMessageVisual` | `/(tabs)/Message/tableMessage` | `/(tabs)/User/pefilUser` | `/(tabs)/Wish/addWish` | `/(tabs)/Wish/editWish` | `/(tabs)/Wish/tableWish` | `/Auth/login` | `/Auth/register` | `/Auth/resetPass` | `/Config/config` | `/Entry/audioEntry` | `/Entry/imageEntry` | `/Entry/textEntry` | `/Entry/videoEntry` | `/Home/home` | `/Home/listEntry` | `/Home/listWish` | `/Message/addMessage` | `/Message/addMessageVisual` | `/Message/editMessage` | `/Message/editMessageVisual` | `/Message/tableMessage` | `/User/pefilUser` | `/Wish/addWish` | `/Wish/editWish` | `/Wish/tableWish` | `/_sitemap` | `/royalLayout`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
