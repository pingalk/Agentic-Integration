import { useState } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { Login } from './components/auth/Login';
import { DemoProvider } from '../context/DemoContext'; 
import { DemoControls } from './components/DemoControls';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialViewConfig, setInitialViewConfig] = useState<{
    view: string;
    variants: { home: string; transactions: string };
  }>({
    view: 'home',
    variants: { home: 'B', transactions: 'A' }
  });

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <Login 
        onLoginSuccess={handleLoginSuccess} 
        currentConfig={initialViewConfig}
        onConfigChange={setInitialViewConfig}
      />
    );
  }

  return (
    <>
      <Dashboard initialConfig={initialViewConfig} onLogout={handleLogout} />
      <DemoControls />
    </>
  );
}

function App() {
  return (
    <DemoProvider>
      <AppContent />
    </DemoProvider>
  );
}

export default App;