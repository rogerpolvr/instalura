import theme from '../../theme/index';
import { css } from 'styled-components';

const { breakpoints } = theme;

export const breakpointsMedia = cssByBreakpoints => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  console.log(breakpointsNames);
  return breakpointsNames.map(breakpointName => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `;
  });
};
