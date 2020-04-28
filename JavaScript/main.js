const { default: { get, post, patch, delete: cancel } } = require("axios");

exports.Webhook = class {
    constructor(channelID = String(), token = String()) {
        this.channel = channelID;
        this.token = token;
        this.api = `https://discordapp.com/api/webhooks/${this.channel}/${this.token}`;
    }

    async info() {
        return typeof (await get(this.api)) !== undefined ? (await get(this.api)).data : "Not A Valid Webhook";
    }

    async send(options = { content: "", embed: {} }) {
        let params = {
            content: options.content
        };

        if (options.embed) {
            options.embed.color = 0x36393F;
            params['embeds'] = [options.embed];
        }

        await post(this.api, params, { headers: { "Content-Type": "application/json" } });
        return true;
    }

    async edit(update = { name: String(), avatar: String() }) {
        await patch(this.api, { name: name, avatar: avatar }, { headers: { "Content-Type": "application/json" } });
        return true;
    }

    async delete() {
        await cancel(this.api);
        return true;
    }
}
