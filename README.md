# Intro Component with Sign Up Form

A responsive sign up form with client-side validation, built as a Frontend Mentor challenge.

---

## Description

This is a sign up form where users can register by entering their first name, last name, email address, and password. The form validates all fields on submit and shows contextual error messages per field. Errors clear as the user starts correcting them.

---

## Project Structure

```
src/
├── components/
│   ├── header/
│   │   └── Header.tsx        # Left-side heading and description
│   └── main/
│       ├── Main.tsx          # Form logic and rendering
│       └── inputs.json       # Input field definitions (type, name, placeholder)
├── App.tsx                   # Root layout
└── index.css
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Vite | Build tool |

---

## How It Works

### Controlled Inputs via JSON Config
All input fields are defined in `inputs.json`. A single `map()` renders them all. `input.name` maps directly to both `Values` and `Errors` state keys using `as keyof Values` / `as keyof Errors`, so no input needs its own handler.

### State Management
Two state objects manage the form:
- `values` — stores what the user types into each field
- `errors` — stores an error message string per field (`""` means no error)

```tsx
const [values, setValues] = useState<Values>({
  firstName: "", lastName: "", email: "", password: "",
});

const [errors, setErrors] = useState<Errors>({
  firstName: "", lastName: "", email: "", password: "",
});
```

### handleChange — Universal Change Handler
One function handles all inputs. It updates the correct field using the input's `name` attribute and clears that field's error as the user starts typing.

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setValues({ ...values, [e.target.name]: e.target.value });
  setErrors({ ...errors, [e.target.name]: "" });
}
```

### handleSubmit — Validation on Submit
On submit, every field is validated. Empty fields get a "cannot be empty" message. Email gets an extra regex check — if it's filled in but invalid, it shows a different message.

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setErrors({
    firstName: !values.firstName ? "First name cannot be empty" : "",
    lastName: !values.lastName ? "Last name cannot be empty" : "",
    email: !values.email
      ? "Email cannot be empty"
      : !emailRegex.test(values.email)
        ? "Looks like this is not an email"
        : "",
    password: !values.password ? "Password cannot be empty" : "",
  });
}
```

### Error Display
Each input has a `<span>` below it. Since errors are strings, an empty string `""` is falsy — so nothing renders when there's no error. When there is an error, the message appears and the input border turns red.

```tsx
<span>{errors[input.name as keyof Errors]}</span>
```

---

## Installation

```bash
git clone https://github.com/DemetreBerdzenadze7/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## Author

**Demetre Berdzenadze**
GitHub: [https://github.com/DemetreBerdzenadze7](https://github.com/DemetreBerdzenadze7)