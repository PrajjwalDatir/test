import MessageHandler from '../Handlers/MessageHandler'
import BaseCommand from '../lib/BaseCommand'
import WAClient from '../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../typings'
import axios from 'axios'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'quote',
            description: 'random quote',
            category: 'fun',
            usage: `${client.config.prefix}quote`
        })
    }

    //eslint-disable-next-line
    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {
    await axios.get(`https://api.quotable.io/random`)

  .then(function (response) {

    // handle success

    console.log(response);
        let text= `👨‍💻 *content:* ${text.content || ''}\n👨‍🎨 *Artists:* ${text.artists || ' '}
           
        M.reply(text) 
     
       

  }
}
