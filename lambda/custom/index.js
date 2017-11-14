  /*
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Copyright VoiceByDesign.tech 2017 All rights reserved worldwide.
  LEGAL NOTICES GO HERE
  Distributed on AS-IS basis, not responible/liable for anything.
  Redistribution strictly prohibited.
  REMOVING THIS MESSAGE STRICTLY PROHIBITED
  version 1.7 TUESDAY 11:19AM
  ---------------------------
  TERMINAL COMMANDS
  cd ./Documents/Development/alexa-skills/Phone_Booth/lambda/custom/
  ask lambda upload -f phoneBoothNA
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  */
  const languageStrings = {
            'en-US': {
                translation: {
                  HELLONEW: [
                    "Hello, I\'m here to help with international calls. You can say things like: what is the dialing code for Spain, how do I call India, or which country has the dialing code <say-as digits='352'></say-as>? Now, how can I help?",
                    "Hi, you can ask me things like: what is the dialing code for Portugal, or how do I call Japan? What can I do for you?",
                    "Hello, I\'m here to help with international calls. You can say things like: what is the dialing code for Mexico, how do I call Belgium, or which country has the dialing code <say-as digits='352'></say-as>? Now, how can I help?",
                    "Hi, you can ask me things like: what is the dialing code for Luxembourg, or how do I call Germany? What can I do for you?",
                    "Hello, I\'m here to help with international calls. You can say things like: what is the dialing code for France, how do I call Great Britain, or which country has the dialing code <say-as digits='49'></say-as>? Now, how can I help?"
                  ],
                  HELLOPRO: [
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                    "<say-as interpret-as='interjection'>Howdy</say-as><break time='0.5s'/>, how can I help?",
                  ],
                  MORE: [
                    "Anything else?",
                    "Is there anything else you need?",
                    "Need anything else?",
                    "Anything more I can do?",
                    "What else can I do?",
                    "Can I help with anything else?",
                    "Can I assist you with anything else?",
                    "Need anything more?",
                    "Can I do anything else for you now?",
                  ],
                  ERRCON: [
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
                    "<say-as interpret-as='interjection'>Whoops a daisy, </say-as>",
                  ],
                  ERRMSG : [
                    "something went wrong, please try that again.",
                    "something went wrong. Are you using a valid country name or dialing code?",
                    "I couldn\'t find anything for that, please try again.",
                    "I'm stuck, please make sure you\'re using a valid country name.",
                    "this looks wrong, please check the info you\'re giving me.",
                    "that didn\'t work, please try again.",
                    "something went wrong, please try that again.",
                    "I couldn\'t find the info. Please use a valid country name.",
                  ],
                  HELP : [
                      "You can say things like: what is the dialing code for Spain, how do I call India, or which country has the dialing code <say-as digits='352'></say-as>? Now, how can I help?",
                      "You can ask me things like: what is the dialing code for Portugal, or how do I call Japan? What can I do for you?",
                      "I\'m here to help with international calls. You can say things like: what is the dialing code for Mexico, how do I call Belgium, or which country has the dialing code <say-as digits='352'></say-as>? Now, how can I help?",
                      "You can ask me things like: what is the dialing code for Luxembourg, or how do I call Germany? What can I do for you?",
                      "You can say things like: what is the dialing code for France, how do I call Great Britain, or which country has the dialing code <say-as digits='49'></say-as>? Now, how can I help?",
                  ],
                  GOODBYE : [
                    "Okay bye for now.",
                    "<say-as interpret-as='interjection'>As you wish.</say-as>",
                    "Very well, have a good day.",
                    "<say-as interpret-as='interjection'>Roger</say-as> that.",
                    "Sure. See you later.",
                    "Okay, no worries.",
                    "Okay, goodbye.",
                    "Okay, so long.",
                    "Okay bye, bye.",
                    "Okay, take care."
                  ],
                  SKILL_NAME: 'Phone Booth',
              },
            },
            'en-GB': {
                translation: {
                    ERRCON: [
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
                      "<say-as interpret-as='interjection'>Uh oh, </say-as>",
                    ],
                    ERRMSG : [
                      "something went wrong, please try that again.",
                      "something went wrong. Are you using a valid country name or dialing code?",
                      "I couldn\'t find anything for that, please try again.",
                      "I'm stuck, please make sure you\'re using a valid country name.",
                      "this looks wrong, please check the info you\'re giving me.",
                      "that didn\'t work, please try again.",
                      "something went wrong, please try that again.",
                      "I couldn\'t find the info. Please use a valid country name.",
                    ],
                    GOODBYE : [
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
                    ],
                    SKILL_NAME: 'Phone Box',
                },
            },
            'de': {
                translation: {
                    ERRCON: [
                        'Scheisse!',
                        'Verdammt noch mal!',
                    ],
                    ERRMSG: [
                      "something went wrong, please try that again.",
                      "something went wrong. Are you using a valid country name or dialing code?",
                      "I couldn\'t find anything for that, please try again.",
                      "I'm stuck, please make sure you\'re using a valid country name.",
                      "this looks wrong, please check the info you\'re giving me.",
                      "that didn\'t work, please try again.",
                      "something went wrong, please try that again.",
                      "I couldn\'t find the info. Please use a valid country name.",
                    ],
                    SKILL_NAME: 'Telefonzelle',
                },
            }
        }

  var card = "";
  var desc = "";
  var intprefix = "";
  var myNeuCountry = "";

  'use strict';
  var Alexa = require('alexa-sdk');
  //var languageStrings = require('./langStrings');
  var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

  var handlers = {

  'LaunchRequest': function () {
        this.emit('NewSession');
  },
  'NewSession' : function () {
        //var launchCount = this.attributes.launchCount;
        var launchCount = 4;
        console.log(launchCount);
        var count = 0;
        if (launchCount >= 3) {//used skill before
          count = launchCount;
        } else { //first use
          launchCount = this.attributes.launchCount = 0;
          count = launchCount;
        }
        if (count >= 3) {
          count +=1;
          this.attributes.launchCount = count;
          this.emit('HelloPro');
        } else {
          count +=1;
          this.attributes.launchCount = count;
          this.emit('HelloNew');
        }

        this.attributes.launchCount = launchCount;
        console.log("launchCount: " + this.attributes.launchCount);

  },
  'HelloNew' : function(){
    const introAudio = "<audio src ='https://s3.amazonaws.com/snd-effects/success_07.mp3' />";
    const helloNewArr = this.t('HELLONEW');
    const helloNewMsg = randomPhrase(helloNewArr);
    const helloNew = introAudio + helloNewMsg;
    const helloProReprompt = "You can say help at any time.";
    this.emit(':ask', helloNew, helloNew);
  },
  'HelloPro':function(){
    const introAudio = "<audio src ='https://s3.amazonaws.com/snd-effects/success_07.mp3' />";
    const helloProArr = this.t('HELLOPRO');
    const helloProMsg = randomPhrase(helloProArr);
    const helloPro = introAudio + helloProMsg;
    this.emit(':ask', helloPro, helloPro);
  },
  'getCountryCodeIntent': function () {
     	var response01 = "";
      var locale = this.event.request.locale;
      //generate random reprompt: "Anything else I can do?"
      var randomMoreArray = this.t('MORE');
      var reprompt01 = randomPhrase(randomMoreArray);
      //Error: randomSpeechcon + randomMsg
      var errConArr = this.t('ERRCON');
      var errMsgArr = this.t('ERRMSG');
      var randomErrCon = randomPhrase(errConArr);
      var randomErrMsg = randomPhrase(errMsgArr);
      var randomErrorMessage = randomErrCon + randomErrMsg;
      /////////******************/////////////FIX THIS
      //process toCountry - use entity resolution in next version
      var toCountry = this.event.request.intent.slots.toCountry.value;

  		if (toCountry === 'england' || toCountry === 'England') {
  		    myNeuCountry = "great britain";
  		} else if (toCountry === "vatican city" || toCountry === 'Vatican City') {
  		    myNeuCountry = "the vatican";
  		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'the united states' || toCountry === 'north america' || toCountry === 'america') {
  		    myNeuCountry = "usa";
  		} else if (toCountry === 'sea shells') {
  		    myNeuCountry = "seychelles";
  		} else if (toCountry === 'hungry' || toCountry === 'Hungry') {
  		    myNeuCountry = "hungary";
  		} else {
  		    myNeuCountry = toCountry;
  		}

      console.log("MY_NEU_COUNTRY: " + myNeuCountry); //check what Alexa hears/sees
      /////////******************/////////////FIX THIS

        httpsGetCodes(myNeuCountry,  (myCodes) => {
                console.log("sent     : " + myNeuCountry);
                console.log("received : " + myCodes.myPlaceCode + ", +" + myCodes.myDialingCode );

                if (myCodes.myDialingCode === "" || myCodes.myDialingCode === undefined) {
                    this.emit(':ask', randomErrorMessage, reprompt01);
                } else {
                      var myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
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
                        var response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                        desc = "LANDLINE: 011 " + myCodes.myDialingCode + " \n CELL: +" + myCodes.myDialingCode
                        + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                        this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                        break;
                    case 'en-GB':
                        intprefix = "00";
                        response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                        desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                        + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically."
                        this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                        break;
                    case 'de-DE':
                        intprefix = "00";
                        response01 = "Die Landesvorwahl für " + myPrintCountry + " ist :" + myCodes.myDialingCode + "." ;
                        desc = "FESTNETZ: 00 " + nDialingCode + " \n HANDY: +" + nDialingCode
                        + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically."
                        this.emit(':askWithCard', response01, reprompt01, card.title, card.desc, card.image);
                        break;
                    case 'en-IN':
                        intprefix = "00";
                        response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                        desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                        + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically."
                        this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                        break;
                    default:
                        intprefix = "00";
                        response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as> .";
                        desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                        + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically."
                        this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                        break;

                }//end switch

              }//end if

          });
    },

  'getCountryNameIntent': function () {
        var response02 = "";
        //var myNeuCountry = "";
        var locale = this.event.request.locale;
        //generate random reprompt: "Anything else I can do?"
        var randomMoreArray = this.t('MORE');
        var reprompt02 = randomPhrase(randomMoreArray);
        //Error: randomSpeechcon + randomMsg
        var errConArr = this.t('ERRCON');
        var errMsgArr = this.t('ERRMSG');
        var randomErrCon = randomPhrase(errConArr);
        var randomErrMsg = randomPhrase(errMsgArr);
        var randomErrorMessage = randomErrCon + randomErrMsg;

  	    var myDialingCode = this.event.request.intent.slots.dialingCode.value;

          httpsGetNames(myDialingCode,  (countryName) => {
                console.log("sent     : " + myDialingCode);
                console.log("received : " + countryName.myPlaceName);

                if (countryName.myPlaceName === "" || countryName.myPlaceName === undefined) {
                      this.emit(':ask', randomErrorMessage, reprompt02);
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
                      + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                      this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                      break;
                  case 'en-GB':
                      intprefix = "00";
                      response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                      desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                      + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                      this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                      break;
                  case 'de-DE':
                      intprefix = "00";
                      response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                      desc = "LANDLINE:00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                      + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                      this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                      break;
                  case 'en-IN':
                      intprefix = "00";
                      response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                      desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                      + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                      this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                      break;
                  default:
                      intprefix = "00";
                      response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                      desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: +" + myDialingCode;
                      + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                      this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                      break;
                 }//end switch
               }//end if
           });
       },

  'getFullPrefixIntent': function () {

      //generate random reprompt: "Anything else I can do?"
      var randomMoreArray = this.t('MORE');
      var reprompt03 = randomPhrase(randomMoreArray);
      //Error: randomSpeechcon + randomMsg
      var errConArr = this.t('ERRCON');
      var errMsgArr = this.t('ERRMSG');
      var randomErrCon = randomPhrase(errConArr);
      var randomErrMsg = randomPhrase(errMsgArr);
      var randomErrorMessage = randomErrCon + randomErrMsg;
      //other vars
      var response03 = "";
      var countryName = "";
      var myDialingCode = "";
      var prettyCode="";
      var locale = this.event.request.locale;
      var intentObj = this.event.request.intent;
      var toCountry = intentObj.slots.toCountry.value;
      var fromCountry = intentObj.slots.fromCountry.value;

    //if(nowCallingFrom === undefined || nowCallingFrom === '') {
      if (fromCountry === undefined || fromCountry === '') {
        var slotToElicit = 'fromCountry';
        var speechOutput = 'Where are you calling from?';
        //var speechOutput = 'Are you calling from ' + nowCallingFrom + '?';
        var repromptSpeech = 'Sorry, I didn\'t catch that, where are you calling from?';
        var updatedIntent = intentObj;
        this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech, updatedIntent);

      } else {

          //NOTE: Assume customer is calling from a country where Alexa ships
          if(fromCountry === 'america' || fromCountry === 'canada' || fromCountry === 'the united states' || fromCountry === 'america' || fromCountry === 'the u.s.a.' || fromCountry ==='u.s.' || fromCountry === 'usa' || fromCountry === "the u.s.") {
            intprefix = '011';
          } else if (fromCountry === 'india' || fromCountry === 'germany'  || fromCountry === 'the u.k.' || fromCountry === 'england'){
            intprefix = '00';
          } else if (fromCountry === 'japan'){
            intprefix = '010';
          } else {
            intprefix = '00';
          }

          if (toCountry == 'america' || toCountry == 'north america' || toCountry == 'the u.s.' || toCountry == 'united states'){
            myNeuCountry = 'usa';
          } else if (toCountry == 'england' || toCountry === 'the u.k.') {
            myNeuCountry = "great britain";
      		} else if (toCountry === "vatican city") {
      		    myNeuCountry = "the vatican";
      		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'The States' || toCountry === "The U.S." || toCountry === "North America") {
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

                if (myCodes.myDialingCode === '' || myCodes.myDialingCode === undefined) {
                    //undefined dialingCode means toCountry didn't match valid country slot
                    this.emit(':ask', randomErrorMessage, reprompt03);
                } else {
                      if(myNeuCountry === "usa"){
                        myPrintCountry = "USA";
                      } else {
                        myPrintCountry = toTitleCase(myNeuCountry);
                      }

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
                      var nCountryName = myPrintCountry;
                      var nDialingCode = myCodes.myDialingCode;
                      var nPlaceCode = myCodes.myPlaceCode;

                      //write to dynamoDBTableName
                      var saveFromCountry = intentObj.slots.fromCountry.value;
                      this.attributes.fromCountry = saveFromCountry;

                      switch(locale) {
                          case 'en-US':
                              prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                              response03 = "When calling from " + fromCountry + " you need to dial "
                              + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                              + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                            + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                              + "Check your device for these details and more. <break time='1s'/>";
                              desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                              + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                              this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                              break;
                          case 'en-GB':
                              prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                              response03 = "When calling from " + fromCountry + " you need to dial "
                              + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                              + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                            + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                              + "Check your device for these details and more. <break time='1s'/>";
                              desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                              + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                              this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                              break;
                          case 'en-IN':
                              prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                              response03 = "When calling from " + fromCountry + " you need to dial "
                              + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                              + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                            + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                              + "Check your device for these details and more. <break time='1s'/>";
                              desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                              + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                              this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                              break;
                          case 'de-DE':
                              prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                              response03 = "When calling from " + fromCountry + " you need to dial "
                              + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                              + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                            + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                              + "Check your device for these details and more. <break time='1s'/>";
                              desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                              + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                              this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                              break;
                          default:
                              prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                              response03 = "When calling from " + fromCountry + " you need to dial "
                              + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                              + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                            + " Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. "
                              + "Check your device for these details and more. <break time='1s'/>";
                              desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                              + " \n\n PRO TIP: Enter telephone numbers in your address book with the + sign and let your smart phone take care of the int'\l prefix (the one for landlines) automagically. "
                              this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                              break;
                            }//end switch

                      }//end if daling code undefined

                  });//end https

          }//end elicit fromCountry

  },//end getFullPrefixIntent

  	  'AMAZON.HelpIntent': function () {
          this.emit('GetHelpMsg');
      },
      'GetHelpMsg': function () {
        const helpArr = this.t('HELP');
        const randomHelpMsg = randomPhrase(helpArr);
        const responseHelp = randomHelpMsg;
        repromptHelp = 'Are you still there? ' + responseHelp;
        this.emit(':ask', responseHelp, repromptHelp);
      },
      'GetMoreMsg': function () {
        const moreArr = this.t('MORE');
        const randomMoreMsg = randomPhrase(moreArr);
        const responseMore = randomMoreMsg;
        this.emit(':ask', responseMore, responseMore);
      },
      'GetErrorMsg' : function() {
        //get random interjection
        const errConArr = this.t('ERRCON');
        const randomErrCon = randomPhrase(errConArr);
        //get random error msg
        const errMsgArr = this.t('ERRMSG');
        const randomErrMsg = randomPhrase(errMsgArr);
        //combine interjection + msg
        const responseError = randomErrCon + randomErrMsg;
        this.emit(':ask', responseError, 'GetMoreMsg');
      },
      'AMAZON.CancelIntent': function () {
          this.emit('GoodbyeMsg');
      },
      'AMAZON.StopIntent': function () {
        this.emit('GoodbyeMsg');
      },
      'GoodbyeMsg' : function () {
          const extroAudio = "<audio src ='https://s3.amazonaws.com/snd-effects/magic_crystal_25.mp3' />"
          const goodbyeArr = this.t('GOODBYE');
          const randomGoodbye = randomPhrase(goodbyeArr);
          const goodbyeMsg = randomGoodbye + extroAudio;
          this.emit(':tell', goodbyeMsg);
      },
      'SessionEndedRequest': function () {
          const speechOutput = 'goodbye';
          this.emit(':saveState', true);//save attributes to db on session end
      },
  	'Unhandled': function () {
          this.emit('AMAZON.HelpItent');
      }
  };

  exports.handler = (event, context) => {
      var alexa = Alexa.handler(event, context);
      alexa.APP_ID = APP_ID;
      alexa.registerHandlers(handlers);
      alexa.resources = languageStrings;
  	  alexa.dynamoDBTableName = 'phoneBOX'; 
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
             if (myPlaceName === "North America"){
               var myPlaceCode = "northAm";
               console.log("PLACE CODE: " + myPlaceCode);
             } else {
               var myPlaceCode = myData.split(":").pop().toLowerCase().slice(2,4);
               console.log("PLACECODE: " + myPlaceCode);
             }
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
        this.emit(":delegate", updatedIntent); //uncomment this if using ASK SDK 1.0.9 or newer

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
