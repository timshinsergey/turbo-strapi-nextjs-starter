import * as React from 'react';

declare const NewTabLink: ({ children, href, ...other }: {
    children: React.ReactNode;
    href: string;
}) => JSX.Element;

declare const CounterButton: () => JSX.Element;

export { CounterButton, NewTabLink };
