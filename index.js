var GH_RESERVED_USER_NAMES = [
  'settings', 'orgs', 'organizations',
  'site', 'blog', 'about', 'explore',
  'styleguide', 'showcases', 'trending',
  'stars', 'dashboard', 'notifications',
  'search', 'developer'
];
var GH_RESERVED_REPO_NAMES = ['followers', 'following', 'repositories'];

module.exports = function(pathname) {
  // (username)/(reponame)[/(subpart)]
  var match = pathname.match(/([^\/]+)\/([^\/]+)(?:\/([^\/]+))?/)
  if (!match) return false

  // not a repository, skip
  if (~GH_RESERVED_USER_NAMES.indexOf(match[1])) return false
  if (~GH_RESERVED_REPO_NAMES.indexOf(match[2])) return false

  // not a code page, skip
  if (match[3] && !~['tree', 'blob'].indexOf(match[3])) return false

  return {
    username: match[1],
    reponame: match[2]
  }
}