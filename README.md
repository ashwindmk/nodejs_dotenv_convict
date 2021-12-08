# Node-JS Dotenv Convict

Demo project.

### Set-up
```shell
cd <project>
npm i
```

### Run
```shell
npm start
```

```shell
npm run start:dev
```

### Observations

- Convict will automatically get the values from the environment (.env) if `env` is specified in the schema.
- Convict will give the values as number or boolean, whereas `.env` will only give you string types.
- Loaded config JSON file will override the defaults but will not override the env variables.
- Priority: arg > env > json-file > default

### References

- https://github.com/mozilla/node-convict/tree/master/packages/convict
- https://github.com/motdotla/dotenv

**Recommended**: https://www.npmjs.com/package/dotenv-safe
