import { Action, createHook, createStore, createContainer, defaults } from "react-sweet-state";
import { setTheme } from "./actions";
import { onInit } from "./handlers";

defaults.devtools = true;

export const defaultThemeContainerProps = { defaultTheme: 'system', storageKey: 'vite-ui-theme'}

export const ThemeContainer = createContainer<ThemeContainerProps>();

const initialState = {
  theme: "system",
}

export const ThemeStore = createStore({
    name: 'themeStore',
    containedBy: ThemeContainer,
    initialState,
    actions: {
        setTheme,
    },
    handlers: {
        onInit
    }
})

export const useTheme = createHook(ThemeStore);

export type ThemeStoreShape = typeof initialState;
export type ThemeContainerProps = typeof defaultThemeContainerProps;
export type ThemeAction = Action<ThemeStoreShape, ThemeContainerProps>;