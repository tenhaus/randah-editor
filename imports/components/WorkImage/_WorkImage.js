export default {
  workImageContainer: {
    width: '80%'
  },

  startInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backgroundOpacity: 0.9,
    minWidth: 400,
    minHeight: 200,
    color: '#343434'
  },

  headIcon: {
    fontSize: '3rem',
    color: '#E6807A'
  },

  workImage: {
    width: '100%',
    outline: '5px solid rgba(0,0,0,0.5)',
    transition: 'outline-width 0.1s, outline-color 0.1s, filter 0.2s',
    ':hover': {
      outline: '50px solid rgba(0,0,0,0.4)',

      cursor: 'pointer',
      // filter: 'opacity(90%) blur(10px)'
    }
  },
};
