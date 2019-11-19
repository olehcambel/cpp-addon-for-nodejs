const boot = () => {
  try {
    const addon = require("../../../build/Release/addon");

    process.nextTick = (f, ...args) => {
      Promise.resolve().then(() => {
        f(...args);
      });
    };

    return addon;
  } catch (error) {
    throw new Error(
      "This version of addon is not compatible with your Node.js build:\n\n" +
        e.toString()
    );
  }
};

module.exports = boot();
