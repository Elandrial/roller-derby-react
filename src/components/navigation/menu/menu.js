import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorBoundary } from "react-error-boundary";
import menuData from '../../../data/menu.json';

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

export default function Menu(props) {
    function MenuItem({id,key=id, link, icon, name}){
        return (
            <li key={id}><a href={link}><span aria-hidden="true"><FontAwesomeIcon icon={['fas', icon]} /></span>{name}</a></li>
        );
    }

    return (
        <ErrorBoundary
            fallbackRender={fallbackRender}
            onError={logError}
          >
        <ul>
            
            {menuData.map(MenuItem)}
        </ul>
        </ErrorBoundary>
    );
  }