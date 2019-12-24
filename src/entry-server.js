import { createApp } from './main';

export default context => new Promise((reject, resolve) => {
  const { app } = createApp();
  resolve(app);
});
