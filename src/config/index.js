//this would contain some config data
const env = process.env.REACT_APP_ENV;
//env variables are variables that are used by the application
//details such as secret keys/envvironment are part of the env variables
//In react, environment variables are set in the package.json file and start with REACT_APP_

console.log(env);

let config = {
  baseURL: "http://localhost/",
};

switch (env.toUpperCase()) {
  case "STAGE":
    config.baseURL = "https://stage.skillsunion.com";
    break;
  case "PRODUCTION":
    config.baseURL = "https://skillsunion.com";
    break;
}

export default config;
