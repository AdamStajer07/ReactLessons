import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import FRParentInput from './components/FRParentInput';
import FocusInput from './components/FocusInput';
import Hero from './components/Hero';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <>
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      <ErrorBoundary>
        <Hero heroName={'Batman'}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Superman'}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Joker'}/>
      </ErrorBoundary>
    </>
  );
}

export default App;
