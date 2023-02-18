//child process is a  node module used to create sub process within a script
// you can provide different tasks with your script by just using some methods.

const cp = require('child_process')

// cp.execSync('calc')
// cp.execSync('start chrome https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html')


console.log('output ' + cp.execSync('node demo.js'))