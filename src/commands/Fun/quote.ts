import MessageHandler from '../Handlers/MessageHandler'

import BaseCommand from '../lib/BaseCommand'

import WAClient from '../lib/WAClient'

import { IParsedArgs, ISimplifiedMessage } from '../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'quote',

            description: 'command description',

            category: 'Fun',

            usage: `${client.config.prefix}quote`

        })

    }

    //eslint-disable-next-line

    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {
  

	const url = `https://api.quotable.io/random`;

	try {

		const response = await get(url);

		const json = JSON.parse(response.body);

		if (response.statusCode === 200) return await M.client.sendMessage(M.jid, '*📌 ' + text.QUOTE +'* ```' + json.content + '```\n\n' +

		'*✒️' + M.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);

	} catch {

		return await M.client.sendMessage(M.jid, M.NOT_FOUNDA, MessageType.text);

	}}

}
