export class Class {
    static staticProp: string = "Ahoj";
    static staticMethod(): string {
        return this.staticProp;
    }
}