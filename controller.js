class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.api = new API();
    }

    init() {
        const memes = this.api.getMemes();

        this.model.setMemes(memes);

        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemId());

        const preview = this.model.getPreview();
        
        this.view.renderPreview(preview);
    }
}