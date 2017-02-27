export class Player {
    constructor(
        public name: string,
    ) { }

    get avatarUrl(): string {
        return `https://api.adorable.io/avatars/60/${this.name}@adorable.io.png`;
    }
}
