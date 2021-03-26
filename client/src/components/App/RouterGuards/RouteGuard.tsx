import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
  isLoggedIn: boolean;
  logInPath: string;
} & RouteProps;

export default function ProtectedRoute({
  isLoggedIn,
  logInPath,
  ...routeProps
}: ProtectedRouteProps): JSX.Element {
  if (isLoggedIn) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: logInPath }} />;
  }
}
