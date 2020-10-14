export function Emoji() {
  return (target: Object, key: string) => {
    let val = target[key];
    // console.log(Object.getOwnPropertyDescriptors(target));

    Object.defineProperty(target, key, {
      get() {
        return val;
      },
      set(value) {
        val = `◑ ${value} ◑`;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

export function Confirmable(message: string) {
  return (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    let ori = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const allow = window.confirm(message);
      if (allow) {
        const result = ori.apply(this, args);
        return result;
      }
      return null;
    };
  };
}
