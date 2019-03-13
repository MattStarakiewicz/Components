var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-256.png'
          }),
          React.createElement('p', {className: 'contactLabel'}, 'Imię i Nazwisko: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, '' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )
      )
    },
  });