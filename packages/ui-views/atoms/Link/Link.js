/**
 * Futureproofing mountpoint for custom link behaviour, which inevitably is required later for
 * interop with some routing framework or similar..
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import type { Element } from 'react'

import React from 'react'
import themeable from 'react-themeable'
import { Link as BaseLink } from 'react-router'

type Props = {
  theme: Object,
  href: string,
  children: Element<*>,
};

const Link = ({ theme, children, href, ...props }: Props) => {
  const th = themeable(theme)
  const className = th(1, 'link').className // :SHONK: pass to themeable and back again since the react-router Link isn't themeable on its own
  const activeClassName = th(2, 'linkActive').className

  return (
    <BaseLink {...props}
      to={href}
      className={className}
      activeClassName={activeClassName}
    >
      {children}
    </BaseLink>
  )
}

export default Link
