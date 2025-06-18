const apiKey = Cypress.env("X_API_KEY");
const getUsers = Cypress.env("GETUSERS");
const createUser = Cypress.env("CREATEUSER");
const deleteUser = Cypress.env("DELETEUSER");

class ApiPage {
  getUsers() {
    return cy.request({
      method: "GET",
      url: getUsers,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });
  }

  postUser(usersData) {
    return cy.fixture(usersData).then((requestBody) => {
      return cy.request({
        method: "POST",
        url: createUser,
        body: requestBody,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      });
    });
  }

  deleteUser() {
    return cy.request({
      method: "DELETE",
      url: deleteUser,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });
  }
}
export default new ApiPage();
