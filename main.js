// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./c.json');
const fs = require('fs')
const path = path('path')



const prefix = "-"

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

const foldersPath = path.join(d, js, "commands")
const commandFolders = fs.readdirSync(foldersPath)

for (folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder)
    const commandsFile = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

    for (file of commandsFile) {
        const filefinalp = path.join(commandsPath, file)
        const command = require(filefinalp)

        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command)
        }
        else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }


    }
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

});
client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    let args;
    // handle messages in a guild
    if (message.guild) {
        let prefix;



        // if we found a prefix, setup args; otherwise, this isn't a command
        if (!prefix) return;
        args = message.content.slice(prefix.length).trim().split(/\s+/);
    } else {
        // handle DMs
        const slice = message.content.startsWith(globalPrefix) ? globalPrefix.length : 0;
        args = message.content.slice(slice).split(/\s+/);
    }

    // get the first space-delimited argument after the prefix as the command
    const command = args.shift().toLowerCase();
});

/*client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

})*/






// Log in to Discord with your client's token
client.login(token);