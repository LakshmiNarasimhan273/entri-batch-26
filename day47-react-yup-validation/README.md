# React Form Validation with Yup – Student Notes

# What is Form Validation?

Form validation ensures that user input is correct before submitting data.

Examples:
- Email must be valid
- Password must be minimum 6 characters
- Required fields cannot be empty

---

# What is Yup?

Yup is a JavaScript schema validation library used to validate form data.

It helps define rules for input fields in a clean and structured way.

---

# Why Use Yup?

- Clean validation rules
- Easy to manage complex forms
- Reusable validation schema
- Better error handling

---

# Step 1: Install Yup

Inside your React project:

```bash
npm install yup
```

---

# Basic Validation Example (Without Form Library)

App.jsx

```jsx
import { useState } from "react";
import * as Yup from "yup";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation Schema
  const schema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ email, password }, { abortEarly: false });
      alert("Form Submitted Successfully");
      setErrors({});
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Form Validation with Yup</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
```

---

# How It Works

1. useState stores form input values.
2. Yup schema defines validation rules.
3. On submit:
   - schema.validate() checks data.
   - If valid → form submits.
   - If invalid → errors are shown.
4. abortEarly: false ensures all errors are displayed.

---

# Common Yup Validation Methods

Required:
```js
Yup.string().required("Field is required")
```

Email:
```js
Yup.string().email("Invalid email")
```

Minimum Length:
```js
Yup.string().min(6, "Minimum 6 characters")
```

Number Validation:
```js
Yup.number().required("Number is required")
```

---

# Real-Time Example

Login Form:
- Email required
- Password minimum length

Registration Form:
- Name required
- Email valid format
- Password strong
- Confirm password match

---

# Key Points to Remember

- Yup defines validation schema.
- Validation runs on form submission.
- Errors are stored in state.
- abortEarly: false shows all errors.
- Helps build secure and reliable forms.

---

# End Notes

Yup makes React form validation clean and structured.  
It is commonly used with or without form libraries like Formik.