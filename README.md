# 📝 Simple Web Notepad

A lightweight and responsive web-based Notepad application built using **HTML5**, **CSS3**, and **JavaScript (DOM Manipulation)**. This project allows users to write notes in a text area, automatically split them into individual lines or bullet points on a single click, and display them cleanly.

---

## 🚀 Features

* **Dynamic Text Splitting:** Automatically breaks down multi-line text or sentences into a structured list (`<ol>`) using regular expressions (`split(/[.\n]+/)`).
* **Clean List Rendering:** Instantly updates the UI by clearing old entries and rendering fresh lists on every button click.
* **Input Validation:** Ignores empty spaces and blank lines using `.trim()` to keep the output neat and tidy.
* **Responsive Design:** Styled nicely to look great on both mobile phones and desktop screens.

---

## 🛠️ Technologies Used

* **HTML5:** Structuring the user interface (Textarea, Button, Ordered List).
* **CSS3:** Flexbox, styling cards, and responsive layout adjustments.
* **JavaScript (ES6):** Event listeners, DOM manipulation (`createElement`, `appendChild`), and string manipulation methods.

---

## 💻 How to Run Locally

1. Clone or download this repository to your local machine.
2. Extract the files (if downloaded as a ZIP).
3. Open the `index.html` file in any modern web browser.

---

## 📂 Project Structure

```text
├── index.html    # Main HTML structure
├── style.css     # Styling and responsive design
└── script.js     # JavaScript logic for event handling and text processing

