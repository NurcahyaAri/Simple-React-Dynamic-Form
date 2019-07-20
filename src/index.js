import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "./styles.css";

class App extends Component {
  state = {
    form: [
      {
        name: "",
        age: 0
      }
    ]
  };
  delForm(e) {
    this.state.form.pop();
    let form = this.state.form;
    console.log(form);
    this.setState({
      form: form
    });
  }
  addForm(e) {
    this.state.form.push({
      name: "",
      age: 0
    });
    let form = this.state.form;
    console.log(form);
    this.setState({
      form: form
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form clasName="form-control">
            {this.state.form.map((val, i) => {
              let deleteForm;
              if (i > 0) {
                deleteForm = (
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="button"
                        onClick={e => {
                          this.delForm(e);
                        }}
                        value="Hapus form"
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div className="col-md col-sm col-xs" key={i}>
                  <div className="form-group">
                    <label for="text">Name</label>
                    <input
                      type="text"
                      clasName="input"
                      value={val.name}
                      onChange={e => {
                        let form = this.state.form;
                        form[i].name = e.target.value;
                        this.setState({
                          form: form
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      value={val.age}
                      onChange={e => {
                        let form = this.state.form;
                        form[i].age = e.target.value;
                        this.setState({
                          form: form
                        });
                      }}
                    />
                  </div>
                  {deleteForm}
                </div>
              );
            })}
            <input
              type="submit"
              onClick={e => {
                e.preventDefault();
                console.log(this.state.form);
              }}
              value="kirim"
            />
          </form>
          <div className="row">
            <div className="col-md-4">
              <input
                type="button"
                onClick={e => {
                  this.addForm(e);
                }}
                value="Tambah form"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
