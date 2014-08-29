var assert = require('assert');
var parseRepo = require('./index');

describe('#parse', function() {
    it('should return jarvys\' parse-github-repo-url', function() {
        assert.deepEqual(parseRepo('jarvys/parse-github-repo-url'), {
            username: 'jarvys',
            reponame: 'parse-github-repo-url'
        });

        assert.ok(parseRepo('jarvys/parse-github-repo-url/tree/master/docs'), {
            username: 'jarvys',
            reponame: 'parse-github-repo-url'
        });
    });

    it('should return false', function() {
        assert.ok(parseRepo('jarvys/parse-github-repo-url/pulls') === false);
        assert.ok(parseRepo('jarvys/parse-github-repo-url/wiki') === false);
    });
});