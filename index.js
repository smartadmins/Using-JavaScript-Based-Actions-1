const core = require('@actions/core');

try {
  const name = core.getInput('name');

  console.log(`Hello ${name}`);
  console.log('Welcome to JavaScript Based GitHub Actions');
} catch (error) {
  core.setFailed(error.message);
}
