export default {
  menuContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center'
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
    width: '90%'
  },

  workImage: {
    width: '100%',
    outline: '20px solid rgba(0,0,0,0.4)',
    transition: 'filter 0.2s',
    ':hover': {
      outline: '10px solid rgba(0,0,0,0.7)',
      cursor: 'pointer',
      filter: 'opacity(90%) blur(10px)'
    }
  },

  dropzone: {
    width: 'auto',
    height: 'auto',
    border: 'none',
  }
}
