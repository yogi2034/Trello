import { Client,Account,ID,Databases,Storage } from 'appwrite';
const client = new Client()

.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.APPWRITE_PROJECT_ID!) 

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };
