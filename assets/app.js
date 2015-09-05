var React = require('react');

var reactRedux = require('react-redux');
var redux = require('redux');

var App = require('./components/list-component');

const store = redux.createStore(App.TextItems);

const Provider = reactRedux.Provider;
const TextList = App.App;


class Root extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <TextList />}
        </Provider>
      </div>
    );
  }

}


const container = document.getElementById('content');

if (container) {
  React.render(
    <Root />,
    container
  );
}