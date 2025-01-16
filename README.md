# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data fetching methods.  The `bug.js` file shows how attempting to access data before it's fully loaded can lead to errors. The `bugSolution.js` demonstrates the proper use of `.then()` or `async/await` to handle this situation correctly.

## Problem:
Accessing Firebase data (from `getDocs()` or `getDoc()`) before the promise resolves results in undefined values and errors.

## Solution:
Always use `.then()` to handle the promise or use `async/await` to ensure the data is loaded before accessing it.