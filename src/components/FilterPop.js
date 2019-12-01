import React, { Component } from 'react';

class FilterPop extends Component {
  render() {
    return (
      <form className="mb-5">
        <div className="form-row">
          <div className="form-group col-6 col-md-3">
            <label htmlFor="exampleFormControlFile1">Filter by Category</label>
            <select className="form-control form-control-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-6 col-md-3">
            <label htmlFor="exampleFormControlFile1">Filter by Category</label>
            <select className="form-control form-control-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-6 col-md-3">
            <label htmlFor="exampleFormControlFile1">Filter by Category</label>
            <select className="form-control form-control-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-6 col-md-3">
            <label htmlFor="exampleFormControlFile1">Filter by Category</label>
            <select className="form-control form-control-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <button className="btn btn-lg btn-primary mr-3" type="submit">
          Apply Filter
        </button>
        <button className="btn btn-lg btn-danger" type="reset">
          Reset All
        </button>
      </form>
    );
  }
}

export default FilterPop;
