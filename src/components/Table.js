import React, { Component } from "react";
import { Link, Route } from "react-router-dom"
export class Table extends Component {

  render() {
    let { handleRemove } = this.props
    return (
      <div className="row">
        <div className="container-fluid">
          <table className="table mt-3 table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ Tên</th>
                <th>Giới tính</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Tuy Chon</th>
              </tr>
            </thead>
            <tbody>
              {this.props.datas.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{
                       item.gender == 0 ? 'Nữ' : 'Nam'
                    }</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                        <button className="btn btn-info pl-5 pr-5">
                            <Link to={`/update/${item.id}`}>Sua</Link>
                        </button>
                        <button className="btn btn-danger pl-5 pr-5 ml-1" onClick= { () => handleRemove(item.id) } >xoa</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Table;
