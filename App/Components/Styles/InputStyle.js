import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'border-b pb-px border-dark-600',
  containerPrefix: 'row items-center',
  containerFocus: 'border-primary',
  label: 'text-xs opensans-semi mb-3',
  inputStyle: 'flex text-sm opensans',
  inputPrefix: 'ml-2',
  errorText: 'text-red-500 opensans text-xs'
})
