const envFields = ["BASE_URL"] as const;

type EnvKey = (typeof envFields)[number];
type IEnv = Record<EnvKey, string>;

const envConfig = {} as IEnv;
const missingEnvs: string[] = [];

envFields.forEach((field) => {
  const value = import.meta.env[`VITE_${field}`];

  if (value) {
    envConfig[field as keyof IEnv] = value;
  } else {
    missingEnvs.push(field);
  }
});

// Showing missing envs
const blue = (s: string) => `\x1b[34m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;

if (missingEnvs.length > 0) {
  const err =
    "\n================================\n" +
    yellow(" Missing") +
    " environment variables:" +
    "\n" +
    missingEnvs
      .map((k) => `    ${blue(k)}: ${yellow("undefined")}`)
      .join("\n") +
    "\n================================\n";
  console.log(err);
}

export default envConfig;
