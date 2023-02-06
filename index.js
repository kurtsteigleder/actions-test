function main() {
  console.log("PRINTING ENV FROM NODEJS");
  console.log(process.env);
  if (!process.env.ENV_SECRET) {
    throw new Error("var not found");
  }
  if (process.env.ENV_SECRET) {
    throw new Error("SECRET FOUND: ", process.env.ENV_SECRET);
  }
}

main();
