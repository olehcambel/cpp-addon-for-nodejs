# cpp-addon-for-nodejs
example repo to show how to integrate cpp code into nodejs as addon

testing on 10kkk of iterations

## Installation

```zsh
# config python compiler
$ npm i -g node-gyp
# ubuntu
$ sudo apt-get install build-essential
# config compiler
# compile app
$ node-gyp configure build
# ./bootstrap-vcpkg.sh
```

config compiler - binding.gyp. Later: `const addon = require("../build/Release/addon");`
```
{
    "targets": [
        {
            "target_name": "addon",
            "sources": ["src/addon.cc"]
        }
    ]
}
```
