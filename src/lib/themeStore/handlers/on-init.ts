import { ThemeAction } from ".."
import { setTheme } from "../actions";

export const onInit = (): ThemeAction => ({ dispatch }, { defaultTheme = 'system', storageKey = 'vite-ui-theme' }) => {
    dispatch(setTheme(localStorage.getItem(storageKey) || defaultTheme));
}