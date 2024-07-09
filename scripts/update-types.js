const { exec: _exec } = require("child_process");
const { promisify } = require("util");
const exec = promisify(_exec);
const dotenv = require("dotenv");

// PRE-REQUISITES: Docker must be installed and running

dotenv.config();
// use this solution to obscure the connection string in the code
const connection_string = process.env.CONNECTION_STRING;
const destination = 'libs/supabase-shared/src/types/supabase.ts';
(async () => {
  // exec pwd 
  const { stdout: pwd } = await exec("pwd");
  console.log(pwd);
  const { stdout, stderr } = await exec(
    `npx supabase gen types typescript --db-url ${connection_string} --schema public > ${destination}`
  );
  console.log(stdout);
  console.error(stderr);
})();
