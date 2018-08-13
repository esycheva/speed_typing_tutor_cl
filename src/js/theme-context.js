import {createContext} from 'react';

// It creates the context with default value
const ThemeContext = createContext({
  theme: 'dark',
  changeTheme: () => {}
});

// The Provider component makes the context available to components that need it
export const ThemeProvider = ThemeContext.Provider;

// A React component that subscribes to context changes
export const ThemeConsumer = ThemeContext.Consumer;

// Components that are not Consumers will not be subscribed to the context.
