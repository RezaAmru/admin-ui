# Skenario dan Code Testing Halaman Register

## Tujuan testing

Testing ini memastikan halaman register di route `/register` dapat dibuka, menampilkan brand Finebank, menampilkan semua input utama, menerima input user, dan menjalankan validasi saat form kosong dikirim.

Test juga membersihkan `localStorage` sebelum halaman dimuat supaya state auth lama tidak membuat halaman otomatis berpindah ke dashboard.

## Daftar skenario testing

1. Register page content
   - Membersihkan `localStorage`.
   - Membuka `http://localhost:5173/register`.
   - Memastikan URL mengandung `/register`.
   - Memastikan brand/logo Finebank terlihat.
   - Memastikan input `name`, `email`, `password`, dan checkbox `terms` tersedia sesuai selector asli dari `FormSignUp.jsx`.
   - Memastikan tombol `Create account` terlihat.

2. Register form input
   - Mengisi field `name` dengan `John Doe`.
   - Mengisi field `email` dengan `test@example.com`.
   - Mengisi field `password` dengan `123456`.
   - Mencentang checkbox `terms`.
   - Memastikan value setiap input sesuai nilai yang diketik.

3. Empty form validation
   - Membuka halaman `/register`.
   - Klik tombol `Create account` tanpa mengisi form.
   - Memastikan form tidak valid menggunakan constraint validation native browser.
   - Memastikan input `name` memiliki pesan validasi native karena field wajib diisi.

## Code lengkap cypress/e2e/register.cy.js

```js
/* global cy, describe, expect, it */

const registerUrl = "http://localhost:5173/register";

function visitRegister() {
  cy.clearLocalStorage();
  cy.visit(registerUrl, {
    onBeforeLoad(win) {
      win.localStorage.clear();
    },
  });
}

describe("Register page", () => {
  it("shows the register page content", () => {
    visitRegister();

    cy.url().should("include", "/register");
    cy.contains(/finebank\.io/i).should("be.visible");

    cy.get("#name")
      .should("be.visible")
      .and("have.attr", "name", "name")
      .and("have.attr", "placeholder", "Tanzir Rahman");
    cy.get("#signup-email")
      .should("be.visible")
      .and("have.attr", "name", "email")
      .and("have.attr", "placeholder", "hello@example.com");
    cy.get("#signup-password")
      .should("be.visible")
      .and("have.attr", "name", "password")
      .and("have.attr", "placeholder", "********");
    cy.get("#terms")
      .should("be.visible")
      .and("have.attr", "name", "terms");

    cy.contains("button", /^create account$/i).should("be.visible");
  });

  it("accepts register form input", () => {
    visitRegister();

    cy.get("#name").type("John Doe").should("have.value", "John Doe");
    cy.get("#signup-email")
      .type("test@example.com")
      .should("have.value", "test@example.com");
    cy.get("#signup-password")
      .type("123456")
      .should("have.value", "123456");
    cy.get("#terms").check().should("be.checked");
  });

  it("shows native validation when the form is empty", () => {
    visitRegister();

    cy.contains("button", /^create account$/i).click();

    cy.url().should("include", "/register");
    cy.get("form").then(($form) => {
      expect($form[0].checkValidity()).to.equal(false);
    });
    cy.get("#name")
      .should("match", ":invalid")
      .then(($input) => {
        expect($input[0].validity.valueMissing).to.equal(true);
        expect($input[0].validationMessage).to.not.equal("");
      });
  });
});
```

## Cara menjalankan testing

1. `npm run dev`
2. `npx cypress open`
3. Pilih `E2E Testing`
4. Pilih browser
5. Pilih `register.cy.js`
