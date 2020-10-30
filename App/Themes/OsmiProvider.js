import customTheme from './CustomTheme' // your custom style file
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(customTheme);

const { apply, connect } = provider;

export {
  apply,
  connect
}
