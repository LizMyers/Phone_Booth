/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright 2017 Voice By Design Group

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

-------------------------------
  version 1.01 THURSDAY 14:00
-------------------------------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

var card = "";
var desc = "";
var intprefix = "";
var myNeuCountry = "";
var launchCount;
var saidCallingFrom = false;
var helloReprompt = "";
var fromCountry = "";

const Alexa = require('alexa-sdk');
const Strings = require('./langStrings.js');
const APP_ID = 'amzn1.ask.skill.45fb41c7-2320-434a-b65f-a91dbcf75926';

'use strict';

var handlers = {

'LaunchRequest': function () {
    this.emit('StartSession');
},
'StartSession': function () {
  if(Object.keys(this.attributes).length === 0) {
        this.attributes.launchCount = 0;
        var launchCount = 0;
        var count = launchCount;
     } else {
        var launchCount = this.attributes.launchCount;
        var count = launchCount;
     }
    if (launchCount >= 3) {
        count = launchCount;
        count +=1;
        this.attributes.launchCount = count;
        this.emit('HelloPro');
      } else {
        count +=1;
        this.attributes.launchCount = count;
        this.emit('HelloNew');
      }
},
'HelloNew': function(){
    const introAudio = "<audio src ='https://s3.amazonaws.com/snd-effects/success_07.mp3' />";
    const helloNewArr = this.t('HELLONEW');
    const helloNewMsg = randomPhrase(helloNewArr);
    const helloNew = introAudio + helloNewMsg;
    var helloReprompt = this.t('HELLO_REPROMPT');
    this.emit(':ask', helloNew, helloReprompt);
},
'HelloPro':function(){
    const introAudio = "<audio src ='https://s3.amazonaws.com/snd-effects/success_07.mp3' />";
    const helloProArr = this.t('HELLOPRO');
    const helloProMsg = randomPhrase(helloProArr);
    const helloPro = introAudio + helloProMsg;
    var helloReprompt = this.t('HELLO_REPROMPT');
    this.emit(':ask', helloPro, helloReprompt);
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

    var toCountry = this.event.request.intent.slots.toCountry.value;
    console.log("LINE86: TO_COUNTRY:" + toCountry);

    //HOW DO I CALL Germany
    var mySlotCheck = resolveCanonical(toCountry);
    console.log("LINE 86: mySlotCHECK: " + mySlotCheck);

    if (toCountry === 'England'|| toCountry === 'Scotland'|| toCountry === 'Wailes' || toCountry === 'whales' || toCountry === 'U.K.' || toCountry === 'The UK') {
        myNeuCountry = "great britain";
    } else if (toCountry === "vatican city") {
        myNeuCountry = "the vatican";
    } else if (toCountry === 'the States' || toCountry === 'the USA' || toCountry === 'The US' || toCountry === 'the United States' || toCountry === 'North America' || toCountry === 'America' || toCountry === 'the United States of America' || toCountry === 'the USA' || toCountry === 'the u.s.a.' || toCountry === ' the states' || toCountry === 'the u.s.') {
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

              if (myCodes.myDialingCode === "" || myCodes.myDialingCode === undefined) {
                  this.emit(':ask', randomErrorMessage, reprompt01);
              } else {
                    myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
                    if(myPrintCountry === 'Usa'){
                      myPrintCountry = 'USA';
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

              switch(locale) {
                  case 'en-US':
                  case 'en-CA':
                      var response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                      desc = "LANDLINE: 011 " + myCodes.myDialingCode + " \n CELL: +" + myCodes.myDialingCode
                      + " \n\n The dialing code for " + myPrintCountry + " is " + myCodes.myDialingCode + ".";
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;
                  case 'en-GB':
                  case 'en-IN':
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as>. ";
                      desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                      + " \n\n The dialing code for " + myPrintCountry + " is " + myCodes.myDialingCode + ".";
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;
                  case 'de-DE':
                      response01 = "Die Landesvorwahl für " + myPrintCountry + " ist" + myCodes.myDialingCode + "." ;
                      desc = "FESTNETZ: 00 " + nDialingCode + " \n HANDY: +" + nDialingCode
                      + " \n\n Die Landesvorwahl für " + myPrintCountry + " ist: " + myCodes.myDialingCode + ".";
                      this.emit(':askWithCard', response01, reprompt01, card.title, card.desc, card.image);
                      break;
                  default:
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode + "</say-as> .";
                      desc = "LANDLINE: 011 " + myCodes.myDialingCode + " \n CELL: +" + myCodes.myDialingCode
                      + " \n\n The dialing code for " + myPrintCountry + " i " + myCodes.myDialingCode + ".";
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;

              }//end switch

            }//end if

        });
  },
  //Alexa, which country has the dialing code 352?
  //Alexa, do you recognize contry code 33?
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
                    var myCardTitle = toTitleCase(countryName.myPlaceName) + ' ' + '+' + myDialingCode;
                    var placeName = toTitleCase(countryName.myPlaceName);
                    if(countryName.myPlaceName === 'Usa'){
                      countryName.myPlaceName = 'USA';
                    }
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
                case 'en-CA':
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + placeName + '.';
                    desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: " + myDialingCode
                    + " \n\n The country with dialing code " + myDialingCode + ", is " + countryName.myPlaceName + ".";
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                case 'en-GB':
                case 'en-IN':
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + placeName + '.';
                    desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: " + myDialingCode
                    + " \n\n The country with dialing code " + myDialingCode + " is " + countryName.myPlaceName + ".";
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                case 'de-DE':
                    response02 = "Das Land mit Vorwahl <say-as interpret-as='digits'> " + myDialingCode + "</say-as> ist: " + placeName + '.';
                    desc = "FESTNETZ: 00 " + myDialingCode + " \n HANDY: " + myDialingCode
                    + " \n\n Das Land mit Vorwahl " + myDialingCode + " ist " + countryName.myPlaceName + ".";
                    this.emit(':askWithCard', responseDE02, repromptDE02, card.title, desc, card.image);
                    break;
                default:
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + placeName + '.';
                    desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: " + myDialingCode
                    + " \n\n The country with dialing code " + myDialingCode + " is " + countryName.myPlaceName + ".";
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
               }//end switch
             }//end if
         });
     },

//Alexa, ask Phone Booth how to call Spain.
//Alexa, how do I call Spain from Japan?
'getFullPrefixIntent': function () {
    var randomMoreArray = this.t('MORE');
    var reprompt03 = randomPhrase(randomMoreArray);
    //Error: randomSpeechcon + randomMsg
    var errConArr = this.t('ERRCON');
    var errMsgArr = this.t('ERRMSG');
    var randomErrCon = randomPhrase(errConArr);
    var randomErrMsg = randomPhrase(errMsgArr);
    var randomErrorMessage = randomErrCon + randomErrMsg;
    var response03 = "";
    var countryName = "";
    var myDialingCode = "";
    var prettyCode="";
    var locale = this.event.request.locale;
    var intentObj = this.event.request.intent;
    var toCountry = intentObj.slots.toCountry.value;
    var fromCountry = intentObj.slots.fromCountry.value;
    //var saidCallingFrom = this.attributes.saidCallingFrom;

    if(saidCallingFrom && fromCountry === undefined) {
      fromCountry = this.attributes.fromCountry;
    }

    if(fromCountry === undefined) {
      var slotToElicit = 'fromCountry';
      var speechOutput = this.t('ELICIT_OUTPUT');
      var repromptSpeech = this.t('ELICIT_REPROMPT');
      var updatedIntent = intentObj;
      saidCallingFrom = true;
      this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech, updatedIntent);
    } else {
        //ASSUMING USER IS IN A COUNTRY WHERE ALEXA DEVICES ARE AVAILABLE
        //EDGE CASE = USER HAS IMPORTED THEIR OWN DEVICE

        if(fromCountry === 'America' || fromCountry === 'Canada' || fromCountry === 'The United States' || fromCountry === 'The US' || fromCountry === 'The USA' || fromCountry ==='US' || fromCountry === 'USA' || fromCountry === 'North America' || fromCountry === 'The States') {
          intprefix = '011';
        } else if (fromCountry === 'Japan' || fromCountry === 'japan'){
          intprefix = '010';
          fromCountry === 'Japan';
        } else if (fromCountry === 'Australia'){
          intprefix = '0011';
        } else {
          //all of europe and majority of world have this int'l prefix
          intprefix = '00';
          fromCountry === toTitleCase(fromCountry);
        }

        //clean up toCountry name
        if (toCountry === 'England'|| toCountry === 'Scotland'|| toCountry === 'Wailes' || toCountry === 'whales' || toCountry === 'U.K.' || toCountry === 'The UK') {
            myNeuCountry = "great britain";
        } else if (toCountry === "vatican city") {
            myNeuCountry = "the vatican";
        } else if (toCountry === 'the States' || toCountry === 'the USA' || toCountry === 'The US' || toCountry === 'the United States' || toCountry === 'North America' || toCountry === 'America' || toCountry === 'the United States of America' || toCountry === 'the USA' || toCountry === 'the u.s.a.' || toCountry === ' the states' || toCountry === 'the u.s.') {
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

              this.attributes.fromCountry = intentObj.slots.fromCountry.value;
              console.log("LINE 305: fromCountry: " + this.attributes.fromCountry);

              if (myCodes.myDialingCode === '' || myCodes.myDialingCode === undefined) {
                  //undefined dialingCode means toCountry didn't match valid country slot
                  this.emit(':ask', randomErrorMessage, reprompt03);
              } else {
                    myPrintCountry = toTitleCase(myNeuCountry);
                    if (myPrintCountry === 'Usa'){
                      myPrintCountry = 'USA';
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
                    var callingFrom = toTitleCase(fromCountry);

                    switch(locale) {
                        case 'en-US':
                        case 'en-CA':
                            prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                            response03 = "When calling from " + fromCountry + " you need to dial "
                            + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                            + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode
                            + "</prosody></say-as>. Check your device for these details and more.";
                            desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n CELL: +" + nDialingCode
                            + " \n\n When calling from " + callingFrom + ", first dial the international prefix: " + intprefix
                            + ", followed by the country code: " + nDialingCode + " for " + toCountry + ".";
                            this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                            break;
                        case 'en-GB':
                        case 'en-IN':
                            prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                            response03 = "When calling from " + fromCountry + " you need to dial "
                            + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                            + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode
                            + "</prosody></say-as>. Check your device for these details and more.";
                            desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                            + " \n\n When calling from "+callingFrom+", first dial the international prefix: " + intprefix
                            + ", followed by the country code: " + nDialingCode + " for " + toCountry + ".";
                            this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                            break;
                        case 'de-DE':
                            prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                            response03 = "Von " + fromCountry + " wähle zuerst: "
                            + "<say-as interpret-as='digits'>" + intprefix + "</say-as> und dann" + prettyCode + " für " + nCountryName + ". Nochmal, das lautet <say-as interpret-as ='digits'><prosody rate='slow'>" + intprefix + prettyCode + "</prosody></say-as>. Ich habe diese Detaillen und mehr an Deinem app geschickt.";
                            desc = "FESTNETZ:  " + intprefix + " " + nDialingCode + " \n HANDY: +" + nDialingCode
                            + " \n\n Aus " + callingFrom + ", wähle zuerst: " + intprefix
                            + ", und dann die Landesvorwahl: " + nDialingCode + " für " + toCountry + ".";
                            this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                            break;
                        default:
                            prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                            response03 = "When calling from " + fromCountry + " you need to dial "
                            + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                            + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". Again, that\'s <say-as interpret-as = 'digits'><prosody rate='slow'>" + intprefix + prettyCode
                            + "</prosody></say-as>. Check your device for these details and more.";
                            desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n CELL: +" + nDialingCode
                            + " \n\n When calling from " + callingFrom + ", first dial the international prefix: " + intprefix
                            + ", followed by the country code: " + nDialingCode + " for " + toCountry + ".";
                            this.emit(':askWithCard', response03, reprompt03, card.title, desc, card.image);
                            break;
                          }//end switch

                        }//end if dialingCode undefined

                    });//end https

              }//end if fromCountry undefined

    },//end getFullPrefixIntent

    'AMAZON.HelpIntent': function () {
        this.emit('GetHelpMsg');
    },
    'GetHelpMsg': function () {
      const helpArr = this.t('HELP');
      const helpOutput = randomPhrase(helpArr);
      const helpReprompt = this.t('HELP_REPROMPT') + helpOutput;
      this.emit(':ask', helpOutput, helpReprompt);
    },
    'GetMoreMsg': function () {
      const moreArr = this.t('MORE');
      const responseMore = randomPhrase(moreArr);
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
        this.emit(':saveState', true);//save attributes to db on session end
    },
  'Unhandled':function () {
        var response04 = this.t('UNHANDLED_OUTPUT');
        var reprompt04 = this.t('UNHANDLED_REPROMPT');
        this.emit(':ask', repsonse04, reprompt04);
    }
};

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.resources = Strings;
    alexa.dynamoDBTableName = 'phoneBooth';
    alexa.execute();
};

//https://restcountries.eu/rest/v2/name/toCountry?fields=callingCodes;alpha2Code
//User supplies a country name and gets dialing code
//Example: "Alexa, ask phone box what is the dialing code for Belgium?"

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
 //Example: "Alexa, ask Phone Booth which country has the dialing code 49?"

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
        console.log("request = "+JSON.stringify(request));
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            console.log("Slot is empty.");
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
