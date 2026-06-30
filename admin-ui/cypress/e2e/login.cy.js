/* global cy, Cypress, describe, expect, it */

const apiUrl = "https://jwt-auth-eight-neon.vercel.app";
const fakeToken =
  "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImhlbGxvQGV4YW1wbGUuY29tIiwiZXhwIjo0MTAyNDQ0ODAwfQ.";

function visitProtectedHome() {
  cy.clearLocalStorage();
  cy.visit("/", {
    onBeforeLoad(win) {
      win.localStorage.clear();
    },
  });
}

describe("Login page", () => {
  it("logs in with valid credentials and shows the dashboard shell", () => {
    cy.intercept("POST", `${apiUrl}/login`, (req) => {
      expect(req.body).to.deep.equal({
        email: "hello@example.com",
        password: "123456",
      });

      req.reply({
        body: {
          refreshToken: fakeToken,
        },
        statusCode: 200,
      });
    });
    cy.intercept("GET", `${apiUrl}/goals`, {
      body: {
        data: [
          {
            present_amount: 12500,
            target_amount: 20000,
          },
        ],
      },
      statusCode: 200,
    });

    visitProtectedHome();

    cy.url().should("include", "/login");
    cy.get("#email").type("hello@example.com");
    cy.get("#password").type("123456");
    cy.contains("button", /^login$/i).click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.get("nav").should("exist");
    cy.get("header").should("exist");
    cy.contains(/hello john/i).should("be.visible");
  });

  it("shows an error message for invalid credentials", () => {
    cy.intercept("POST", `${apiUrl}/login`, {
      body: {
        msg: "Wrong Password",
      },
      statusCode: 400,
    });

    visitProtectedHome();

    cy.url().should("include", "/login");
    cy.get("#email").type("hello@example.com");
    cy.get("#password").type("123");
    cy.contains("button", /^login$/i).click();

    cy.contains("Wrong Password").should("be.visible");
    cy.url().should("include", "/login");
  });
});
