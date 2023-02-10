# Solera-Test

## Requirements

- Node JS
- Yarn

## Steps to run the program

1. Execute the `yarn install` command.
2. Copy the contents of `.env.example` to a `.env` file and fill in all the fields.
3. To run the server in development environment run the `yarn dev` command, otherwise run the `yarn build` command and then run `yarn start`.

## Server details

### Paths-UseCases

- **POST:** /user

  - Input

    ```json
    {
    	"username": "",
    	"password": ""
    }
    ```
  
  - Output
  
    ```json
    {
      "fullname": ""
    }
    ```
