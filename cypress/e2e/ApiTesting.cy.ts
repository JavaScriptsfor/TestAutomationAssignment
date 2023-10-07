import { ApiPage } from "../../PageObjects/HomePage/ApiTesting/ApiTesting.po";

let apiPage: ApiPage;

describe('Create User Account API Test', () => {

    apiPage = new ApiPage()
    it('should create a user account', () => {
        apiPage.createUser();
    });
    it('Add Books for User', () => {
        apiPage.addListOfBooks();
    });
    it('Should remove a book for the user', () => {
        apiPage.removeAddedBook();
    });

});
