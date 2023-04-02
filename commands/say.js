module.exports = {
    name: "say",
    description: "repeats what you said",
    run: async (message, args) => {
        if (!args.join("")) {
            message.channel.send("please enter something to send")
        }
        message.channel.send(args.join(""))
    }
} 