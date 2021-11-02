import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DataProvider } from './contexts/MainContexts';

import Routes from './routes/routes';

import { GlobalStyle } from './styles/global';

export function App() {
    <GlobalStyle />
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          {Routes.map(({path, exact, component,...rest}) => (
            <Route key={path} path={path} exact={exact} component={component} {...rest} />
          ))}
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </DataProvider>
  );
}
