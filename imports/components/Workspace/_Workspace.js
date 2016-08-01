export default {
  menuContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center'
  },

  toolsContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center'
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  workImageContainer: {
    width: '80%'
  },

  workImage: {
    width: '100%',
    outline: '50px solid rgba(0,0,0,0.4)',
    transition: 'outline-width 0.1s, outline-color 0.1s, filter 0.2s',
    ':hover': {

      outline: '5px solid rgba(0,0,0,0.5)',
      cursor: 'pointer',
      // filter: 'opacity(90%) blur(10px)'
    }
  },

  dropzone: {
    width: 'auto',
    height: 'auto',
    border: 'none',
  }
}
