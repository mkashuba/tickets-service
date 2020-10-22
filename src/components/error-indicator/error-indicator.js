import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Ooops! Something went wrong... Try again</span>
        </div>
    );
}

export default ErrorIndicator;