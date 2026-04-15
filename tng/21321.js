class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;

      // 기다리던 then들 실행
      this.callbacks.forEach(cb => cb(value));
    };

    executor(resolve);
  }

  then(callback) {
    if (this.state === 'fulfilled') {
      callback(this.value);
    } else {
      this.callbacks.push(callback);
    }
  }
}
const p = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("결과값!"); 
  }, 1000);
});