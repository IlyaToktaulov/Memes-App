const PREVIEW_MOCK = {
    url: 'https://i.imgflip.com/1g8my4.jpg',
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
        this.currentMemeId = memes[0].id;
    }

    getCurrentMemId() {
        return this.currentMemeId;
    }

    getPreview() {
        return this.preview;
    }
}