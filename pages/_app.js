import { createGlobalStyle, ThemeProvider } from 'styled-components';

import useHydration from '../hooks/useHydration';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const hydrated = useHydration();
  return (
    <>
      {hydrated && (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
