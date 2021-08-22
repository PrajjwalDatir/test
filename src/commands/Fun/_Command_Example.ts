import MessageHandler from '../Handlers/MessageHandler'
import BaseCommand from '../lib/BaseCommand'
import WAClient from '../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../typings'
import axios from 'axios'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'command_goes_here',
            description: 'command description',
            category: 'category',
            usage: `${client.config.prefix}command`
        })
    }

    //eslint-disable-next-line
    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {
    axios.get(`https://api.quotable.io/random`)

  .then(function (response) {

    // handle success

    console.log(response);

  })
}
