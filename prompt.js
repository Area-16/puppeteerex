var prompt = require('prompt')

//
// Start the prompt ---------------- Prompt Test
//
prompt.start()

//
// Get two properties from the user: username and email
//
prompt.get(['first', 'second'], (err, result) => { //
  // Log the results.
  //
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('Command-line input received:')
  console.log('  username: ' + result.first)
  console.log('  email: ' + result.second)
})
