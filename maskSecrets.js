const secrets = process.argv[2].split("\n");
secrets.map((secretLine) => {
  const [_, key] = secretLine.split("=");
  console.log(`::add-mask::${key}`);
});
