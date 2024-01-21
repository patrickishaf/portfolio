import ErrorBoundary from './components/Error/ErrorBoundary'
import Router from './navigation/router'

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App
