class Controller {
    constructor() {
        this.model = new Model({
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange
        });
        this.view = new View({
            onMemeChange: this.handleMemeChange
        });
        this.api = new API();
    }

    init() {
        const preview = this.model.getPreview();
        this.view.renderPreview(preview);

        const memes = this.api.getMemes();

        this.model.setMemes(memes);
        this.model.setCurrentMemeId(memes[0].id);

        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    }

    handleMemeChange = (id) => {
        this.model.setCurrentMemeId(id);
    }

    handleModelCurrentMemeIdChange = () => {
        const preview = {
            ...this.model.getPreview(),
            url: this.model.getCurrentMeme().url
        }
        this.view.renderPreview(preview);
    }
}