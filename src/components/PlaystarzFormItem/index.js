import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef, useState } from 'react'

import {
  PlaystarzFormItem,
  PlaystarzFormItemTitle,
  PlaystarzFormItemWrapper,
  PlaystarzFormItemContent,
  PlaystarzFormItemLabel,
  PlaystarzFormItemInput,
  PlaystarzFormItemButton,
  PlaystarzFormItemError
} from './styledComponents'

const Default = forwardRef(
  (
    {
      id = 'FormItem',
      name = 'FormItem',
      title = '',
      type = 'text',
      icon = null,
      errors = null,
      register = null,
      readOnly = false,
      required = false,
      placeholder = '',
      className = '',
      button = null,
      onChange = null,
      isSelectOpen = null
    },
    ref
  ) => {
    const [activeName, setActiveName] = useState('')
    const isFocused = isSelectOpen === null ? name === activeName : isSelectOpen

    return (
      <PlaystarzFormItem className={className}>
        {title && (
          <PlaystarzFormItemTitle>
            {required && <FontAwesomeIcon icon={faStarOfLife} />}
            {title}
          </PlaystarzFormItemTitle>
        )}

        <PlaystarzFormItemWrapper>
          <PlaystarzFormItemContent isFocused={isFocused} hasButton={button}>
            {icon && (
              <PlaystarzFormItemLabel data-label={placeholder} htmlFor={id}>
                {icon}
              </PlaystarzFormItemLabel>
            )}

            <PlaystarzFormItemInput
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              ref={e => {
                if (!!e) {
                  register && register(e)
                  ref && (ref.current = e)
                }
              }}
              onFocus={() => isSelectOpen === null && setActiveName(name)}
              onBlur={() => isSelectOpen === null && setActiveName('')}
              readOnly={readOnly}
              onChange={e => onChange && onChange(e.target.value)}
              // autoComplete='off'
            />
          </PlaystarzFormItemContent>

          {button && (
            <PlaystarzFormItemButton
              theme='secondary'
              onClick={button.handler}
              type='button'
              disabled={button['disabled']}
            >
              {button.text}
            </PlaystarzFormItemButton>
          )}
        </PlaystarzFormItemWrapper>
        {errors && errors[name]?.message ? (
          <PlaystarzFormItemError>
            {errors[name]['message']}
          </PlaystarzFormItemError>
        ) : null}
      </PlaystarzFormItem>
    )
  }
)

export default Default
