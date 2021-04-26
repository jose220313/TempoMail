import { BrowserRouter, Route, Switch } from "react-router-dom";
import { userRoutes } from "./routes/index.routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {userRoutes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
