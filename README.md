# Online Product Manager

A web application to add and display products online in real-time, built with HTML5, CSS3, and Vanilla JavaScript.
The system allows users to submit new products via a form and fetches a product list from FakeStore API.

---

## 🎯 Purpose

1. **Create** a simple web interface for managing products online.
2. **Practice** form handling, DOM manipulation, and asynchronous API requests using JavaScript.
3. **Learn** to fetch, display, and update data dynamically in a responsive layout.

## ✨ Key Features

- Add new products with title, price, description, image URL, and category.
- Display a live list of all products fetched from the API.
- Responsive form and product layout using CSS styling.
- Success and error messages for user feedback.
- Simple, clean UI for easy product management.

---

## 🛠️ Stack

| Layer	        | Technology                       |
|---------------|----------------------------------|
| Markup        |	HTML5                            |
| Styling	      | CSS3                             |
| Interactivity	| JavaScript (ES6)                 |
| API	          | FakeStore API                    |
| Icons/Fonts   |	Materialize CSS + Material Icons |

## ⚙️ Local Installation (Developers)

```bash
# 1. Clone repository
$ git clone https://github.com/yourusername/online-product-manager.git
$ cd online-product-manager

# 2. Open index.html in your browser
# Or use a live server extension (VS Code recommended) for dynamic updates.
```

Note: No server-side setup is required; the app interacts with the public FakeStore API.

---

## 🧠 How It Works

1. The user fills out the product form with title, price, description, image URL, and category.
2. JavaScript captures the form data and sends a POST request to the API.
3. On success, the new product is added to the local list and displayed immediately.
4. The app fetches the full product list from the API and renders each product dynamically using DOM manipulation.
5. Products are displayed with image, title, price, category, and description.

---

## 🚀 Future Improvements

- Add client-side validation for image URLs and numeric inputs.
- Implement product editing and deletion.
- Save products to a real backend database.
- Add filtering by category and search functionality.
- Enhance UI/UX with Materialize components or another framework.

## 🤝 Contributing

1. Fork the repository and create a new branch (git checkout -b feature/YourFeature).
2. Make clear and descriptive commits.
3. Open a Pull Request detailing your improvements or fixes.
