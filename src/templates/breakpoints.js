const size = {
  mobileMax: '768px',
  tabletMax: '1024px',
  desktopMin: '1025px',
 }

 const device = {
  mobile: `(max-width: ${size.mobileMax})`,
  mobileAndTablet: `(max-width: ${size.tabletMax})`,
  desktop: `(min-width: ${size.desktopMin})`
 }

 const breakpoints = { size, device }

 export default breakpoints
