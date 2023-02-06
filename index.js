function main() {
  console.log("PRINTING ENV FROM NODEJS");
  throw new Error(`ENV_SECRET: ${process.env.ENV_SECRET}`);
}

main();
