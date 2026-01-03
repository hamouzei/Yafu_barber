// @ts-nocheck
import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="min-h-screen bg-brand-dark flex items-center justify-center p-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-2xl w-full bg-brand-gray border border-white/10 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="text-red-500" size={40} />
              </div>
            </div>

            <h1 className="text-3xl font-heading uppercase text-white mb-4">
              Oops! Something Went Wrong
            </h1>

            <p className="text-brand-lightGray mb-8">
              We apologize for the inconvenience. An unexpected error occurred
              while rendering this page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-8 py-3 font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-brand-gray hover:bg-white/10 text-white px-8 py-3 font-bold uppercase tracking-widest transition-all border border-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Go Home
              </button>
            </div>

            <p className="text-sm text-brand-lightGray mt-8">
              If this problem persists, please contact us at{" "}
              <a
                href="mailto:yafubarber66@gmail.com"
                className="text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                yafubarber66@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
