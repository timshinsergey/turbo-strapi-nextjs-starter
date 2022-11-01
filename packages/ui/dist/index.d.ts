import * as react from 'react';
import { HTMLAttributes } from 'react';

interface SpinnerProps {
    svgClassName?: string;
    ariaLabelledby?: string;
}
declare const Spinner: react.MemoExoticComponent<({ svgClassName, ariaLabelledby }: SpinnerProps) => JSX.Element>;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}
declare const Alert: react.MemoExoticComponent<({ className, children, variant, ...props }: AlertProps) => JSX.Element>;

export { Alert, AlertProps, Spinner, SpinnerProps };
