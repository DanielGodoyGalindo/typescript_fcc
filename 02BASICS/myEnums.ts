// In TypeScript, enums (enumerations) are a way to define a set of named values that represent a group of related constants.
// They help make the code more readable and type-safe by avoiding the use of “magic” or arbitrary values (such as raw strings or numbers without context).

enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let errorNum = Status.Success
console.log(errorNum); // 200

// Example
enum ResponseStatus {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

function handleResponse(status: ResponseStatus) {
  if (status === ResponseStatus.Success) {
    console.log("Operation successful!");
  } else if (status === ResponseStatus.Error) {
    console.log("Something went wrong.");
  } else {
    console.log("Loading...");
  }
}

handleResponse(ResponseStatus.Success);

export { }