import { Broadcast, Subscriber } from 'react-broadcast';
import Baseline from '../baseline';
import paperEffect from '../paper-effect';
import { bottomShaddow, bottomShaddowDarker } from '../boxes';
import remcalc from 'remcalc';
import is, { isNot } from 'styled-is';
import { Row } from 'react-styled-flexboxgrid';
import PropTypes from 'prop-types';
import React from 'react';

const StyledCard = Row.extend`
  position: relative;
  height: auto;
  min-height: ${remcalc(126)};
  margin-bottom: ${remcalc(10)};
  border: ${remcalc(1)} solid ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  box-shadow: ${bottomShaddow};
  flex-direction: column;

  margin-right: ${remcalc(0)};
  margin-left: ${remcalc(0)};

  ${is('collapsed')`
    min-height: auto;
    height: ${remcalc(48)};
    margin-bottom: ${remcalc(16)};
  `};

  ${is('collapsed', 'headed')`
    box-shadow: ${bottomShaddowDarker};
  `};

  ${is('flat')`
    box-shadow: none;
  `};

  ${is('stacked')`
    ${paperEffect}
  `};

  ${isNot('active')`
    background-color: ${props => props.theme.disabled};
  `};
`;

/**
 * @example ./usage.md
 */
const Card = ({
  children,
  collapsed = false,
  headed = false,
  active = true,
  ...rest
}) => {
  const render = value => {
    const newValue = {
      fromHeader: (value || {}).fromHeader,
      headed,
      collapsed,
      active
    };

    return (
      <Broadcast channel="card" value={newValue}>
        <StyledCard
          name="card"
          active={active}
          collapsed={collapsed}
          headed={headed}
          {...rest}
        >
          {children}
        </StyledCard>
      </Broadcast>
    );
  };

  return <Subscriber channel="card">{render}</Subscriber>;
};

Card.propTypes = {
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  headed: PropTypes.bool,
  flat: PropTypes.bool,
  stacked: PropTypes.bool
};

export default Baseline(Card);
