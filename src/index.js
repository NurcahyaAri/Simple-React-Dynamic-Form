import React, { Component } from "react";
import ReactDOM from "react-dom";

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
      <div>
        <form>
          {this.state.form.map((val, i) => {
            return (
              <div className="row" key={i}>
                <div className="col-md">
                  <label>Name</label>
                  <input
                    type="text"
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
                <div className="col-md">
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
        <input
          type="button"
          onClick={e => {
            this.addForm(e);
          }}
          value="Tambah form"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
