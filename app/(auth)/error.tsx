"use client";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-24 h-24 text-destructive" />
        </div>
        <h1 className="text-5xl font-bold text-primary mb-4">Error</h1>
        <h2 className="text-xl font-semibold mb-4">Something Went Wrong</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
          It seems that something went wrong. This can be a mistake from our
          end, but don&apos;t worry we&apos;ll fix it as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="text-sm flex items-center justify-center px-3 py-1.5 bg-rose-600 text-white rounded-md hover:bg-rose-600/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="text-sm flex items-center justify-center px-3 py-1.5 cursor-pointer border border-input bg-background rounded-md hover:bg-accent hover:text-white transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        If this problem persists, please contact me at{" "}
        <Link href="mailto:danishsidd203@gmail.com">
          danishsidd203@gmail.com
        </Link>
        .
      </footer>
    </div>
  );
};

export default ErrorPage;
