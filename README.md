# Intro Component – Sign Up Form

A responsive sign-up form UI built as a Frontend Mentor challenge. The component includes real-time input validation, error state handling, and a clean two-column desktop layout.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── header/
│   │   └── Header.tsx
│   └── main/
│       ├── Main.tsx
│       └── inputs.json
├── App.tsx
├── index.css
└── main.tsx
public/
└── images/
    ├── bg-intro-mobile.png
    ├── bg-intro-desktop.png
    └── icon-error.svg
```

---

## 🛠️ Tech Stack

| Technology          | Purpose                   |
| ------------------- | ------------------------- |
| **React 19**        | UI component framework    |
| **TypeScript**      | Type-safe JavaScript      |
| **Tailwind CSS v4** | Utility-first styling     |
| **Vite**            | Build tool and dev server |

---

## ⚙️ How It Works

### Input State Management

Two state arrays track the status of each input field:

- `isEmpty` — holds IDs of fields that were submitted empty (triggers error styling)
- `isFull` — holds IDs of fields that have been filled in

### `handleInputValue(e, id)`

Fires on every `onChange` event. If the user clears a previously filled field, it moves that field's ID from `isFull` back to `isEmpty`. If the user types something, it removes it from `isEmpty` and adds it to `isFull`.

### `handleErrorInput()`

Called when the submit button is clicked. Loops through all inputs and adds any unfilled field IDs to `isEmpty`, visually marking them as errors.

### Form Validation

The `onSubmit` handler prevents form submission if any input is not in the `isFull` array, ensuring all fields must be completed before proceeding.

### Error UI

When a field is in the `isEmpty` state:

- The input gets a red border (`border-error`)
- An error icon appears on the right side via a background image
- An italic error message appears below the field (e.g. `"First Name cannot be empty"`)

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/DemetreBerdzenadze7/<repo-name>.git

# 2. Navigate into the project
cd <repo-name>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## 👤 Author

**Demetre Berdzenadze**

- GitHub: [@DemetreBerdzenadze7](https://github.com/DemetreBerdzenadze7)
