import React from 'react';
import ISoftModeContextValues from './ISoftModeContextValues';
import ISoftModeProviderProps from './ISoftModeProviderProps';

// Initialize the context with a default value
const SoftModeContext = React.createContext<ISoftModeContextValues | undefined>(undefined);

export const SoftModeProvider: React.FC<ISoftModeProviderProps> = ({ children }) => {
  const [isSoftMode, setSoftMode] = React.useState<boolean>(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode === 'dark';
  });
  
  React.useEffect(() => {
    const bodyEle = document.body.classList;
    if (isSoftMode) {
      localStorage.setItem('mode', 'dark');
      bodyEle.add('dark', 'bg-gray-800');
      bodyEle.remove('bg-[#FFFFFF]');
    } else {
      localStorage.setItem('mode', 'light');
      bodyEle.remove('dark', 'bg-gray-800');
      bodyEle.add('bg-[#FFFFFF]');
    }
  }, [isSoftMode]);
  
  // Memoize context value to prevent unnecessary re-renders
  const value = React.useMemo(() => ({ isSoftMode, setSoftMode }), [isSoftMode]);
  
  return (
    <SoftModeContext.Provider value={value}>
      {children}
    </SoftModeContext.Provider>
  );
};

export default SoftModeContext;