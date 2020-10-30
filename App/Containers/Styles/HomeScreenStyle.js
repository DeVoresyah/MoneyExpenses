import { connect } from '../../Themes/OsmiProvider'

export default connect({
  headerContainer: "bg-primary p-5",
  iconUserWrapper: "w-64 h-64 rounded-full bg-dark-100 items-center justify-center mb-4",
  iconUser: "w-27 h-27",
  headerDesc: "opensans text-white text-sm mb-1",
  headerExpense: "opensans-bold text-3xl text-white",
  contentContainer: "flex pt-5",
  sectionTitle: "opensans-bold text-sm mb-6 ml-5",
  allExpenseCard: "bg-white rounded-xl shadow-md p-4 pb-0 mx-5 mb-7",
  allExpenseTitle: "opensans-bold text-xs mb-5"
})
