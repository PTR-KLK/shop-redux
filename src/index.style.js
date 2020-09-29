import { createGlobalStyle } from 'styled-components'
import { colors } from "./utils/theme"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${colors.accent}; 
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;