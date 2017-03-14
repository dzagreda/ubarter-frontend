import React from 'react';

export default class Matched_User extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <img src={ this.props.avatar } width="140px" height="140px" alt="avatar" className="img-circle center-block" />
        <h3 className="text-center">{ this.props.username }</h3>
        <div className="media">
          <div className="media-left">
            <img className="media-object" src="img/examplebook.jpg" alt="item" />
          </div>
          <div className="media-body">
            <h4 className="media-heading">Textbook</h4>
            <ul className="list-group">
              <li className="list-group-item">Author: Tim Richard</li>
              <li className="list-group-item">Edition: 58th Edition</li>
              <li className="list-group-item">ISBN: 978 1123 33454</li>
              <li className="list-group-item">Publisher: PubPub, Inc</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
