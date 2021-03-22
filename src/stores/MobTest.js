import { makeAutoObservable } from 'mobx'

// Model the application state.
class MobTest {
    value = 0

    constructor() {
      makeAutoObservable(this)
    }

    increase() {
      this.value++
    }

    decrease() {
      this.value--
    }

    reset() {
      this.value = 0
    }

    get number() {
      return `Число: ${this.value}`
    }
}

export const mobTest = new MobTest()
