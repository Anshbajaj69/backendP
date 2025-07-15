class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // HTTP code like 200, 201
    this.data = data;             // Actual data to return
    this.message = message;       // Optional success message
    this.success = statusCode < 400; // true if success, false if error
  }
}

export { ApiResponse };
