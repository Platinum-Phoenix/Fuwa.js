const { fs, path } = { fs: require('fs'), path: require('path') }; // Optional if you use login option 2
const Fuwa = require('../index.js'); // Import fuwa.js here instead of ../index.js!

const cli = new Fuwa.Client('_');


// This function is going to be ran when the bot finishes loading and connects to discord
cli.on('READY', () => {
    console.log(cli.bot);
    console.log('Hey im online!');
});

// Set your status!
cli.setStatus({
    name: 'Some Status', 
    type: 'streaming',
    url: 'https://blank.org',
    status: 'idle' 
});



// login Option 1 (suggested):
const TOKEN = fs.readFileSync(path.join(__dirname, 'token.secret')) // Replace this with your token file name
cli.login(TOKEN); // log the bot into discord

// Login Option 2
// cli.login('PUT_YOUR_TOKEN_HERE');
//
// It is advised not to put your token in your main file, 
// using the method above is recommended and safer.

