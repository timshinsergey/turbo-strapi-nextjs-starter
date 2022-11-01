import * as react from 'react';
import { HTMLAttributes } from 'react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}
declare const Alert: react.MemoExoticComponent<({ className, children, variant, ...props }: AlertProps) => JSX.Element>;

export { Alert, AlertProps };
