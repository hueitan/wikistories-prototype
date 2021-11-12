const MAX_FRAMES = 5

const makeFrameStyle = f => {
  return f.img ?
    {
      backgroundImage: 'url(' + f.img + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    } :
    { background: 'linear-gradient(338.27deg, #0BD564 -70.53%, #3366CC 71.84%)' }
}

export default {
  state: {
    id: null,
    revision: [],
    storyTitle: '', // @todo to be edited by user
    creationDate: null,
    currentFrameId: 1,
    copies: [],
    frames: [
      {
        id: 1,
        img: null,
        text: ''
      }
    ]
  },
  mutations: {
    selectFrame: (state, id) => state.currentFrameId = id,
    addFrame: (state) => {
      if (state.frames.length === MAX_FRAMES) {
        return
      }
      const newId = state.frames.length + 1
      state.frames.push({text:'', img: '', id: newId})
      state.currentFrameId = newId
    },
    resetFrame: (state, array) => {
      state.currentFrameId = array.length
      state.frames = array
    },
    setText: (state, text) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.text = text
    },
    setImg: (state, img) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.img = img
      f.storiesIdList = []
      f.storyId = null
    },
    setCreationDate: (state, date) => {
      state.creationDate = date;
    },
    setStoryId: (state, id) => {
      state.id = id;
    },
    setRevision: (state, revision) => {
      state.revision = revision;
    },
    setCopies: (state, copies) => {
      state.copies = copies.map( ({img, storiesIdList, storyId, text}) => ({img, storiesIdList, storyId, text}));
    }
  },
  actions: {
    selectFrame: ({commit}, id) => {
      commit('selectFrame', id)
    },
    addFrame: ({commit}) => {
      commit('addFrame')
    },
    resetFrame: ({commit}, array) => {
      commit( 'resetFrame', array )
    },
    setText: ({commit}, text) => {
      commit('setText', text)
    },
    setImg: ({commit}, img) => {
      commit('setImg', img)
    },
    setCreationDate: ({commit}) => {
      commit('setCreationDate', (new Date()).getTime())
    },
    setRevision: ({commit}, revision) => {
      commit('setRevision', revision)
    },
    setCopies: ({commit}, copies) => {
      commit('setCopies', copies)
    },
    setStoryId:({commit}, id) => {
      commit('setStoryId', id)
    }
  },
  getters: {
    thumbnails: (state) => {
      return state.frames.map(f => {
        const newFrame = {...f}
        if (f.id === state.currentFrameId) {
          newFrame.selected = true
        }
        newFrame.style = makeFrameStyle(f)
        return newFrame
      })
    },
    currentFrame: (state) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      if ( !f ) { return {} }
      return {
        text: f.text,
        style: makeFrameStyle(f),
        noImage: f.img === '',
        id: state.currentFrameId
      }
    },
    storyLength: state => state.frames.length,
    storyInfo: (state) => {
      return {
        id: state.id,
        revision: state.revision,
        title: state.frames[0].text, // @todo to be edited by user
        creationDate: state.creationDate,
        frames: state.frames,
        copies: state.copies
      }
    },
    valid: (state) => {
      return state.frames.length >= 2 && state.frames.every( f => f.img && f.text )
    }
  }
}
