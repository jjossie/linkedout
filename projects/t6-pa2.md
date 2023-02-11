# Topic 6: Programming Assignment 2

In this assignment, you will deploy your frontend and backend applications to Vercel and configure environment variables.

## Requirements

- After you have downloaded this file, place it in your `professional-network` repository in the `projects` directory.
- Create a branch called **t6-pa2**.
- You'll want to read through [this](https://vercel.com/docs/concepts/monorepos) guide for deploying monorepos on Vercel
- Deploy your backend application
  - [This guide can be helpful](https://vercel.com/guides/using-express-with-vercel#standalone-express)
  - You'll need to have your backend converted to CommonJS. ES Modules do not work, unfortunately
- Deploy your frontend application
  - Create a `.env` file that has a variable for your backend
    - You'll need to change all references to `localhost` to use the environment variable instead
  - On Vercel, add an environment variable that points your deployed frontend to your deployed backend
  - Redeploy your frontend application so that it will now use the new environment variable

## Additional Requirements

This is catch up week, so please get completely caught up with all other assignments.

## Optional Requirements

If you are completely caught up, here is an optional requirement that you might find interesting:

Add Swagger to your application

- Install dependencies: `npm i swagger-autogen swagger-ui-express`
- Implement `swagger.js`: [npm swagger autogen](https://www.npmjs.com/package/swagger-autogen)
- Add script to run `swagger.js`
- Add `swaggerUi` and import `swagger.json` (You should have this when you run your autogen script) to your `app.js`
- Add a route to use `'/api-docs'` to connect to swaggerUi: [stack overflow help](https://stackoverflow.com/questions/65069214/how-to-use-routing-controllers-with-swagger-ui)
- Run `autogen` script again to update your `swagger.json`
- Go to your `localhost:[your port]/api-docs` and you should see your swagger Ui.
