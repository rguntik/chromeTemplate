class PopupKeymap {
    constructor(rgKeymap) {
        this.rgKeymap = rgKeymap;
        this.instructions = [];
        chrome.storage.local.set({ inputValue: [] });
    }

    add(keys, callback, description) {
        this.instructions.push([keys, description]);
        this.rgKeymap.add(keys, callback);
        chrome.storage.local.set({inputValue: this.instructions});
    }
}
