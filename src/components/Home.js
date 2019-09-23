import React, { Component, Fragment, createRef } from "react";
import { Link, Route } from "react-router-dom";
import Add from "./Add";
import Search from "./Search";
import Table from "./Table";
import axios from "axios";

class Home extends Component {
    constructor(props){
        super(props)
        this.myRef = createRef();
    }

    state = {
        data: [],
    }

    componentDidMount() {
        axios.get("http://localhost:3000/posts").then(({ data }) => {
          this.setState({
            data: [...data]
          });
        });
      }

    _getItem = data => {
        this.setState(prevState => ({
            data: [...prevState.data, data]
        }))
    }

    _getKeySearch = key => {
       
        axios.get(`http://localhost:3000/posts?q=${key}`)
        .then(({data}) => {
            this.setState({
                data: [...data]
            })
        })
    }

    _handleRemoveItem = idItem => {
        axios.delete(`http://localhost:3000/posts/${idItem}`)
        .then(({data}) => {
            let newData = this.state.data.filter(item => item.id !== idItem );
           this.setState({
                data: [ ...newData ]
           })
        })
    }

  render() {
    return (
      <Fragment>
        <Add getData={data => this._getItem(data)} />
        <Search getKeySearch = { key => this._getKeySearch(key)} />
        <Table  datas={ this.state.data } handleRemove = { (idItem) => this._handleRemoveItem(idItem)} />
      </Fragment>
    );
  }
}

export default Home;
