import {makeAutoObservable} from "mobx";

export class UIStore {
  title = "StreamFlix";

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
