const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const NOTION_TOKEN = 'YOUR_NOTION_API_TOKEN';
const NOTION_DATABASE_ID = 'YOUR_NOTION_DATABASE_ID';
const DISCORD_BOT_TOKEN = 'YOUR_DISCORD_BOT_TOKEN'
const DISCORD_CHANNEL_ID = 'YOUR_DISCORD_CHANNEL_ID';

// Function to fetch Notion database content
async function fetchNotionDatabase() {
  const response = await axios.get(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2021-08-16', // Replace with the latest Notion API version
    },
  });

  return response.data.results;
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!clone-notion') {
    const databaseContent = await fetchNotionDatabase();

    for (const page of databaseContent) {
      const content = page.properties.YOUR_NOTION_PROPERTY_NAME.rich_text[0].text.content; // Adjust this to your Notion setup

      const channel = await client.channels.fetch(DISCORD_CHANNEL_ID);
      const post = await channel.send(content);

      // You can add additional logic here to handle attachments, formatting, etc.

      console.log(`Cloned Notion page: ${content}`);
    }
  }
});

// Log in to Discord with your bot token
client.login(DISCORD_BOT_TOKEN);
