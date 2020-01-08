export const days = [
  { value: 'everyday', label: 'Everyday' },
  { value: 'weekdays', label: 'Weekdays' },
  { value: 'weekends', label: 'Weekends' },
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' }
];

export const hours = [
  { value: '12:00 AM', label: '12:00 AM' },
  { value: '12:30 AM', label: '12:30 AM' },
  { value: '1:00 AM', label: '1:00 AM' },
  { value: '1:30 AM', label: '1:30 AM' },
  { value: '2:00 AM', label: '2:00 AM' },
  { value: '2:30 AM', label: '2:30 AM' },
  { value: '3:00 AM', label: '3:00 AM' },
  { value: '3:30 AM', label: '3:30 AM' },
  { value: '4:00 AM', label: '4:00 AM' },
  { value: '4:30 AM', label: '4:30 AM' },
  { value: '5:00 AM', label: '5:00 AM' },
  { value: '5:30 AM', label: '5:30 AM' },
  { value: '6:00 AM', label: '6:00 AM' },
  { value: '6:30 AM', label: '6:30 AM' },
  { value: '7:00 AM', label: '7:00 AM' },
  { value: '7:30 AM', label: '7:30 AM' },
  { value: '8:00 AM', label: '8:00 AM' },
  { value: '8:30 AM', label: '8:30 AM' },
  { value: '9:00 AM', label: '9:00 AM' },
  { value: '9:30 AM', label: '9:30 AM' },
  { value: '10:00 AM', label: '10:00 AM' },
  { value: '10:30 AM', label: '10:30 AM' },
  { value: '11:00 AM', label: '11:00 AM' },
  { value: '11:30 AM', label: '11:30 AM' },
  { value: '12:00 PM', label: '12:00 PM' },
  { value: '12:30 PM', label: '12:30 PM' },
  { value: '1:00 PM', label: '1:00 PM' },
  { value: '1:30 PM', label: '1:30 PM' },
  { value: '2:00 PM', label: '2:00 PM' },
  { value: '2:30 PM', label: '2:30 PM' },
  { value: '3:00 PM', label: '3:00 PM' },
  { value: '3:30 PM', label: '3:30 PM' },
  { value: '4:00 PM', label: '4:00 PM' },
  { value: '4:30 PM', label: '4:30 PM' },
  { value: '5:00 PM', label: '5:00 PM' },
  { value: '5:30 PM', label: '5:30 PM' },
  { value: '6:00 PM', label: '6:00 PM' },
  { value: '6:30 PM', label: '6:30 PM' },
  { value: '7:00 PM', label: '7:00 PM' },
  { value: '7:30 PM', label: '7:30 PM' },
  { value: '8:00 PM', label: '8:00 PM' },
  { value: '8:30 PM', label: '8:30 PM' },
  { value: '9:00 PM', label: '9:00 PM' },
  { value: '9:30 PM', label: '9:30 PM' },
  { value: '10:00 PM', label: '10:00 PM' },
  { value: '10:30 PM', label: '10:30 PM' },
  { value: '11:00 PM', label: '11:00 PM' },
  { value: '11:30 PM', label: '11:30 PM' },
  { value: '11:59 PM', label: '11:59 PM' }
];

export const KIND_CHOICES = {
  MESSENGER: 'messenger',
  FACEBOOK_MESSENGER: 'facebook-messenger',
  FACEBOOK_POST: 'facebook-post',
  GMAIL: 'gmail',
  NYLAS_GMAIL: 'nylas-gmail',
  NYLAS_IMAP: 'nylas-imap',
  NYLAS_OUTLOOK: 'nylas-outlook',
  NYLAS_OFFICE365: 'nylas-office365',
  NYLAS_YAHOO: 'nylas-yahoo',
  LEAD: 'lead',
  CALLPRO: 'callpro',
  TWITTER_DM: 'twitter-dm',
  CHATFUEL: 'chatfuel',
  ALL_LIST: [
    'messenger',
    'facebook-post',
    'facebook-messenger',
    'lead',
    'callpro',
    'twitter-dm',
    'chatfuel',
    'gmail',
    'nylas-gmail',
    'nylas-imap',
    'nylas-office365',
    'nylas-outlook'
  ]
};

export const KIND_CHOICES_WITH_TEXT = [
  { text: 'Messenger', value: 'messenger' },
  { text: 'Facebook post', value: 'facebook-post' },
  { text: 'facebook messenger', value: 'facebook-messenger' },
  { text: 'Pop Ups', value: 'lead' },
  { text: 'Callpro', value: 'callpro' },
  { text: 'Chatfuel', value: 'chatfuel' },
  { text: 'Gmail', value: 'nylas-gmail' }
];

export const FORM_LOAD_TYPES = {
  SHOUTBOX: 'shoutbox',
  POPUP: 'popup',
  EMBEDDED: 'embedded',
  ALL_LIST: ['', 'shoutbox', 'popup', 'embedded']
};

export const FORM_SUCCESS_ACTIONS = {
  EMAIL: 'email',
  REDIRECT: 'redirect',
  ONPAGE: 'onPage',
  ALL_LIST: ['', 'email', 'redirect', 'onPage']
};

export const MAIL_TOOLBARS_CONFIG = [
  { name: 'styles', items: ['Font', 'FontSize'] },
  {
    name: 'other',
    items: [
      'TextColor',
      'BGColor',
      'Bold',
      'Italic',
      'Underline',
      'NumberedList',
      'BulletedList',
      'Link'
    ]
  },
  { name: 'clear', items: ['RemoveFormat'] }
];

export const INTEGRATIONS = [
  {
    name: 'Facebook post',
    description: 'Connect to Facebook posts right from your Team Inbox',
    inMessenger: false,
    isAvailable: true,
    kind: 'facebook-post',
    logo: '/images/integrations/facebook.png',
    createModal: 'facebook-post',
    category:
      'All integrations, For support teams, Marketing automation, Social media'
  },
  {
    name: 'Facebook messenger',
    description: 'Connect to Facebook messages right from your Team Inbox',
    inMessenger: false,
    isAvailable: true,
    kind: 'facebook-messenger',
    logo: '/images/integrations/fb-messenger.png',
    createModal: 'facebook-messenger',
    category:
      'All integrations, For support teams, Messaging, Social media, Conversation'
  },
  {
    name: 'Messenger',
    description: 'See and reply to Messenger messages in your Team Inbox',
    inMessenger: false,
    isAvailable: true,
    kind: 'messenger',
    logo: '/images/integrations/messenger.png',
    createUrl: '/settings/integrations/createMessenger',
    category:
      'All integrations, For support teams, For marketing teams, Marketing automation, Conversation'
  },
  {
    name: 'Gmail',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'gmail',
    logo: '/images/integrations/gmail.png',
    createModal: 'gmail',
    createUrl: '/settings/integrations/gmail',
    category:
      'All integrations, For support teams, Email marketing, Marketing automation, Conversation'
  },
  {
    name: 'IMAP by Nylas',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'nylas-imap',
    logo: '/images/integrations/email.png',
    createModal: 'nylas-imap',
    createUrl: '/settings/integrations/nylas-imap',
    category:
      'All integrations, For support teams, Marketing automation, Email marketing'
  },
  {
    name: 'Office 365 by Nylas',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'nylas-office365',
    logo: '/images/integrations/office365.png',
    createModal: 'nylas-office365',
    createUrl: '/settings/integrations/nylas-office365',
    category:
      'All integrations, For support teams, Marketing automation, Email marketing'
  },
  {
    name: 'Gmail by Nylas',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'nylas-gmail',
    logo: '/images/integrations/gmail.png',
    createModal: 'nylas-gmail',
    createUrl: '/settings/integrations/nylas-gmail',
    category:
      'All integrations, For support teams, Email marketing, Marketing automation, Conversation'
  },
  {
    name: 'Pop Ups',
    description: 'Find your lead forms right here in your Widget',
    inMessenger: true,
    isAvailable: true,
    kind: 'lead',
    logo: '/images/integrations/lead.png',
    createModal: 'lead',
    createUrl: '/settings/integrations/lead',
    category:
      'All integrations, For support teams, For marketing teams, Marketing automation, Surveys and Feedback, Pop ups'
  },
  {
    name: 'Outlook by Nylas',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'nylas-outlook',
    logo: '/images/integrations/outlook.png',
    createModal: 'nylas-outlook',
    createUrl: '/settings/integrations/nylas-outlook',
    category:
      'All integrations, For support teams, Marketing automation, Email marketing, Conversation'
  },
  {
    name: 'Yahoo by Nylas',
    description:
      'Connect a company email address such as sales@mycompany.com or info@mycompany.com',
    inMessenger: false,
    isAvailable: true,
    kind: 'nylas-yahoo',
    logo: '/images/integrations/yahoo.png',
    createModal: 'nylas-yahoo',
    createUrl: '/settings/integrations/nylas-yahoo',
    category:
      'All integrations, For support teams, Marketing automation, Email marketing, Conversation'
  },
  {
    name: 'Knowledge Base',
    description: 'Get access to your Knowledge Base right in your Widget',
    inMessenger: true,
    isAvailable: true,
    kind: 'knowledgebase',
    logo: '/images/integrations/knowledge-base.png',
    createModal: 'knowledgeBase',
    createUrl: '/settings/integrations/knowledgeBase',
    category:
      'All integrations, For support teams, For marketing teams, Surveys and Feedback'
  },
  {
    name: 'Engage config',
    description: 'Set up your custome amazon simple email service account here',
    inMessenger: false,
    isAvailable: true,
    kind: 'amazon-ses',
    logo: '/images/integrations/aws-ses.png',
    createModal: 'sesconfig',
    category: 'All integrations, For marketing teams, Email marketing, Engage'
  },
  {
    name: 'Call Pro',
    description: 'Connect your call pro phone number',
    inMessenger: false,
    isAvailable: true,
    kind: 'callpro',
    logo: '/images/integrations/callpro.png',
    createModal: 'callpro',
    category:
      'All integrations, For support teams, Marketing automation, Phone and video, Conversation'
  },
  {
    name: 'Twitter direct message',
    description: 'Connect to your twitter DMs here in your Team Inbox',
    inMessenger: false,
    isAvailable: true,
    kind: 'twitter-dm',
    logo: '/images/integrations/twitter.png',
    createModal: 'twitter',
    category:
      'All integrations, For support teams, Marketing automation, Social media, Messaging'
  },
  {
    name: 'Chatfuel',
    description: 'Connect your chatfuel account',
    inMessenger: false,
    isAvailable: true,
    kind: 'chatfuel',
    logo: '/images/integrations/chatfuel.png',
    createModal: 'chatfuel',
    category:
      'All integrations, For support teams, Marketing automation, Messaging, Conversation'
  },
  {
    name: 'Website',
    description: 'Show your responsive website right in your Widget',
    inMessenger: true,
    isAvailable: true,
    kind: 'website',
    logo: '/images/integrations/website.png',
    createModal: 'website',
    createUrl: '/settings/integrations/website',
    category: 'All integrations, For support teams, Marketing automation'
  },
  {
    name: 'Viber',
    description: `Soon you'll be able to connect Viber straight to your Team Inbox`,
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/viber.png',
    category:
      'All integrations, For support teams, Marketing automation, Messaging, Conversation'
  },
  {
    name: 'WhatsApp',
    description: 'Get a hold of your Whatsapp messages through your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/whatsapp.png',
    category: 'All integrations, For support teams, Messaging, Conversation'
  },
  {
    name: 'Wechat',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/wechat.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Line',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/line.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Twitter post',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/twitter.png',
    category:
      'All integrations, For support teams, Marketing automation, Social media'
  },
  {
    name: 'Instagram',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/instagram.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Aircall',
    description:
      'Connect with Aircall and handle calls directly from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/aircall.png',
    category:
      'All integrations, For support teams, Marketing automation, Phone and video, Social media, Conversation'
  },
  {
    name: 'Amazon Lex',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/amazon-lex.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Cisco Jabber',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/cisco-jabber.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Cisco Webex',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/cisco-webex.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Dashbot',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/dashbot.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Google Dialog Flow',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/google-dialogflow.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Google Hangouts',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/google-hangouts.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'IBM Watson',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/ibm-watson.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Microsoft Luis',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/microsoft.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Microsoft Teams',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/ms-teams.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Rasa',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/rasa.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'SAP Conversational AI',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/sap.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Slack',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/slack.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Twilio IPM',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/twilio-ipm.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Twilio SMS',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/twilio-ipm.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'WIT.AI',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/wit.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Agatha Answers',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/agatha-answers.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Asana',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/asana.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Asknicely',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/ask-nicely.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Autopilot',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/autopilot.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Base',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/base.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Chatbot.mn',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/chatbot.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Clearbit',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/clearbit.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Classbox',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/classbox.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Doorbell.io',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/doorbell.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Dropbox',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/dropbox.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Fivetran',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/fivetran.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Full contact',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/full-contact.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Github',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/github.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Google calendar',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/google-calendar.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Google Drive',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/google-drive.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Hubspot import',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/hubspot.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Jira',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/jira.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Justcall.io',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/justcall.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Keen',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/keen.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'LinkedIn',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/linkedin.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Loom',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/loom.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Mailchimp import',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/mailchimp_logo.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'ManDrill',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/mandrill.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'ManyChat',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/manychat.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Marketo Import',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/marketo-logo.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Meya',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/meya.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Mixpanel',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/mix-panel.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Outlook calendar',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/outlook-calendar.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Parabola',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/parabola.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Piesync',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/piesync.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Pipedrive',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/pipedrive.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Salesforce',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/wechat.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Salesforce import',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/salesforce.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Sendgrid',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/sendgrid.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Sendinblue',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/sendinblue.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Shipamax',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/shipamax.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Stitch',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/stitch.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Talkdesk',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/talkdesk.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Trello',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/trello.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Webhook',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/webhook.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Youtube',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/youtube.jpeg',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Zapier',
    description:
      'Connect with Wechat and start messaging right from your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/zapier.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  },
  {
    name: 'Zoho',
    description: 'See and reply to Line messages in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/zoho.png',
    category:
      'All integrations, For support teams, For sales teams, For marketing teams, Marketing automation, Messaging, Phone and video, Conversation'
  },
  {
    name: 'Calendly',
    description: 'Connect to your twitter posts here in your Team Inbox',
    inMessenger: false,
    isAvailable: false,
    logo: '/images/integrations/calendly.png',
    category:
      'All integrations, For support teams, Messaging, Marketing automation, Social media, Conversation'
  }
];

export const INTEGRATION_FILTERS = [
  {
    name: 'Featured',
    items: [
      'All integrations',
      'For support teams',
      'For sales teams',
      'For marketing teams'
    ]
  },
  {
    name: 'Works with',
    items: ['Conversation', 'Pop ups', 'Engage']
  },
  {
    name: 'Categories',
    items: [
      'Analytics',
      'Email marketing',
      'Messaging',
      'Marketing automation',
      'Phone and video',
      'Social media',
      'Surveys and Feedback'
    ]
  }
];
