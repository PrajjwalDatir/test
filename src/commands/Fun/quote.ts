import MessageHandler from '../Handlers/MessageHandler'

import BaseCommand from '../lib/BaseCommand'

import WAClient from '../lib/WAClient'

import { IParsedArgs, ISimplifiedMessage } from '../typings'
import axios from 'axios'
export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'quote',

            description: 'random quotes',

            category: 'fun',

            usage: `${client.config.prefix}quote`

        })

    }

    //eslint-disable-next-line

    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {
    await axios.get('https://api.quotable.io/random') 
                  
      

            

     

          
        return void M.reply('Quotes: {$quote}

        }
    }

}
