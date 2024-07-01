'use client'

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from "react";

const Theme = ({ Component, children}) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        setState(true);
    }, [])

    if( !state ) {
        return null;
    }
    return <ThemeProvider defaultTheme="light" attribute="class">{children}</ThemeProvider>;
};

export default Theme;