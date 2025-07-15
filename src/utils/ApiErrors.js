class ApiError extends Error {
    constructor(
        statusCode,                          // HTTP status code like 400, 404, 500
        message = "Something went wrong",    // Default error message
        errors = [],                          // Optional array of detailed error info
        stack = ""                           // Optional custom stack trace
    ) {
        super(message);                      // Call the built-in Error constructor

        this.statusCode = statusCode;        // Custom status code
        this.data = null;                    // No data when there's an error
        this.message = message;              // Error message
        this.success = false;                // Always false for error
        this.errors = errors;                 // Array of error details

        if (stack) {
            this.stack = stack;              // Use provided stack trace
        } else {
            Error.captureStackTrace(this, this.constructor); // Auto-capture
        }
    }
}

export { ApiError };
