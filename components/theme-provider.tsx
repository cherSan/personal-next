import {ComponentProps, FC} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeProvider: FC<ComponentProps<typeof NextThemesProvider>> = ({
    children,
    ...props
}) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

ThemeProvider.displayName = "ThemeProvider"

export default ThemeProvider;