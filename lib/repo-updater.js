const symbols = require('./symbols')
const eachLimit = require('async').eachLimit
const Travis = require('travis-ci')
const travisPrivate = new Travis({
  version: '2.0.0',
  pro: true
})
const travisPublic = new Travis({
  version: '2.0.0',
  pro: false
})
const POLL_INTERVAL = 15000

module.exports = (repos) => {
  travisPrivate.authenticate({
    github_token: process.env.GITHUB_TOKEN
  }, function (err) {
    if (err) {
      console.error(err.message)
      process.exit(1)
    }
  });

  setInterval(() => {
    console.info('checking status on travis')
    eachLimit(repos, 1, (repo, done) => {
      const client = repo.public ? travisPublic : travisPrivate
      client.repos('npm', repo.name).get((err, result) => {
        let state = symbols.UNKNOWN
        console.log(result)
        if (!result || !result.repo) return done()
        if (result.repo.last_build_state === 'passed') state = symbols.GREEN
        else if (result.repo.last_build_state === 'started') state = symbols.BUILDING
        else if (result.repo.last_build_state === 'failed') state = symbols.BROKEN
        repo.state = state
        return done()
      })
    })
  }, POLL_INTERVAL)
}
