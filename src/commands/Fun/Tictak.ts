import MessageHandler from '../Handlers/MessageHandler'
import BaseCommand from '../lib/BaseCommand'
import WAClient from '../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../typings'
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const game = require("../lib/game");

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'tictak',
            description: 'Tiktaktoe',
            category: 'fun',
            usage: `${client.config.prefix}command`
        })
    }

    //eslint-disable-next-line
    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {let tictactoe = [];
          if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance) 
           case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':

                if (!isGroup)return reply(mess.OnlyGrup)

                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)

                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)

                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)

                if (mentioned.length !== 0){

						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)

                        let h = randomNomor(100)

                        mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance`), [sender, mentioned[0]], false)

                        tictactoe.push({

                            id: from,

                            status: null,

                            hadiah: h,

                            penantang: sender,

                            ditantang: mentioned[0],

                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']

                        })

                        gameAdd(sender, glimit)

                } else {

                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)

                }

                break                                                                  
}
