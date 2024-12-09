/// <reference types="react" />
import { Styles } from 'styled-components/dist/types';
export interface ButtonProps {
    label?: string;
    handleClick?: () => void;
    $variant?: 'primary' | 'secondary' | 'icon';
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    outlined?: boolean;
    transparent?: boolean;
    $size?: 'large' | 'small';
    $cssProps?: Styles<object>;
}
