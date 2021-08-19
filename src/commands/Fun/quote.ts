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
    const url = "https://api.quotable.io/random";

function generateQuote(){

   fetch(url)

  .then(function(data) {

         return data.json();

    })

    .then(function(data){    

    document.getElementById("quote").innerHTML = data.content; document.querySelector(".author").innerHTML = "- " + data.author;

   })

 .catch(function(err) {

    console.log(err); 

    });

 }

 // Repeat generateQuote() every 10 seconds

setInterval(generateQuote() ,10000);

//Note - 10000 milliseconds = 10
                  
      

            

     

          


       
  


