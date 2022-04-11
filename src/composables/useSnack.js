const defaultOptions = {
  text: '',
  time: 2000,
  delay: 0,
};

export default function useSnack(store, options) {
  options = { ...defaultOptions, ...options };

  return store.dispatch('snack/setSnack', options);
}
