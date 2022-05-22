# SLink back-end
In order to get the SLink back-end up and running, you must follow all the steps below in order.

### Steps to deploy the smart contract:

You need to deploy the smart contract on the Ethereum Blockchain network. You can choose to use the main network or a test network, such as the Rinkeby network. Please note that on the network where you deploy, you will need Ether to pay commissions.

It is recommended to deploy from Remix with MetaMask, although there are many options for this. Remix is a smart contract development environment that also allows you to deploy smart contracts using a wallet like Metamask.

The first thing you need is to have the MetaMask extension in your browser (Chrome is recommended for these steps) with an address connected to the desired Ethereum network with a certain amount of Ether enough to pay commissions. You can check all the information about MetaMask on its [website](https://metamask.io/), and you can get Ether for the Rinkeby testnet at this [link](https://faucets.chain.link/).

Next, you need to connect MetaMask to Remix to finish deploying the smart contract by [following these steps](https://remix-ide.readthedocs.io/en/latest/create_deploy.html), where you need to select the "Injected Web3" option in the "ENVIROMENT" option.

To finish this part, you must call the smart contract methods that allow you to add the elements (services, licenses...) of the SLA within it. This must be in accordance with the configuration of the elements of an SLA in the front-end.

*The smart contract file is: **/Slink.sol***

### Steps to deploy the subgraph of The Graph:

The Graph has extensive documentation for deploying a subgraph [here](https://thegraph.com/docs/en/developer/quick-start/).

If you want to get **GRT** (The Graph token) on the Rinkeby testnet, you will need to contact The Graph developer team via their [discord channel](https://discord.gg/vtvv7FP).

*The subgraph files are in: **/The Graph***

### Steps to deploy backend server:
First to all, you need to have a MySQL instance with the database. There are multiple ways to do this depending on the operating system and personal preferences.

If you don't have a MySQL instance on your computer, you can get the download and steps for it on [their website](https://www.mysql.com/downloads/).

Once you have a MySQL instance, you must execute the ***schema.sql*** file that you will find in the root of the project to have the database that the SLink server uses for sensitive data.

Next, you need to have Node.js installed on your machine. If you don't have it, visit the [Node page](https://nodejs.org/) and follow the installation steps for your environment.

Then, from a console, run the following command to start the server at 2000 port:
```
npm install
node app.js
```
*For testing without using the front-end, a collection of calls for [Postman](https://www.postman.com/) is provided along with the environment used for them. The calls are the **postman_collection.json** file and the environment is the **postman_environment.json** file.*
