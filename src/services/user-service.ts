import create from "./http-service";

export interface User {
    id: number;
    name: string;
  }

// define api endpoint here
export default create('/users')