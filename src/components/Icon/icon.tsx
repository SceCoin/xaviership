import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type themeProps = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: themeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { theme, className, ...restProps } = props
  const classes = classNames('xavier-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon


