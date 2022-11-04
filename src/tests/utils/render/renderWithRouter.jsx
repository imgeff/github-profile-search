import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

export function renderWithRouter(component, {route = '/'} = {}) {
  window.history.pushState({}, 'Test page', route);
  return ({
    ...render(component, {wrapper: BrowserRouter}),
    user: userEvent.setup(),
  });
}
