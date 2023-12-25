async function suggest(data) {
  return [{label: 'World!', command: `${data.currentInput.input} World!`}];
}

module.exports = {suggest};
