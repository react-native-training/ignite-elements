// Ignite plugin for Elements
// ----------------------------------------------------------------------------

const RNElements = 'react-native-elements'
const EXAMPLE_FILE = 'ElementsExample.js'
const PLUGIN_PATH = __dirname
const APP_PATH = process.cwd()

const add = async function (context) {
  const { ignite, filesystem } = context

  // install a npm module and link it
  await ignite.addModule(RNElements)

  // copy the component example file (if examples are turned on)
  await ignite.addComponentExample(EXAMPLE_FILE, { title: 'Elements Example' })

  // Example of copying templates/Elements to App/Elements
  // if (!filesystem.exists(`${APP_PATH}/App/Elements`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Elements`, `${APP_PATH}/App/Elements`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Elements/Elements'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  const { ignite, filesystem, patching } = context

  // remove the npm module and unlink it
  await ignite.removeModule(RNElements)

  // remove the component example
  await ignite.removeComponentExample(EXAMPLE_FILE)

  // Example of removing App/Elements folder
  // const removeElements = await context.prompt.confirm(
  //   'Do you want to remove App/Elements?'
  // )
  // if (removeElements) { filesystem.remove(`${APP_PATH}/App/Elements`) }

  // Example of unpatching a file
  // patching.replaceInFile(`${APP_PATH}/App/Config/AppConfig.js`, `import '../Elements/Elements'\n`, '')
}

// Required in all Ignite plugins
module.exports = { add, remove }

