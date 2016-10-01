import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../usersActions';
import './UsersList.scss';

const propTypes = {
  users: PropTypes.object,
  fetchUsers: PropTypes.func.isRequired,
};

class UsersList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers(user) {
    return (
      <div className="user-list__card card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="btn btn-primary">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {_.map(this.props.users, this.renderUsers)}
      </div>
    );
  }
}

UsersList.propTypes = propTypes;

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UsersList);
