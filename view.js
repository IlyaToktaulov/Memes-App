class View {
    constructor({onMemeChange}) {
        this.previewTopTextNode = document.querySelector('.js-top-text');
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');
        this.previewImageNode = document.querySelector('.js-image');
        this.settingsSelectNode = document.querySelector('.js-memes-select');
        
        this.onMemeChange = onMemeChange;
        
        this.settingsSelectNode.addEventListener('change', this._handleSelectChange)
    }

    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;

        this.previewTopTextNode.innerText = textTop;
        this.previewBottomTextNode.innerText = textBottom;
        this.previewImageNode.src = url;
    }

    renderMemesSelect(memes, currentMemeId) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;

            const optionNode = document.createElement('option');
            optionNode.setAttribute('value', id);
            optionNode.innerText = name;

            if (id === currentMemeId) {
                optionNode.setAttribute('selected', true);
            }

            this.settingsSelectNode.appendChild(optionNode)
        });
    }

    _handleSelectChange = () => {
        const id = this.settingsSelectNode.value;

        this.onMemeChange(id);
    }
}