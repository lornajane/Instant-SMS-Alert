// How to modify for own use:
//
// This file contains the commands that are used for
// inbound SMS messages. The command is written as
// follows:
//
// <command>: {
//  cmd: <The command that the user enters>,
//  desc: <Describes what the command does>
// }

const sources = require('./sources');

const constants = {

  commands: {
    cmd: '!commands',
    desc: '!commands -- Lists all commands available.',
  },

  cases: {
    cmd: '!cases',
    desc: '!cases -- Lists number of cases around the world.',
    info: '!cases-AU -- Lists number of cases in Australia.\n\n\
!cases-AT -- Lists number of cases in Austria.\n\n\
!cases-BE -- Lists number of cases in Belgium.\n\n\
!cases-BR -- Lists number of cases in Brazil.\n\n\
!cases-CA -- Lists number of cases in Canada.\n\n\
!cases-CL -- Lists number of cases in Chile.\n\n\
!cases-CN -- Lists number of cases in China.\n\n\
!cases-CZ -- Lists number of cases in Czech Republic.\n\n\
!cases-DK -- Lists number of cases in Denmark.\n\n\
!cases-EE -- Lists number of cases in Estonia.\n\n\
!cases-FI -- Lists number of cases in Finland.\n\n\
!cases-FR -- Lists number of cases in France.\n\n\
!cases-DE -- Lists number of cases in Germany.\n\n\
!cases-GR -- Lists number of cases in Greece.\n\n\
!cases-IR -- Lists number of cases in Iran.\n\n\
!cases-IE -- Lists number of cases in Ireland.\n\n\
!cases-IL -- Lists number of cases in Israel.\n\n\
!cases-IT -- Lists number of cases in Italy.\n\n\
!cases-JP -- Lists number of cases in Japan.\n\n\
!cases-MY -- Lists number of cases in Malaysia.\n\n\
!cases-NL -- Lists number of cases in Netherlands.\n\n\
!cases-NO -- Lists number of cases in Norway.\n\n\
!cases-PK -- Lists number of cases in Pakistan.\n\n\
!cases-PL -- Lists number of cases in Poland.\n\n\
!cases-PT -- Lists number of cases in Portugal.\n\n\
!cases-QA -- Lists number of cases in Qatar.\n\n\
!cases-RO -- Lists number of cases in Romania.\n\n\
!cases-SA -- Lists number of cases in Saudi Arabia.\n\n\
!cases-SG -- Lists number of cases in Singapore.\n\n\
!cases-SI -- Lists number of cases in Slovenia.\n\n\
!cases-KOR -- Lists number of cases in South Korea.\n\n\
!cases-ES -- Lists number of cases in Spain.\n\n\
!cases-SE -- Lists number of cases in Sweden.\n\n\
!cases-CH -- Lists number of cases in Switzerland.\n\n\
!cases-UK -- Lists number of cases in United Kingdom.\n\n\
!cases-US -- Lists number of cases in United States.\n\n\
',
    countries: {
      Australia: { cmd: '!cases-AU', source: sources.ncov.html },
      Austria: { cmd: '!cases-AT', source: sources.ncov.html },
      Belgium: { cmd: '!cases-BE', source: sources.ncov.html },
      Brazil: { cmd: '!cases-BR', source: sources.ncov.html },
      Canada: { cmd: '!cases-CA', source: sources.ncov.html },
      Chile: { cmd: '!cases-CL', source: sources.ncov.html },
      China: { cmd: '!cases-CN', source: sources.ncov.html },
      CzechRepublic: { cmd: '!cases-CZ', source: sources.ncov.html },
      Denmark: { cmd: '!cases-DK', source: sources.ncov.html },
      Estonia: { cmd: '!cases-EE', source: sources.ncov.html },
      Finland: { cmd: '!cases-FI', source: sources.ncov.html },
      France: { cmd: '!cases-FR', source: sources.ncov.html },
      Germany: { cmd: '!cases-DE', source: sources.ncov.html },
      Greece: { cmd: '!cases-GR', source: sources.ncov.html },
      Iran: { cmd: '!cases-IR', source: sources.ncov.html },
      Ireland: { cmd: '!cases-IE', source: sources.ncov.html },
      Israel: { cmd: '!cases-IL', source: sources.ncov.html },
      Italy: { cmd: '!cases-IT', source: sources.ncov.html },
      Japan: { cmd: '!cases-JP', source: sources.ncov.html },
      Malaysia: { cmd: '!cases-MY', source: sources.ncov.html },
      Netherlands: { cmd: '!cases-NL', source: sources.ncov.html },
      Norway: { cmd: '!cases-NO', source: sources.ncov.html },
      Pakistan: { cmd: '!cases-PK', source: sources.ncov.html },
      Poland: { cmd: '!cases-PL', source: sources.ncov.html },
      Portugal: { cmd: '!cases-PT', source: sources.ncov.html },
      Qatar: { cmd: '!cases-QA', source: sources.ncov.html },
      Romania: { cmd: '!cases-RO', source: sources.ncov.html },
      SaudiArabia: { cmd: '!cases-SA', source: sources.ncov.html },
      Singapore: { cmd: '!cases-SG', source: sources.ncov.html },
      Slovenia: { cmd: '!cases-SI', source: sources.ncov.html },
      SouthKorea: { cmd: '!cases-KOR', source: sources.ncov.html },
      Spain: { cmd: '!cases-ES', source: sources.ncov.html },
      Sweden: { cmd: '!cases-SE', source: sources.ncov.html },
      Switzerland: { cmd: '!cases-CH', source: sources.ncov.html },
      UnitedKingdom: { cmd: '!cases-UK', source: sources.ncov.html },
      UnitedStates: { cmd: '!cases-US', source: sources.cdc.html },
    }
  },

  // SOURCE: who.int
  coronavirus: {
    desc: '!coronavirus -- About the Coronavirus',
    cmd: '!coronavirus',
    info: 'Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as the Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Sydrome (SARS-CoV).\n\n\
Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.\n\n\
Coronaviruses are zoonotic, meaning they are transmitted between animals and people.  Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans.\n\n\
Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.\n\n\
Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.\n\n\
Source: WHO'
  },

  // SOURCE: cdc.gov
  protectYourself: {
    desc: '!protect-yourself -- Lists steps to better protect yourself.',
    cmd: '!protect-yourself',
    info: 'Take steps to protect yourself\n\n\
!clean-hands -- Shows how to clean your hands.\n\n\
!avoid-close-contact -- Describes when to avoid close contact.\n\n\
Source: CDC',
    cleanHands: {
      cmd: '!clean-hands',
      info: 'Clean your hands often\n\
- Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.\n\
- If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.\n\
- Avoid touching your eyes, nose and mouth with unwashed hands.\n\n\
Source: cdc.gov',
    },
    avoidCloseContact: {
      cmd: '!avoid-close-contact',
      info: 'Avoid close contact\n\n\
- Avoid close contact with people who are sick\n\
- Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.\n\n\
Source: CDC'
    }
  },

  // SOURCE: cdc.gov
  protectOthers: {
    desc: '!protect-others -- Lists steps to help protect others.',
    cmd: '!protect-others',
    info: 'Take steps to protect others\n\n\
!sick -- Stay home if you\'re sick\n\n\
!cover -- Cover coughs and sneezes\n\n\
!facemask -- Wear a facemask if you are sick\n\n\
!clean-and-disinfect -- Where to clean and disinfect\n\n\
Source: CDC',
    sick: {
      cmd: '!sick',
      info: 'Stay home if you\'re sick\n\
- Stay home if you are sick, except to get medical care.\n\n\
Source: CDC'
    },
    cover: {
      cmd: '!cover',
      info: 'Cover coughs and sneezes\n\
- Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow.\n\
- Throw used tissues in the trash.\n\
- Immediatly wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.\n\n\
Source: CDC'
    },
    facemask: {
      cmd: '!facemask',
      info: 'Wear a facemask if you are sick\n\
- If you are sick: You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider\'s office. If you are not able to wear a facemask (for example, because it cases trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room.\n\
- If you are NOT sick: You do not need to wear a facemask unless you are caring for someone who is sick (and they are not able to wear a facemask). Facemasks may be in short supply and they should be saved for caregivers.\n\n\
Source: CDC'
    },
    cleanAndDisinfect: {
      cmd: '!clean-and-disinfect',
      info: 'Clean and disinfect\n\
- Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.\n\
- If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection.\n\n\
Source: CDC'
    }
  },

  // SOURCE cdc.gov
  symptoms: {
    desc: '!symptoms -- Lists symptoms to watch for.',
    cmd: '!symptoms',
    info: 'Watch for symptoms\n\
The following symptoms may appear 2-14 days after exposure.\n\
- Fever\n\
- Cough\n\
- Shortness of break\n\n\
If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include:\n\
- Difficulty breathing or shortness of breath\n\
- Persistent pain or pressure in the chest\n\
- New confusion or inability to arouse\n\
- Bluish lips or face\n\
This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.\n\n\
Source: CDC'
  }, 

  // SOURCE: nhs.uk
  socialDistancing: {
    desc: '!social-distancing -- Lists do\'s and don\'ts to help stop coronavirus spreading.',
    cmd: '!social-distancing',
    info: 'How to avoid catching and spreading corona virus (social distancing)\n\n\
Everyone should do what they can to stop coronavirus spreading.\n\
It is particularly important for people who:\n\
- Are 70 or over\n\
- have a long-term condition\n\
- are pregnant\n\
- have a weakened immune system\n\n\
!social-distancing-do -- Lists out do\'s for social distancing.\n\n\
!social-distancing-dont -- Lists out don\'ts for social distancing.\n\n\
Source: NHS',
    do: {
      cmd: '!social-distancing-do',
      info: 'Do\n\
- wash your hands with soap and water often - do this for at least 20 seconds\n\
- always wash your hands when you get home or into work\n\
- use hand sanitiser gel if soap and water are not available\n\
- cover your mouth and nose with a tissue or your sleeve (not your hands) when you cough or sneeze\n\
- put used tissues in the bin immediately and wash your hands afterwards\n\
- avoid close contact with people who have symptoms of coronavirus\n\
- only travel on public transport if you need to\n\
- work from home, if you can\n\
- avoid social activities, such as going to pubs, restaurants, theatres and cinemas\n\
- avoid events with large groups of people\n\
- use phone, online services, or apps to contact your GP surgery or other NHS services\n\n\
Source: NHS' 
    },
    dont: {
      cmd: '!social-distancing-dont',
      info: 'Don\'t\n\
- do not touch your eyes, nose or mouth if you hands are not clean\n\
- do not have visitors to your home, including friends and family\n\n\
Source: NHS'
    }
  },

  // SOURCE: cdc.gov
  reduceStigma: {
    desc: '!reduce-stigma -- Raise awareness and help reduce stigma',
    cmd: '!reduce-stigma',
    info: 'Reducing Stigma\n\n\
Fear and anxiety about a disease can lead to social stigma toward people, places, or things.\n\n\
Some groups of people who may be experiencing stigma because of COVID-19 include:\n\
- Persons of Asian descent\n\
- People who have traveled\n\
- Emergency responders or healthcare professionals\n\
Stigma hurts everyone by creating fear or anger towards other people.\n\n\
Stigmatized groups may be subjected to:\n\
- Social avoidance or rejection\n\
- Denials of healthcare, education, housing or employment\n\
- Physical violence\n\n\
Stigma affects the emotional or mental health of stigmatized groups and the communities they live in. Stopping stigma is important to make communities and community members resilient.\n\n\
Everyone can help stop stigma related to COVID-19 by knowing the facts and sharing them with others in your community.\n\n\
Source: CDC'
  }

};

module.exports = constants;
