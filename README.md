# :green_book: API Testing with Cypress
This project contains an automated api testiing using Cypress. Given project verify the behavior of the users API, with the following requests: GET, POST and DELETE.

## :memo: Prerequisites:
- **[Node.js](https://nodejs.org/)** - Download and install the latest version with default settings; if you don't already have it.
- **[Visual Studio Code (VSCode)](https://code.visualstudio.com/)** - Download and install the latest version with default settings; if you don't already have it.
- Cypress requires Node.js in order to install. Supported versions are listed below: Node.js 18.x, 20.x, 22.x and above.


## :desktop_computer:	 Installing the project

You are going to need to clone a copy of the application onto your computer to follow along.

### Cloning with Git
If you are familiar with Git and already have it installed the easiest way to clone the repo is to run this command in your terminal.

> [!IMPORTANT]
> git clone **_https://github.com/zaidiaz23/UserAPICypress.git_**

Now that you have cloned the repo, you will need to install all of the npm packages and dependencies. 

### VSCode
Now that we have Node installed, we are going to need to open the repo in a text editor.
+ Within VSCode, you can open the repo via File > Open Folder
+ You can open the terminal via Terminal > New Terminal
+ Use the command prompt in order to follow the next steps.

### :pick:	Installing npm dependencies

```sh
npm install
```

### :hammer_and_pick:	 Installing dotenv dependency
```sh
npm install dotenv
```

### :bulb: Installing Cypress
```sh
npm install cypress --save-dev
```
Now that we have Cypress installed, we can launch our project with:

```sh
npm test
```

### :white_flower:	 Running the project:
+ It might display you the following screen. Just press `Continue`.
  ![1](https://github.com/user-attachments/assets/eef8e6e3-3484-4ba3-950c-70fe53634d1d)

+ Click on the “E2E Testing” button on the left to get started.
  ![2](https://github.com/user-attachments/assets/aa48f66a-717f-4a6e-849d-c512484dce11)

+ It will display you the Configuration Files. Just press `Continue`.
  ![3](https://github.com/user-attachments/assets/099d7601-e950-478a-9410-af1277a579f8)

+ It will ask you to choose a browser, you can opt for any.
  ![4](https://github.com/user-attachments/assets/b770f93c-99ca-4589-8780-23f9ea3648cb)

+ Start E2E Testing.
+ It will direct you to the home screen.
+ Go to the **_Specs_** section. 
+ Clic on the **_usersApi.cy.js_** file.


### :candy: Users API Testing
This project contains test cases to:
- :white_check_mark: Test to retrieve data from users
- :white_check_mark: Test to create a new user
- :white_check_mark: Test to delete an existing user

As well each test case has assertions for: 
- Validation for status code.
- Validation for response structure and content.


### :round_pushpin: Project structure:
- **cypress.config:** a file to configure any prerequisites.
- **.env:** file to save sensitify data, this is actually being submitted to the repo for testing purposes.
- **support:** folder to have any extra helpers.
- **pages:** folder to save the Page Object Models that might be needed. So apiPages.js has the logic with the methods that connect with the endpoints / keys.
- **fixtures:** folder to save files that contains data test.
- **e2e:** folder to save the test files.
