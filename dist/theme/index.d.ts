import ThemeOptions from './types';
declare class Theme {
    options: ThemeOptions;
    optionKeys: string[];
    name: string;
    constructor();
    setOptions(options: ThemeOptions): void;
    setTheme(name: string): void;
    get getOptions(): ThemeOptions;
    private checkOptionKeys;
}
declare const themeInstance: Theme;
export default themeInstance;
