import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'help',

            description: 'Displays the help menu or shows the info of the command provided',

            category: 'general',

            usage: `${client.config.prefix}help (command_name)`,

            dm: true,

            aliases: ['h']

        })

    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {

        if (!parsedArgs.joined) {

            const commands = this.handler.commands.keys()

            const categories: { [key: string]: ICommand[] } = {}

            for (const command of commands) {

                const info = this.handler.commands.get(command)

                if (!command) continue

                if (!info?.config?.category || info.config.category === 'dev') continue

                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)

                else {

                    categories[info.config.category] = []

                    categories[info.config.category].push(info)

                }

            }

            let text = `ð§ââï¸ *ê§à¼Kazukenà¼ê§'s Command List* ð§ââï¸\n\n`

            const keys = Object.keys(categories)

            for (const key of keys)

                text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}*\nâ \`\`\`${categories[

                    key

                ]

                    .map((command) => command.config?.command)

                    .join(', ')}\`\`\`\n\n`

            return void M.reply(

                `${text} ðï¸ *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`

            )

        }

        const key = parsedArgs.joined.toLowerCase()

        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)

        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)

        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })

        M.reply(

            `ð« *Command:* ${this.client.util.capitalize(command.config?.command)}\nðï¸ *Status:* ${

                state ? 'Disabled' : 'Available'

            }\nð *Category:* ${this.client.util.capitalize(command.config?.category || '')}${

                command.config.aliases

                    ? `\nð¥ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`

                    : ''

            }\nð *Group Only:* ${this.client.util.capitalize(

                JSON.stringify(!command.config.dm ?? true)

            )}\nð *Usage:* ${command.config?.usage || ''}\n\nð *Description:* ${command.config?.description || ''}`

        )

    }

    emojis = ['ð', 'ð´', 'ð®', 'ð', 'ð', 'âï¸', 'ð']

}
