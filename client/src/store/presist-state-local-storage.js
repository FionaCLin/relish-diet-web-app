export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
// localStorage.js
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log(serializedState, 'saving');
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
