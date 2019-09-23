import React, { Component } from "react";
import axios from "axios";
class Add extends Component {
  state = {
    name: "",
    gender: 0,
    email: "",
    address: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  _onCheckVailiable() {
    let { name, gender, email, address } = this.state;
    if (
      name.length == 0 ||
      gender.length == 0 ||
      email.length == 0 ||
      address.length == 0
    )
      return false;
    return true;
  }

  _onHandleSubmit = async e => {
    e.preventDefault();
    if (!this._onCheckVailiable())
      return alert("Vui long nhap day du thong tin");
    let { name, gender, email, address } = this.state;
    let { data } = await axios.post('http://localhost:3000/posts', { name, gender, email, address});
    if(Object.keys(data).length > 0){
        this.props.getData(data)
        this.setState({
            name: "",
            gender: 0,
            email: "",
            address: ""
        })
    }else{
        alert('Them that bai');
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="col-md-6">
        <form
          className="text-center border border-light p-5"
          onSubmit={this._onHandleSubmit}
        >
          <p className="h4 mb-4">Thông tin</p>
          <input
            className="form-control mb-4"
            placeholder="Họ Tên"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <select
            className="form-control mb-4"
            placeholder="Giới Tính"
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
          >
            <option value={1}>Nam</option>
            <option value={0}>Nữ</option>
          </select>
          <input
            className="form-control mb-4"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            className="form-control mb-4"
            placeholder="Địa Chỉ"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />

          <button className="btn btn-info btn-block my-4" type="submit">
            Thêm
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
