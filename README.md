# 🌐 Personal Portfolio Website Documentation (HTML, CSS & JavaScript)

---

## 📌 Project Description

This project is a **Personal Portfolio Website** developed using **HTML, CSS, and JavaScript**.
It is designed to showcase personal information, skills, and provide a contact form for communication.

The website uses:

* **HTML** for structure
* **CSS** for styling and layout
* **JavaScript** for interactivity (form handling)

---

## 🛠️ Technologies Used

* **HTML5**

  * Semantic elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
  * Form elements for user input

* **CSS3**

  * Layout and design
  * Flexbox for alignment
  * Styling for buttons, forms, and sections

* **JavaScript**

  * Form submission handling
  * DOM manipulation
  * Event handling

---

## 📁 Project Structure

```id="0lr0aq"
Portfolio/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ Setup Instructions

1. Install a code editor (e.g., VS Code)
2. Create a folder named `Portfolio`
3. Create three files:

   * `index.html`
   * `style.css`
   * `script.js`
4. Copy the respective code into each file
5. Link CSS and JS in HTML:

```id="t1g4t2"
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

6. Open `index.html` in a browser

---

## 🧱 HTML Structure Explanation

### 1. Document Setup

* `<!DOCTYPE html>` defines HTML5
* `<html lang="en">` sets language

### 2. Head Section

* Includes meta tags and title
* Links external CSS file

### 3. Header & Navigation

* `<header>` contains website title
* `<nav>` includes links to sections

### 4. About Section

* Displays profile image and introduction
* Includes resume download button

### 5. Skills Section

* Uses `<ul>` and `<li>` to list skills

### 6. Contact Section

* Includes form elements:

  * Name input
  * Email input
  * Message textarea
* Uses `required` for validation

### 7. Footer

* Displays copyright

---

## 🎨 CSS Styling Explanation

### 1. Global Styling

* Reset margin and padding using `*` selector
* Set font family

### 2. Header Styling

* Background color
* Center alignment
* Navigation menu styled using Flexbox

### 3. Section Styling

* White background
* Padding and margin
* Rounded corners
* Box shadow

### 4. Image Styling

* Circular image using `border-radius: 50%`
* Center alignment

### 5. Form Styling

* Inputs styled with padding and border
* Button styled with hover effect

### 6. Resume Button

* Styled using background color and padding
* Hover effect for interactivity

---

## ⚙️ JavaScript Functionality

### 1. Form Submission Handling

* Prevents page reload using:

```id="0bp0ko"
event.preventDefault();
```

### 2. Success Message Display

* Displays confirmation message after submission

### 3. Form Reset

* Clears input fields after submission:

```id="p5rvfd"
form.reset();
```

### 4. Event Listener

* Listens for form submission:

```id="4ibbxu"
form.addEventListener("submit", function(event){ ... });
```

---

## 📷 Screenshots

(Add screenshots here)

Examples:

* Homepage
* About Section
* Skills Section
* Contact Form

---

## ✏️ Customization

* Update profile image and text
* Modify skills list
* Add new sections (Projects, Education, etc.)
* Change colors and layout in CSS
* Add more JavaScript features

---

## 📄 Conclusion

This project demonstrates a complete front-end development workflow using **HTML, CSS, and JavaScript**.
It provides a solid foundation for building responsive and interactive web applications.

---

## 👨‍💻 Author

Aman Yadav
