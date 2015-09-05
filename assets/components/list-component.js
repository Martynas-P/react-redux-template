var React = require('react');
var redux = require('redux');
var keymirror = require('keymirror');
var reactRedux = require('react-redux');
var _ = require('lodash');


const actions = keymirror({
  ADD_TEXT: '',
  REMOVE_TEXT: ''
});


function textItems(state = [], action) {
  let newState;

  switch (action.type) {
    case actions.ADD_TEXT:
      newState = [...state, action.text];

      return newState;
    case actions.REMOVE_TEXT:
      newState = _.dropRight(state);

      return newState;
    default:
      return state;
  }

}


function addText(text) {
  return {
     type: actions.ADD_TEXT,
     text
  };
}

function removeText() {
  return {
    type: actions.REMOVE_TEXT
  };
}


var itemIndex = 0;

class TextList extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    this.props.dispatch(addText('Item ' + (++itemIndex)));
  }

  removeItem() {
    this.props.dispatch(removeText());
  }

  render() {
    const items = _.map(this.props.items, (item) => {
      return (
        <li>{item}</li>
      );
    });

    return (
      <div>
        <strong>Total items: {this.props.items.length} </strong>

        <button onClick={this.addItem}>Add item</button>
        <button onClick={this.removeItem}>Remove item</button>

        <ul>
          {items}
        </ul>
      </div>
    );
  }
};


module.exports.TextItems = textItems;
module.exports.App = reactRedux.connect((state) => ({
  items: state
}))(TextList);