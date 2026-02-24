const PREVIEW_MOCK = {
    url: '',
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
}


class Model {
    constructor() {
        this.memes = [];
        this.currentMemeId = null;
        this.preview = PREVIEW_MOCK;
    }

    getMemes() {
        return this.memes;
    }

    setMemes(memes) {
        this.memes = memes;
    }
    
    getCurrentMemeId() {
        return this.currentMemeId;
    }
    
    setCurrentMemeId(currentMemeId) {
        this.currentMemeId = currentMemeId;
    }

    getPreview() {
        return this.preview;
    }

    getCurrentMeme() {
        return this.memes[this.getCurrentMemeId]
    }
}