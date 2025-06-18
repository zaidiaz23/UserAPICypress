import ApiPage from "../pages/apiPages";

describe("Users API", () => {

  context("Retrieve data from users", () => {
    it("Verify if it is possible to retrieve users", () => {
      ApiPage.getUsers().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys('page', 'per_page', 'total', 'total_pages', 'data', 'support');
      });
    });
  });

context('Create a new user', () => {
    it('Verify if it is possible to create a new user', () => {
        ApiPage.postUser('usersData').then((reqBody) => {
          expect(reqBody.status).to.eq(201);
          expect(reqBody.body).to.have.all.keys('name', 'id', 'job', 'createdAt');
        });
    });
});

context('Delete an user', () => {
    it('Verify if it is possible to delete an user', () => {
        ApiPage.deleteUser().then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty;
        });
    });
});

});
