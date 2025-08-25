import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: '#f8f9fa',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2 style={{ color: '#dc3545', marginBottom: '1rem' }}>
                        Something went wrong!
                    </h2>
                    <details style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #dee2e6',
                        maxWidth: '600px',
                        textAlign: 'left'
                    }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                            Click to see error details
                        </summary>
                        <pre style={{ fontSize: '0.8rem', overflow: 'auto' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </pre>
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            background: '#67BE78',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;