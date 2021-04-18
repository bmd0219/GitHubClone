const path = require('path');
const Server = require('node-git-server');

const repos = new Server(path.resolve(__dirname, 'tmp'), {
    autoCreate: true
});
const port = process.env.PORT || 7005;

repos.on('push', (push) => {
    console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
    push.accept();
    
});

repos.on('fetch', (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    fetch.accept();
});

// repos.checkout = 'main';
// repos.handle()

// console.log(repos);
repos.list((err, repos) => {
    console.log(repos);
});

repos.listen(port, () => {
    console.log(`node-git-server running at http://localhost:${port}`)
});