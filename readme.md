# lone
**lone** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/darxan/lone@latest! | sudo bash
```
`darxan/lone` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)

# Msg customTransaction 
# sender
# receiver
# amount 
# feePercentage 
# feeReceiver
# serviceName

1-bulb  
2-peanut 
3-own 
4-bright 
5-sauce 
6-circle 
7-whisper 
8-educate 
9-party 
10-snack 
11-very 
12-unique 
13-afford 
14-conduct 
15-kidney 
16-metal 
17-trouble 
18-lizard 
19-what 
20-brother 
21-combine 
22-move 
23-essence 
24-jewel

# Custom transaction
# loned tx lone custom-transaction alice cosmos10g4a4hspjfjmtc2jx3akpnaznxftayr3lpn8vz 29stake 1 bob anorBank --from alice

# Send transaction 
# loned tx bank send bob  cosmos10g4a4hspjfjmtc2jx3akpnaznxftayr3lpn8vz 10stake

# Get custom transaction list
# loned q lone list-whois