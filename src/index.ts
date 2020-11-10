import './my-app';

if (module.hot) {
  module.hot.accept('./my-app.ts', () => {
    console.log('Accepting update!');
  });
}
