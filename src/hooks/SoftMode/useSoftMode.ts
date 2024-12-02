import React from 'react';
import ISoftModeContextValues from '../../contexts/SoftMode/ISoftModeContextValues';
import SoftModeContext from '../../contexts/SoftMode/SoftModeContextProvider';
const useSoftMode = (): ISoftModeContextValues => {
    const context = React.useContext(SoftModeContext);
    if (context === undefined) {
      throw new Error('useSoftMode must be used within a SoftModeProvider');
    }
    return context;
};

export default useSoftMode;