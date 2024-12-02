import { ColorsType } from './types/colors';
import { TypoTypes } from './types/typo';
import { SizeTypes } from './types/layout';
import { IconsType } from './types/icons';
interface ThemeOptions {
    COLORS: ColorsType;
    TYPO: TypoTypes;
    SIZE: SizeTypes;
    ICONS: IconsType;
}
export default ThemeOptions;
