import * as react from 'react';
import { ReactNode, ComponentType, HTMLAttributes } from 'react';

interface ContainerProps {
    children: ReactNode | ReactNode[];
    el?: string | ComponentType<HTMLAttributes<HTMLElement>>;
    className?: string;
    noPadding?: boolean;
}
declare const Container: react.MemoExoticComponent<({ children, el: Component, className, noPadding }: ContainerProps) => JSX.Element>;

interface SpinnerProps {
    svgClassName?: string;
    ariaLabelledby?: string;
}
declare const Spinner: react.MemoExoticComponent<({ svgClassName, ariaLabelledby }: SpinnerProps) => JSX.Element>;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}
declare const Alert: react.MemoExoticComponent<({ className, children, variant, ...props }: AlertProps) => JSX.Element>;

export { Alert, AlertProps, Container, ContainerProps, Spinner, SpinnerProps };
