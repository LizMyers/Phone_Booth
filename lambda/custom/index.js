      /*
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Copyright VoiceByDesign.tech 2017 All rights reserved worldwide.
      LEGAL NOTICES GO HERE
      Distributed on AS-IS basis, not responible/liable for anything.
      Redistribution strictly prohibited.
      REMOVING THIS MESSAGE STRICTLY PROHIBITED
      version 1.5 Friday 18:42PM
      ---------------------------
      TERMINAL COMMANDS
      cd ./Documents/Development/alexa-skills/Phone_Booth/lambda/custom/
      ask lambda upload -f phoneBoothNA
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      */

      var toCountry;
      var myNeuCountry;
      var countryName;
      var myCodes;
      var placeName;
      var cName;
      var card;
      var myPrintCountry = "";
      var newCountryName = "";
      var myDialingCode;
      var fromCountry;
      var intprefix;

      var HELLO_US = [ //EN Hello
        "Hello, I'm here to help with international calls. You can say things like:"
        + " what is the dialing code for Spain, how do I call India, or which country has the dialing code",
        + " <say-as digits='352'></say-as>? Now, how can I help?",

        "Hi, you can ask me things like: what is the dialing code for Luxembourg, or how do I call Germany?"
        + "What can I do for you?",

        "<say-as interpret-as='interjection'>Howdy</say-as>, how can I help?"
      ];
      var HELLO_DE = [];
      
      var GOODBYE_US = [ //US Goodbye
          "Okay, bye for now.",
          "<say-as interpret-as='interjection'>As you wish.</say-as>",
          "Very well, have a nice day.",
          "<say-as interpret-as='interjection'>Roger</say-as> that.",
          "Okay, see you later.",
          "Okay, no worries.",
          "Okay, goodbye.",
          "Okay, so long.",
          "Okay, bye bye.",
          "Okay, take care."
      ];
      var GOODBYE_UK = [ //UK Goodbye
          "All right.",
          "<say-as interpret-as='interjection'>As you wish.</say-as>",
          "<say-as interpret-as='interjection'>All righty.</say-as>",
          "<say-as interpret-as='interjection'>Cheerio.</say-as>",
          "<say-as interpret-as='interjection'>Roger</say-as> that.",
          "<say-as interpret-as='interjection'>Righto</say-as> goodbye.",
          "<say-as interpret-as='interjection'>Simples</say-as>... goodbye.",
          "Very well, take care.",
          "All right, no worries.",
          "All right, goodbye.",
          "All right, so long."
      ];
      var GOODBYE_DE = [ //DE Goodbye
          "Okay, bye for now.",
          "<say-as interpret-as='interjection'>As you wish.</say-as>",
          "Okay, have a good day.",
          "Okay, see you later.",
          "Okay, no worries.",
          "Okay, goodbye.",
          "Okay, so long."
      ];
      var MORE_US = [ //en
          "Anything else?",
          "Is there anything else you need?",
          "Need anything else?",
          "Anything more I can do?",
          "What else can I do?",
          "Can I help with anything else?",
          "Can I assist you with anything else?",
          "Need anything more?",
          "Can I do anything else for you now?"
      ];
      var MORE_DE = [ //DE More
          "Sonst noch was?",
          "Brauchst Du noch was?",
          "Wie kann ich Dir weiter helfen?",
          "Kann ich Dir noch weiter helfen?",
          "Brauchst Du weitere Assistenz?",
          "Wie kann ich Dir sonst dienen?",
          "Sonst noch was?"
      ];
      var ERRCON_US = [ //en-US
          "<say-as interpret-as='interjection'>Argh, </say-as>",
          "<say-as interpret-as='interjection'>Aw man, </say-as>",
          "<say-as interpret-as='interjection'>Blast, </say-as>",
          "<say-as interpret-as='interjection'>Bummer, </say-as>",
          "<say-as interpret-as='interjection'>Darn, </say-as>",
          "<say-as interpret-as='interjection'>Eek, </say-as>",
          "<say-as interpret-as='interjection'>Good grief, </say-as>",
          "<say-as interpret-as='interjection'>Heads up, </say-as>",
          "<say-as interpret-as='interjection'>Oh boy, </say-as>",
          "<say-as interpret-as='interjection'>Oh snap, </say-as>",
          "<say-as interpret-as='interjection'>Uh oh, </say-as>",
          "<say-as interpret-as='interjection'>Whoops a daisy, </say-as>"
      ];

      var ERRCON_GB = [ //en-GB
          "<say-as interpret-as='interjection'>Aw, </say-as>",
          "<say-as interpret-as='interjection'>Blimey, </say-as>",
          "<say-as interpret-as='interjection'>Gosh, </say-as>",
          "<say-as interpret-as='interjection'>Darn, </say-as>",
          "<say-as interpret-as='interjection'>Look out, </say-as>",
          "<say-as interpret-as='interjection'>Oh bother, </say-as>",
          "<say-as interpret-as='interjection'>Oh boy, </say-as>",
          "<say-as interpret-as='interjection'>Oh dear, </say-as>",
          "<say-as interpret-as='interjection'>Oh my, </say-as>",
          "<say-as interpret-as='interjection'>Oh snap, </say-as>",
          "<say-as interpret-as='interjection'>Uh oh, </say-as>"
      ];

      var ERRCON_DE = [];

      var ERRMSG_US = [
          "something went wrong, please try that again.",
          "something went wrong, please use a valid country code or name.",
          "I couldn\'t find anything for that, please try again.",
          "I'm stuck, please make sure you\'re using a valid country code or name.",
          "this looks wrong, please check the country code or name.",
          "that didn\'t work, please use valid country code or name.",
          "something went wrong, please try again.",
          "I couldn\'t find the info. Please use a valid country code or name."
      ];

      var ERRMSG_DE = [];

      var PROTIPS01 = [ //en-US
          "if you store phone numbers with the plus sign, followed by the country code, your cell will dial the number correctly both at home and abroad. ",
          "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
          "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
          "to enter the plus sign on a mobile device, press and hold the '0' until the '+' appears.",
          "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
          "typically phone numbers in the UK are displayed like this +44 (0)113 123 4567.",
          "typically phone numbers in India are displayed like this +91 (0)11 1234567.",
          "when dialing an international number from a landline in the US, you first need to dial '011' followed by the country code and number. ",
          "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
          "when using VOIP or internet calling, dial the number just like you would on your cell. Example: +1 206 123-4567. ",
          "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
        ];
      var PROTIPS02 = [ //en-GB
          "if you store phone numbers with the plus sign, followed by the country code, your mobile will dial the number correctly both at home and abroad. ",
          "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
          "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
          "to enter the plus sign on a mobile device, long press the '0' until the '+' appears.",
          "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
          "typically phone numbers in the US are displayed like this +1 (206)123-4567.",
          "typically phone numbers in India are displayed like this +91 (0)11 1234567.",
          "when dialing an international number from a landline in the UK, you first need to dial '00' followed by the country code and number. ",
          "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
          "when using VOIP or internet calling, dial the number just like on mobile. Example: +1 206 123-4567. ",
          "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
        ];
      var PROTIPS03 = [ //en-IN
        "if you store phone numbers with the plus sign, followed by the country code, your mobile will dial the number correctly both at home and abroad. ",
        "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
        "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
        "to enter the plus sign on a mobile device, long press the '0' until the '+' appears.",
        "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
        "typically phone numbers in the US are displayed like this +1 (206)123-4567.",
        "typically phone numbers in the UK are displayed like this +44 (0)113 123 4567.",
        "when dialing an international number from a landline in India, you first need to dial '000' followed by the country code and number. ",
        "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
        "when using VOIP or internet calling, dial the number just like on mobile. Example: +1 206 123-4567. ",
        "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
        ];

      "use strict";

      var Alexa = require('alexa-sdk');
      var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

      var speechOutput = '';
      var reprompt = '';
      var errorMsg  = '';

      var handlers = {

      'LaunchRequest': function () {
            this.emit('startSession');
      },

      'startSession' : function () {
            var rHello = randomPhrase(HELLO_US);
            var welcomeOutput = "<audio src='https://s3.amazonaws.com/snd-effects/calling_48k.mp3' />" + rHello;
            var welcomeReprompt = "You can say things like how do I call Portugal, or what is the dialing code for Japan. Now, how can I help";
            this.emit(':ask', welcomeOutput, welcomeReprompt);
      },

      'getCountryCodeIntent': function () {

             	var speechOutput = "";
             	var response01 = "";
             	var reprompt01 = "";
             	var card = "";

      		var toCountry = this.event.request.intent.slots.toCountry.value;

      		if (toCountry === 'england' || toCountry === 'England') {
      		    myNeuCountry = "great britain";
      		} else if (toCountry === "vatican city" || toCountry === 'Vatican City') {
      		    myNeuCountry = "the vatican";
      		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'The States' || toCountry === 'The United States') {
      		    myNeuCountry = "usa";
      		} else if (toCountry === 'sea shells') {
      		    myNeuCountry = "seychelles";
      		} else if (toCountry === 'hungry' || toCountry === 'Hungry') {
      		    myNeuCountry = "hungary";
      		} else {
      		    myNeuCountry = toCountry;
      		}

            httpsGetCodes(myNeuCountry,  (myCodes) => {
                    console.log("sent     : " + myNeuCountry);
                    console.log("received : " + myCodes.myPlaceCode + ", +" + myCodes.myDialingCode );
                    var randomMore = randomPhrase(MORE_US);
                    var reprompt01 = randomPhrase(MORE_US);
                    var newCountryName = "Bahamas";
                    var newDialingCode = "";
                    var newPlaceCode= "";
                    var speechOutput = "";
            	      var response01 = "";
                    var rempompt01 = "Is there anything else you need?";
                    var locale = this.event.request.locale;
                    var errorMsg = randomPhrase(ERRCON_US) + randomPhrase(ERRMSG_US);

                    if (myCodes.myDialingCode === "" || myCodes.myDialingCode === undefined) {
                        this.emit(':ask', errorMsg, randomPhrase(MORE_US));
                    } else {
                          myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
                          var myCardTitle = myPrintCountry + ' ' + '+' + myCodes.myDialingCode;
                          var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + myCodes.myPlaceCode +'.png';
                          var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + myCodes.myPlaceCode +'.png';
                          var card = {
                              'type' : 'Standard',
                              'title' : myCardTitle,
                              'desc' : ' ',
                              'image' : {
                                  'smallImageUrl' : smImgUrl,
                                  'largeImageUrl' : lgImgUrl
                              }
                          };

                    switch(locale) {
                        case 'en-US':
                            intprefix = "011";
                            response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                            desc = "LANDLINE: 011 " + myCodes.myDialingCode + " \n CELL: +" + myCodes.myDialingCode
                            + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                            this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                            break;
                        case 'en-GB':
                            intprefix = "00";
                            response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                            desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                            + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                            this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                            break;
                        case 'de-DE':
                            intprefix = "00";
                            response01 = "Die Landesvorwahl für " + myPrintCountry + " ist :" + myCodes.myDialingCode + "." ;
                            desc = "FESTNETZ: 00 " + nDialingCode + " \n HANDY: +" + nDialingCode
                            + " \n\n PRO TIP: ";
                            this.emit(':askWithCard', response01, reprompt01, card.title, card.desc, card.image);
                            break;
                        case 'en-IN':
                            intprefix = "00";
                            response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                            desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                            + " \n\n PRO TIP: " + randomPhrase(PROTIPS03);
                            this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                            break;
                        default:
                            intprefix = "00";
                            response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as> .";
                            desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                            + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                            this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                            break;

                    }//end switch

                  }//end if

              });
        },

    'getCountryNameIntent': function () {

          	var response02 = "";
            var reprompt02 = "Is there anything else you need?";
            var locale = this.event.request.locale;
      	    var myDialingCode = this.event.request.intent.slots.dialingCode.value;
            var errorMsg = randomPhrase(ERRCON_US) + randomPhrase(ERRMSG_US);

              httpsGetNames(myDialingCode,  (countryName) => {
                    console.log("sent     : " + myDialingCode);
                    console.log("received : " + countryName.myPlaceName);

                    if (countryName.myPlaceName === "" || countryName.myPlaceName === undefined) {
                        this.emit(':ask', errorMsg, randomPhrase(MORE_US));
                    } else {
                          var myCardTitle = countryName.myPlaceName + ' ' + '+' + myDialingCode;
                          var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + countryName.myPlaceCode +'.png';
                          var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + countryName.myPlaceCode +'.png';
                          card = {
                              'type' : 'Standard',
                              'title' : myCardTitle,
                              'desc' : ' ',
                              'image' : {
                                  'smallImageUrl' : smImgUrl,
                                  'largeImageUrl' : lgImgUrl
                              }
                          };

                  switch(locale) {
                      case 'en-US':
                          intprefix = "011";
                          response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                          desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: +" + myDialingCode;
                          + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                          this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                          break;
                      case 'en-GB':
                          intprefix = "00";
                          response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                          desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                          + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                          this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                          break;
                      case 'de-DE':
                          intprefix = "00";
                          response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                          desc = "LANDLINE:00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                          + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                          this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                          break;
                      case 'en-IN':
                          intprefix = "00";
                          response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                          desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                          + " \n\n PRO TIP: " + randomPhrase(PROTIPS03);
                          this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                          break;
                      default:
                          intprefix = "00";
                          response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                          desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: +" + myDialingCode;
                          + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                          this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                          break;
                     }//end switch
                   }//end if
               });
           },

    'getFullPrefixIntent': function () {
              var desc= "";
              var response04 = "";
              var reprompt04= "Is there anything else you need?";
              var card;
              var intprefix = "";
              var nCountryName = "";
            	var nDialingCode = "";
            	var nPlaceCode = "";
            	var myNeuCountry="";
              var prettyCode="";
              var errorMsg = randomPhrase(ERRCON_GB) + randomPhrase(ERRMSG_US);

              var locale = this.event.request.locale;
              var intentObj = this.event.request.intent;
              var toCountry = this.event.request.intent.slots.toCountry.value;
              var fromCountry = this.event.request.intent.slots.fromCountry.value;

          if (intentObj.slots.fromCountry.value === undefined || intentObj.slots.fromCountry.value === "") {
            var slotToElicit = 'fromCountry';
            var speechOutput = 'Where are you calling from?';
            var repromptSpeech = 'Where are you calling from?';
            var updatedIntent = intentObj;
            this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech, updatedIntent);
          } else {
              var callingFrom = intentObj.slots.fromCountry.value;
              //NOTE: Assume customer is calling from a country where Alexa ships
              if(callingFrom === 'The US' || callingFrom === 'Canada' || callingFrom === 'The United States' || callingFrom === 'North America' || callingFrom === 'The USA' || callingFrom ==='US' || callingFrom === 'USA' || callingFrom === "the us") {
                intprefix = '011';
              } else if (callingFrom === 'India'){
                intprefix = '00';
              } else if (callingFrom === 'Japan' || callingFrom === 'japan'){
                intprefix = '010';
              } else {
                intprefix = '00';
              }

              //TRY SLOT VALIDATION HERE
          		if (toCountry === 'england' || toCountry === 'England') {
          		    myNeuCountry = "great britain";
          		    console.log("line 153: checking myNeuCountry value: " + myNeuCountry);
          		} else if (toCountry === "vatican city" || toCountry === 'Vatican City') {
          		    myNeuCountry = "the vatican";
          		    console.log("checking myNeuCountry value: " + myNeuCountry);
          		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'The States' || toCountry === 'The United States' || toCountry === "the US") {
          		    myNeuCountry = "usa";
          		    console.log("checking myNeuCountry value: " + myNeuCountry);
          		} else if (toCountry === 'sea shells') {
          		    myNeuCountry = "seychelles";
          		    console.log("checking myNeuCountry value: " + myNeuCountry);
          		} else if (toCountry === 'hungry' || toCountry === 'Hungry') {
          		    myNeuCountry = "hungary";
          		    console.log("checking myNeuCountry value: " + myNeuCountry);
          		} else {
          		    myNeuCountry = toCountry;
          		}

              httpsGetCodes(myNeuCountry,  (myCodes) => {
                    console.log("sent     : " + myNeuCountry);
                    console.log("received : " + myCodes.myPlaceCode + ", +" + myCodes.myDialingCode );

                    var randomMore = randomPhrase(MORE_US);
                    var reprompt01 = randomPhrase(MORE_US);
                    var speechOutput = "";
            	      var response04 = "";
                    var rempompt04 = "Is there anything else you need?";
                    var errorMsg = randomPhrase(ERRCON_US) + randomPhrase(ERRMSG_US);
                    var locale = this.event.request.locale;
                    //var callingFrom = "";

                    if (myCodes.myDialingCode === "" || myCodes.myDialingCode === undefined) {
                        this.emit(':ask', errorMsg, randomPhrase(MORE_US));
                    } else {
                          myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
                          console.log("myPrintCountry: " + myPrintCountry);
                          var myCardTitle = myPrintCountry + ' ' + '+' + myCodes.myDialingCode;
                          console.log("myCardTitle: " + myCardTitle);
                          var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + myCodes.myPlaceCode +'.png';
                          var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + myCodes.myPlaceCode +'.png';

                          var card = {
                              'type' : 'Standard',
                              'title' : myCardTitle,
                              'desc' : ' ',
                              'image' : {
                                  'smallImageUrl' : smImgUrl,
                                  'largeImageUrl' : lgImgUrl
                              }
                          };

                          var nCountryName = myPrintCountry;
                          var nDialingCode = myCodes.myDialingCode;
                          var nPlaceCode = myCodes.myPlaceCode;

                      }//end if

              switch(locale) {
                  case 'en-US':
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                      + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE_US);
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n CELL: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;
                  case 'en-GB':
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                    + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE_US);
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;
                  case 'en-IN':
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                      + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;
                  case 'de-DE':
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                      + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE_DE);
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;
                  case 'jp-JP':
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                      + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      + " Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE_JP);
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;
                  default:
                      prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                      response04 = "When calling from " + callingFrom + " you need to dial "
                      + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                      + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                      + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                      + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE_US);
                      desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                      break;

                    }//end switch

            });//end main https

          } //end if fromCountry undefined

      },//end getFullPrefixIntent

      	'AMAZON.HelpIntent': function () {
      	      var randomMore = randomPhrase(MORE_US);
              var response911 = 'You can say things like, what is the dialing code for Great Britain, or how do I call India, or you can say stop. Now, how can I help?';
              var reprompt911 = randomPhrase(MORE_US);
              this.emit(':ask', response911, reprompt911);
          },
          'AMAZON.CancelIntent': function () {
              var randomGoodbye = randomPhrase(GOODBYE_US);
              this.emit(':tell', randomGoodbye);
          },
          'AMAZON.StopIntent': function () {
              var randomGoodbye = randomPhrase(GOODBYE_US) + "<audio src = 'https://s3.amazonaws.com/snd-effects/hangup_48k.mp3' />";
              this.emit(':tell', randomGoodbye);
          },
          'SessionEndedRequest': function () {
              speechOutput = '';
              //this.emit(':saveState', true);//uncomment to save attributes to db on session end
              this.emit(':tell', speechOutput);
          },
      	'Unhandled': function () {
              speechOutput = "Phone Box didn\'t quite understand what you wanted.  Do you want to try something else?";
              this.emit(':ask', randomPhrase(ERRMSG_US), randomPhrase(MORE_US));
          }
      };

      exports.handler = (event, context) => {
          var alexa = Alexa.handler(event, context);
          alexa.APP_ID = APP_ID;
          // To enable string internationalization (i18n) features, set a resources object.
          //alexa.resources = languageStrings;
          alexa.registerHandlers(handlers);
      	  alexa.dynamoDBTableName = 'phoneBOX'; //uncomment this line to save attributes to DB
          alexa.execute();
      };

      //https://restcountries.eu/rest/v2/name/toCountry?fields=callingCodes;alpha2Code
      //User supplies a country name and gets dialing code
      //Example: "Alexa, ask phone box what is the dialing code for belgium?"
      //Example: "Alexa, ask phone box how do I call Mexico?"

      var https = require('https');

      function httpsGetCodes(myData, callback) {

          console.log("myData = " + myData);

         var options = {
             host: 'restcountries.eu',
             port: 443,
             path: '/rest/v2/name/' + encodeURIComponent(myData) + "?fields=callingCodes;alpha2Code;",
             method: 'GET'
         };

         var req = https.request(options, res => {
             res.setEncoding('utf8');
             var returnData = "";

             res.on('data', chunk => {
                 returnData = returnData + chunk;
             });

             res.on('end', () => {

                 console.log("RAW RESPONSE" +'\n'+ JSON.stringify(returnData));

                var myData = JSON.stringify(returnData);
                console.log("HERE IS MY DATA STRING: " + myData);

                var myPlaceCode = myData.slice(20,22).toLowerCase();
                console.log("PLACECODE: " + myPlaceCode);

                var myDialingCode = myData.split(":").pop();
                //returns [\\\"33\\\"]}]\" //(example for France)

                myDialingCode = myData.substring(myData.lastIndexOf("[")+3,myData.lastIndexOf("}")-3);
                console.log("DIALINGCODE: " + myDialingCode);

                var myCodes = {
                    'myPlaceCode' : myPlaceCode,
                    'myDialingCode' : myDialingCode,
                    'myPlaceName' : myData
                }

                console.log("myPlaceName: + myCodes.myPlaceName");

                if (myDialingCode === '\\\"status\\\":404,\\\"message\\\":\\\"Not Foun' || myDialingCode === undefined || myDialingCode === "") {
                    console.log("LOOKOUT - WE HAVE A BUG!!" + myCodes.myDialingCode);
                    myCodes.myDialingCode = undefined;
                    callback(myCodes);
                } else {
                    console.log("HERE IS MY DIALING CODE: " + myDialingCode);
                    callback(myCodes);
                }

             });

         });
         req.end();

      }
       //https://restcountries.eu/rest/v2/callingcode/52/?fields=name
       //user supplies dialing code and gets country name
       //Example: "Alexa, ask phone box which country has the dialing code 49?"

      function httpsGetNames(myDialingCode, callback) {

         var cName;
         var options = {
             host: 'restcountries.eu',
             port: 443,
             path: '/rest/v2/callingcode/'+ encodeURIComponent(myDialingCode) +'?fields=name;alpha2Code;',
             method: 'GET',
             dCode: 'myDialingCode'
         };

         var req = https.request(options, res => {
             res.setEncoding('utf8');
             var returnData = "";

             res.on('data', chunk => {
                 returnData = returnData + chunk;
             });

             res.on('end', () => {

                 console.log("HERE IS THE RAW RESPONSE" +'\n'+ JSON.stringify(returnData));

                 var myData = JSON.stringify(returnData);
                 console.log("HERE IS MY DATA STRING: " + myData);

                 switch (myDialingCode) { //reformat long strings coming back from service
                   case "44":
                      var myPlaceName = "Great Britain";
                        console.log("HERE IS MY PLACE NAME: " + myPlaceName);
                      break;
                  case "1":
                      var myPlaceName = "North America";
                      console.log("HERE IS MY PLACE NAME: " + myPlaceName);
                      break;
                  default:
                    var myPlaceName = myData.substring(14, myData.lastIndexOf(",")-2);
                    console.log("HERE IS MY PLACE NAME: " + myPlaceName);
                 }

                 //2 letter ISO code
                 var myPlaceCode = myData.split(":").pop().toLowerCase().slice(2,4);
                 console.log("PLACECODE: " + myPlaceCode);

                 var countryName = {
                    'myPlaceCode' : myPlaceCode,
                    'myPlaceName' : myPlaceName,
                    'dCode' : myData
                 }

                 callback(countryName);

             });

         });
         req.end();
      }

      function resolveCanonical(slot){
          try{
      		var canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
      	}catch(err){
      	    console.log("from line 355: " + err.message);
      	    var canonical = slot.value;
      	    console.log("canoncial var at line 362: " + canonical);
      	};
      	return canonical;
      };

      function delegateSlotCollection(){
        console.log("in delegateSlotCollection");
        console.log("current dialogState: "+this.event.request.dialogState);
          if (this.event.request.dialogState === "STARTED") {
            console.log("in Beginning");
      	  var updatedIntent= null;
      	  // updatedIntent=this.event.request.intent;
            //optionally pre-fill slots: update the intent object with slot values for which
            //you have defaults, then return Dialog.Delegate with this updated intent
            // in the updatedIntent property
            this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

      	  //this code is necessary if using ASK SDK versions prior to 1.0.9
      	  if(this.isOverridden()) {
      			return;
      		}
      		this.handler.response = buildSpeechletResponse({
      			sessionAttributes: this.attributes,
      			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
      			shouldEndSession: false
      		});
      		this.emit(':responseReady', updatedIntent);

          } else if (this.event.request.dialogState !== "COMPLETED") {
            console.log("in not completed");
            // return a Dialog.Delegate directive with no updatedIntent property.
            this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

      	  //this code necessary is using ASK SDK versions prior to 1.0.9
      		if(this.isOverridden()) {
      			return;
      		}
      		this.handler.response = buildSpeechletResponse({
      			sessionAttributes: this.attributes,
      			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
      			shouldEndSession: false
      		});
      		this.emit(':responseReady');

          } else {
            console.log("in completed");
            console.log("returning: "+ JSON.stringify(this.event.request.intent));
            // Dialog is now complete and all required slots should be filled,
            // so call your normal intent handler.
            return this.event.request.intent;
          }
      }

      //make sure country name has initial caps ==> Great Britain
      function toTitleCase(str) {
          return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      function randomPhrase(array) {
          // the argument is an array [] of words or phrases
          var i = 0;
          i = Math.floor(Math.random() * array.length);
          return(array[i]);
      }

      function isSlotValid(request, slotName){
              var slot = request.intent.slots[slotName];
              console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
              var slotValue;

              //if we have a slot, get the text and store it into speechOutput
              if (slot && slot.value) {
                  //we have a value in the slot
                  slotValue = slot.value.toLowerCase();
                  return slotValue;
              } else {
                  //we didn't get a value in the slot.
                  console.log("Houston, we have a problem!");
                  return false;
              }
      }

      //These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
      //will be removed once Lambda templates are updated with the latest SDK

      function createSpeechObject(optionsParam) {
          if (optionsParam && optionsParam.type === 'SSML') {
              return {
                  type: optionsParam.type,
                  ssml: optionsParam['speech']
              };
          } else {
              return {
                  type: optionsParam.type || 'PlainText',
                  text: optionsParam['speech'] || optionsParam
              };
          }
      }

      function buildSpeechletResponse(options) {
          var alexaResponse = {
              shouldEndSession: options.shouldEndSession
          };

          if (options.output) {
              alexaResponse.outputSpeech = createSpeechObject(options.output);
          }

          if (options.reprompt) {
              alexaResponse.reprompt = {
                  outputSpeech: createSpeechObject(options.reprompt)
              };
          }

          if (options.directives) {
              alexaResponse.directives = options.directives;
          }

          if (options.cardTitle && options.cardContent) {
              alexaResponse.card = {
                  type: 'Standard',
                  title: options.cardTitle,
                  content: options.cardContent
              };

              if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
                  alexaResponse.card.type = 'Standard';
                  alexaResponse.card['image'] = {};

                  delete alexaResponse.card.content;
                  alexaResponse.card.text = options.cardContent;

                  if(options.cardImage.smallImageUrl) {
                      alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
                  }

                  if(options.cardImage.largeImageUrl) {
                      alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
                  }
              }
          } else if (options.cardType === 'LinkAccount') {
              alexaResponse.card = {
                  type: 'LinkAccount'
              };
          } else if (options.cardType === 'AskForPermissionsConsent') {
              alexaResponse.card = {
                  type: 'AskForPermissionsConsent',
                  permissions: options.permissions
              };
          }

          var returnResult = {
              version: '1.0',
              response: alexaResponse
          };

          if (options.sessionAttributes) {
              returnResult.sessionAttributes = options.sessionAttributes;
          }
          return returnResult;
      }

      function getDialogDirectives(dialogType, updatedIntent, slotName) {
          let directive = {
              type: dialogType
          };

          if (dialogType === 'Dialog.ElicitSlot') {
              directive.slotToElicit = slotName;
          } else if (dialogType === 'Dialog.ConfirmSlot') {
              directive.slotToConfirm = slotName;
          }

          if (updatedIntent) {
              directive.updatedIntent = updatedIntent;
          }
          return [directive];
      }
