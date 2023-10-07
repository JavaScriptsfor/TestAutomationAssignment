import { IApiTesting } from "./IApiTesting.in";

export class ApiPage implements IApiTesting {
    createUser() {
        // Define the user data for account creation
        const userData = {
            userName: 'M_Farhan1',
            password: 'StrongP@swas321',
        };
        // Send a POST request to create the user account
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            headers: {
                'Content-Type': 'application/json',
            },
            body: userData,
        }).then((response) => {
            // Log the entire response for debugging
            cy.log(JSON.stringify(response.body));
            // Assertions on the response
            expect(response.status).to.equal(201);
            expect(response.body.username).to.equal(userData.userName);
        });
    }
    addListOfBooks() {
        // Generate the authentication token
        const credentials = {
            userName: 'your_username',
            password: 'your_password',
        };
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: credentials,
        }).then((response) => {
            // Ensure that the request for token generation was successful (status code 200)
            expect(response.status).to.equal(200);
            // Extract the authentication token from the response body
            const authToken = response.body.token;
            // Define the list of books to add
            const booksToAdd = [
                {
                    title: 'Book 1',
                    author: 'Author 1',
                },
                {
                    title: 'Book 2',
                    author: 'Author 2',
                },
            ];
            // Send a POST request to add the books with authentication headers
            cy.request({
                method: 'POST',
                url: 'https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksPost',
                headers: {
                    // Include the token in the Authorization header
                    Authorization: `Bearer ${authToken}`,
                },
                body: {
                    books: booksToAdd,
                },
            }).then((response) => {
                // Perform assertions on the response
                expect(response.status).to.equal(200);
            });
        });
    }
    removeAddedBook() {
        // Generate the authentication token
        let authToken;
        const credentials = {
            userName: 'your_username',
            password: 'your_password',
        };

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: credentials,
        }).then((response) => {
            // Ensure that the request for token generation was successful (status code 200)
            expect(response.status).to.equal(200);

            // Extract the authentication token from the response body and assign it to authToken
            authToken = response.body.token;
            cy.request({
                method: 'DELETE',
                url: `https://demoqa.com/swagger/#/BookStore/BookStoreV1BookDelete `,
                headers: {
                    // Include the token in the Authorization header
                    Authorization: `Bearer ${authToken}`,
                },
            }).then((response) => {
                // Perform assertions on the response
                expect(response.status).to.equal(200);
            });
        });
    }
}