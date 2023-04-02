const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: "poll",
    desription: "creates a poll",
    run: async (client, message, args) => {
        const p = args.join("")
        if (!p) {
            message.channel.send("pls enter topic of poll")

        }
        const embedd = new EmbedBuilder()
            .setTitle("${p}")
            .setURL('https://www.twitch.tv/videos/1781982238')
            .setAuthor('made by ${message.author.username}')
            .setDescription('votekaro')

        message.channel.send({ embeds: [embedd] })
        const blon = (message) => {
            message.react("👍")
            message.react("👍")

        }
        blon(message)



    }

}