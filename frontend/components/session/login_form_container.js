import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors,
    formType: "Create And-so-on Account"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)