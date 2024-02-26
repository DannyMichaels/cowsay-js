const cowSay = (message) => {
    const bubbleWidth = message.length + 4;

    const bubbleLine = '-'.repeat(bubbleWidth);

    console.log(` ${bubbleLine}`);
    console.log(`< ${message} >`);
    console.log(` ${bubbleLine}`);
    console.log('        \\   ^__^');
    console.log('         \\  (oo)\\_______');
    console.log('            (__)\\       )\\/\\');
    console.log('                ||----w |');
    console.log('                ||     ||');
};

const args = process.argv.slice(2);
const message = args.join(' ');

if (args.length === 0) {
    console.log('Please provide an argument for cowsay');
} else {
    cowSay(message);
}
