import './App.css';
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const logError = (error, info) => {
  // TODO: Do something with the error
};

function App() {
  return (
    <ErrorBoundary
        fallbackRender={fallbackRender}
        onError={logError}
      >
      </ErrorBoundary>  
  );
}

export default App;
