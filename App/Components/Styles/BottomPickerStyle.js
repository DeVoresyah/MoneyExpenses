import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'full row items-center justify-between',
  label: 'text-xs opensans-semi mb-3',
  leftCol: 'row items-center',
  iconCategoryWrapper: 'w-36 h-36 rounded-full items-center justify-center bg-dark-400 mr-4',
  iconCategory: 'w-20 h-20',
  selectedLabel: 'text-sm opensans',
  chevronWrapper: 'w-24 h-24 bg-dark-400 rounded-full items-center justify-center',
  iconChevron: 'w-6 h-10',
  backdrop: 'flex bg-backdrop',
  iconClose: 'w-12 h-12',
  modalContainer: 'full bg-white rounded-lg px-7 py-6 absolute bottom-0 z-20',
  modalHeader: 'full row items-center justify-between mb-6',
  modalTitle: 'opensans-semi text-sm',
  errorText: 'text-red-500 opensans text-xs'
})
