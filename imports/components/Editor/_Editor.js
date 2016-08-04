var cursorOpacity = 1;

export default {
  editorContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  content: {
    fontSize: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    color: '#fff',
    padding: '2rem',
    paddingBottom: '10rem',
    wordBreak: 'break-all'
  },

  cursor: {
    marginLeft: '-0.5rem',
    opacity: cursorOpacity
  }
};
