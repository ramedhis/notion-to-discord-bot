# Notion to Discord

## Overview

A Discord bot that clones and syncs your Notion database entries to your designated channel(s) inside your Discord server automatically. Best use for integrated CMS using Notion with Discord.

Made using [discord.js](https://github.com/discordjs/discord.js) and [axios](https://github.com/axios/axios).

### Featuers
- Clones (read and write) all the pages (and their entire content) into your designated Discord channel. The channel needs to be a Forum-type channel.

    Below are the equivalent of term in each platform system, written in order from the highest hierarcy to the lowest.

    | Discord            | Notion              |
    | ------------------ | ------------------- |
    | Server             | Workspace           |
    | Forum-type channel | Database page       |
    | Post (thread post) | Page                |
    | Message            | Content of the page |

    It will clone any existing Pages from your chosen Database prior to adding the bot to your server and will later also automatically add any new ones. Please note that you need to include `Publish` property filled with `Yes` on your Notion page for the bot to clone the page.

- Updates the Post(s) each time you make changes to any of your Notion Pages.

    How updating works using the Bot: 

    If you decide to change the Title of your Page on Notion, the bot will automatically push a change of title to the corresponding Post on your Discord server. That goes the same to the content.

- Changelog notifications. 

### Requirements

- Discord Bot
- Notion API key
- Node.js
- Code Editor

If you have already fulfilled all the requirements, you can go [here](#) to start configuring the code. Otherwise, follow the [instructions](#instcution) below.

## Instruction

Below are the instructions to help you run the bot on your machine. 

### Set Up the Discord Bot

#### Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications). 
2. Click on **New Application** and give it a name. Note that it is not going to be your bot name. 
3. You may also change the app icon to your desire on **General Information** or add some tags for description use. 
4. Click on **Bot** and then click the **Add Bot** button. 
5. Fill the username for your bot. You may also change the bot icon to your liking. 
6. Under Token section, click on **Reset Token** and click the **Copy** button to copy the address. Paste/store it to somewhere safe as this information is highly sensitive. *You'll need this later to authenticate your bot.* 
7. Make sure to unchecked the **Requires Oauth2 Code Grant** under the **Authorization Flow** section. 

#### Add the Bot to Your Discord Server

1. Go to the **OAuth2** > **OAuth2 URL Generator** then select the **bot** scope. 
2. In the **Bot Permissions** section, select the permissions your bot will need. At the very least, it will need "Read Messages" and "Send Messages" permissions. 
3. **Copy** the generated URL and paste it into your browser. Follow the prompts to add the bot to your desired server. Save the URL if necessary.
4. Done. 

### Set Up Notion API and Database

#### Obtain the Notion API key

1. Go to [Notion API](https://developers.notion.com/). 
2. Click on **View my integrations** on the top-right of the page. 
3. Click on **New integration** button. 
4. Select a workspace to install the integration to under **Associated workspace**. 
5. Fill the name, then **Submit**. 
6. Open the integration you've just created, then go to **Capabilities**. Check all the boxes for Content Capabilities, then **Save Changes**. 
7. Go to **Secrets**, and click on **show** button under Internal Integration Secret, then **copy** the key to somewhere safe. *This is your Notion API key.* 

#### Integrate Your Database

For the bot to work, you need a Notion database (db). You can use any existing db from any workspace, or create a new one. 

1. Go to your desired Notion database page.
2. Click on **three-dots** button on the top-right. 
3. Scroll down until you see **+Add connections** and look for the name of integration you just created. Then, **Confirm**.
4. Copy your Notion Database ID.

> To do that, you just have to check your database URL. It should look like this:
>
>> `https://www.notion.so/<myWorkSpace>/<databaseID>?v=<viewID>`
>
> Copy `databaseID`. *That's your Database ID.*  



