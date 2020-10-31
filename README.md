<p align="center">
  <h1>MoneyExpenses App</h1><br>
  MoneyExpenses App is an open source mobile app about money expenses. This app doesn't have server and RESTful API, only UI since I made this app to complete the test from a startup company.
</p>

<p align="center">
    <a href="LICENSE"><img src="https://img.shields.io/github/license/DeVoresyah/MoneyExpenses.svg?style=flat" alt="LICENSE"></a>
    <a href="https://github.com/DeVoresyah/MoneyExpenses/stargazers"><img src="https://img.shields.io/github/stars/DeVoresyah/MoneyExpenses.svg?style=flat" alt="Stars"></a>
    <a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="JS Standard"></a>
    <a href="https://github.com/facebook/react-native"><img src="https://img.shields.io/badge/react--native-0.63.0-blue.svg?style=flat" alt="React Native"></a>
    <a href="https://github.com/OsmiCSX/osmicsx"><img src="https://img.shields.io/badge/osmicsx-0.5.0-orange.svg?style=flat" alt="OsmiCSX"></a>
</p>

---

<p align="center">
  <img src="https://i.imgur.com/75IS0ov.png" width="239px" height="380px;" />
  <img src="https://i.imgur.com/Zn9Lbaq.png" width="234px" height="430px;" />
</p>

## Prerequisites
- Xcode or Android Studio installed and exported on your ~/.bash_profile or similar
- JDK 1.8.x
- Node >= 12.*
- react-native-cli

## Installation
open terminal and change directory to your desired folder, then:
```
$ git clone git@github.com:DeVoresyah/MoneyExpenses.git YourAppName
$ cd YourAppName
$ yarn install
$ npx pod-install
```
## Run Your App
```
$ npx react-native run-android
$ npx react-native run-ios
```
## License
The code is available at [GitHub][home] under the [MIT license][license-url].

## Additional
**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

## Contributors
Suggestions and contributions are welcome via Pull Requests.
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/8052370" width="100px;"/><br /><sub><b>Rully Ardiansyah</b></sub>](https://github.com/DeVoresyah)<br />[💻](https://github.com/DeVoresyah/MoneyExpenses/commits?author=DeVoresyah "Code") [📖](https://github.com/DeVoresyah/MoneyExpenses/commits?author=DeVoresyah "Documentation") [💬](#question-devoresyah "Answering Questions") [👀](#review-devoresyah "Reviewed Pull Requests") [💡](#example-devoresyah "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

[home]: https://github.com/DeVoresyah/MoneyExpenses
[license-url]: https://github.com/DeVoresyah/MoneyExpenses/blob/master/LICENSE
