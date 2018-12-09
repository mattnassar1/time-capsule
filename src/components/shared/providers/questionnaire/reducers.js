const questionnaireReducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEXT':
      return {
        ...state,
        meta: {
          currentStepId: payload.value,
        },
      }
    case 'UPDATE_USER':
      const user = Object.assign({}, state.user, payload.user)
      return {
        ...state,
        user,
      }
    case 'UPDATE_OCCUPATION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.id]: payload.value,
        },
      }
    case 'ADD_UNIQUE_OCCUPATION':
      const occupationRole = state.answers.occupationRole.slice()
      occupationRole.push(payload.value)
      return {
        ...state,
        answers: {
          ...state.answers,
          occupationRole,
        },
      }
    default:
      return state
  }
}

export { questionnaireReducer }
