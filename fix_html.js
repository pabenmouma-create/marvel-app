const fs = require('fs');

// Fix index.html - all broken logostones paths
let html = fs.readFileSync('index.html', 'utf8');

const fixes = [
  ['uiux/logostones/.png" alt="Mind Stone"',   'uiux/logostones/mind.png" alt="Mind Stone"'],
  ['uiux/logostones/.png" alt="Time Stone"',   'uiux/logostones/time.png" alt="Time Stone"'],
  ['uiux/logostones/.png" alt="Reality Stone"', 'uiux/logostones/reality.png" alt="Reality Stone"'],
  ['uiux/logostones/.png" alt="Space Stone"',  'uiux/logostones/space.png" alt="Space Stone"'],
  ['uiux/logostones/.png" alt="Power Stone"',  'uiux/logostones/power.png" alt="Power Stone"'],
  ['uiux/logostones/.png" alt="Soul Stone"',   'uiux/logostones/soul.png" alt="Soul Stone"'],
];

fixes.forEach(([broken, fixed]) => {
  while (html.includes(broken)) {
    html = html.replace(broken, fixed);
  }
  console.log('Fixed:', fixed.split('"')[0].split('/').pop());
});

fs.writeFileSync('index.html', html);
console.log('Done fixing index.html');
