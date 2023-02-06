function main() {
  console.log("PRINTING ENV FROM NODEJS");
  console.log(
    `ENV_SECRET: ${process.env.ENV_SECRET.slice(0).toString().toLowerCase()}`
  );
}

main();
