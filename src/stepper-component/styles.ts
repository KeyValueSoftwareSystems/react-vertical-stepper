
const styles = {
  stepperContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    marginLeft: '10px',
    alignItems: 'center'
  },
  stepSection: {
    display: 'flex'
  },
  eachStep: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'

  },
  bubbleLineWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content'
  },
  labelContainer: {
    position: 'absolute',
    width: 'max-content',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column'
  },
  labelContainer__right: {
    top: '4px',
    left: '44px'
  },
  labelContainer__left: {
    top: '4px',
    right: '44px',
    alignItems: 'end'
  },
  labelTitle: {
    color: '#4F4F4F'
  },
  activeLabelTitle: {
    fontWeight: 700
  },
  labelDescription: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '21px',
    letterSpacing: '0.02em',
    color: '#929292'
  },
  activeLabelDescription: {
    color: '#676767'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  lineSeparator: {
    height: '22px',
    width: '1px',
    borderRight: '2px solid #dfdff2',
    margin: '4px 0'
  },
  inactiveStepLineSeparator: {
    borderRight: '2px dashed #dfdff2'
  }
} as const
export default styles;