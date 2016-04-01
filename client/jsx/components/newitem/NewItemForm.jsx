import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export const Categories = new Mongo.Collection('categories');

export default class NewItemForm extends React.Component {

  renderCategories() {
    return (
        this.props.categories.map( (cat) => <option value={cat._id}>{cat.name}</option> )
      );
  }

  render() {
    return (
      <div>
        <h2>List an Item - Details</h2>
        <div className="row">
          <div className="col-md-8">
            <form>
              <fieldset className="form-group">
                <label htmlFor="title" className="sr-only">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Title" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="category" className="sr-only">Category</label>
                <select className="form-control c-select" id="category">
                  {this.renderCategories()}
                </select>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="description" className="sr-only">Description</label>
                <textarea className="form-control" id="description" rows="3" placeholder="Tell us about your item"></textarea>
              </fieldset>
            </form>
          </div>
          <div className="col-md-3">

          </div>
        </div>
      </div>
    );
  }
}


NewItemForm.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    categories: Categories.find({}).fetch(),
  };
}, NewItemForm);
