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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f7fafc'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#2d3748' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ color: '#718096', marginBottom: '20px' }}>
            The game encountered an error. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: '#fff5f5',
              borderRadius: '5px',
              maxWidth: '600px',
              textAlign: 'left'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#c53030' }}>
                Error Details (Development Only)
              </summary>
              <pre style={{
                marginTop: '10px',
                fontSize: '12px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                color: '#742a2a'
              }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#4299e1',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3182ce'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4299e1'}
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
