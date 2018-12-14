import React, { useReducer, useRef } from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import { verticalScroll, UnstyledButton } from '../../../shared/styles'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import star from '../../../../images/star.svg'

import { http, API_URL } from '../../../../utils'

export default React.memo(({ canContinue, setContinue }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { context } = useQuestionnaire()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'SUBMITTING',
    })

    // 1. Endpoint
    const url = API_URL + '/timecap/submit'
    // 2. Filter data
    const data = parseQuestionnaireData(context.questionnaireState)
    // 3. Submit
  }

  const firstRender = useRef(true)

  return (
    <Container>
      <DebouncedInput
        type="input"
        id="email"
        initialValue={context.questionnaireState.user.email}
        onSuccess={value => {
          const isValid = validate(value)
          if (isValid && !state.canSubmit) {
            dispatch({
              type: 'UPDATE',
              payload: {
                ...state,
                canSubmit: true,
                isSubmitting: false,
                error: false,
              },
            })
            context.questionnaireDispatch({
              type: 'UPDATE_USER',
              payload: {
                user: {
                  email: value,
                },
              },
            })
          } else if (state.canSubmit) {
            dispatch({
              type: 'ERROR',
              payload: {
                error: 'Invalid Email.',
              },
            })
          }
        }}
        onError={error => {
          if (firstRender.current) {
            firstRender.current = false
            return
          }
          if (state.canSubmit) {
            dispatch({
              type: 'ERROR',
              payload: {
                error: 'Something went wrong! Try again.',
              },
            })
          }
        }}
        placeholder="my@email.com"
      />
      <SubmitButton
        disabled={!state.canSubmit}
        onClick={e => (state.isSubmitting ? {} : handleSubmit(e))}
      >
        <span>Submit</span>
        <div className="elements" aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </SubmitButton>
    </Container>
  )
})

const initialState = {
  canSubmit: false,
  isSubmitting: false,
  error: false,
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE':
      return payload
    case 'ERROR':
      return {
        ...state,
        canSubmit: false,
        isSubmitting: false,
        error: payload.error,
      }
    case 'SUBMITTING':
      return {
        ...state,
        isSubmitting: true,
        error: false,
      }
    default:
      return state
  }
}

const validate = email => {
  const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const parseQuestionnaireData = data => {
  console.log('data', data)
  //  const name = context.name =
}

// Styles
const Container = styled.div`
  display: grid;
  grid-gap: 40px;
`

const SubmitButton = styled(UnstyledButton)`
  padding: 15px;
  outline: none;
  cursor: pointer;
  transition: transform 0.15s var(--cubic);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--baseborderradius);
    transition: 0.25s var(--cubic);
  }
  &::before {
    background: var(--gray1);
    transition-property: transform;
    transform: ${props => (props.disabled ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: ${props => (props.disabled ? '0 50%' : '100% 50%')};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: var(--boxshadow2);
    opacity: 0;
  }

  .elements {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    div {
      opacity: ${props => (props.disabled ? 0 : 1)};
      transition: opacity 0.15s var(--cubic);
      &::before {
        content: '';
        position: absolute;
        left: unset;
        right: 10px;
        height: 10px;
        width: 10px;
        background: var(--white);
        mask: url(${star}) center center / contain no-repeat;
        -webkit-mask: url(${star}) center center / contain no-repeat;
        transform: translateY(70px);
        opacity: 1;
        transition-property: opacity, transform;
        animation: ${verticalScroll('-15px')} 1.5s infinite linear;
      }
    }
    div:first-of-type::before {
      left: 10px;
      animation-duration: 1.4s;
    }
    div:nth-of-type(2)::before {
      left: 20%;
      animation-duration: 1.2s;
    }
    div:nth-of-type(3)::before {
      left: 35%;
      animation-duration: 1.3s;
    }
    div:nth-of-type(4)::before {
      left: 65%;
      animation-duration: 1.2s;
    }
    div:nth-of-type(5)::before {
      left: 80%;
      animation-duration: 1.1s;
    }
  }

  span {
    color: var(--white);
    font-weight: var(--fontbold);
    &::after,
    &::before {
      border-radius: var(--baseborderradius);
      transition: opacity 0.15s var(--cubic);
    }
    &::after {
      background: var(--blue);
      z-index: -2;
    }
    &::before {
      background: var(--blue1);
      z-index: -2;
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        transform: translateY(-1px);
        .elements {
          div:first-of-type::before {
            animation-duration: 1.1s;
          }
          div:nth-of-type(2)::before {
            animation-duration: 0.9s;
          }
          div:nth-of-type(3)::before {
            animation-duration: 1s;
          }
          div:nth-of-type(4)::before {
            animation-duration: 0.9s;
          }
          div:nth-of-type(5)::before {
            animation-duration: 0.8s;
          }
        }

        span::after {
          opacity: 0;
        }

        &::after {
          opacity: 1;
        }
      }

      &:active {
        transform: translateY(1px);
        span::after {
          opacity: 1;
        }
        &::after {
          opacity: 0;
        }
      }
    `};
`
