import './App.css';
import { ErrorBoundary } from "react-error-boundary";
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import registerIcons from './utility/fontawesomeicons/fontawesomeicons';

registerIcons();

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
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>  
  );
}

export default App;
