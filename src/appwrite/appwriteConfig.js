import { Client,Account } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65f05643bfb65bf4661c');

export const account = new Account(client)      