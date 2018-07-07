import React, { Component } from "react";
import TableAPI from "../../utils/Table-API";

class Products extends Component {
  state={};
  saveUser = () => {
    // console.log(123);
    let newUser = {
      exercise: this.state.products,
      day: this.props.day,
      weekStart: this.props.weekStart
    }
    console.log(newUser);
          TableAPI
      .saveTable(newUser)
      .then(results => {
        console.log(results);
        this.setState({results})
            })
      // .catch(err => console.log(err));

          }
        constructor(props) {
          super(props);
      
          //  this.state.products = [];
          this.state = {};
          this.state.filterText = "";
          this.state.products = [
            {
              className: 1,
              name: "",
              Weight: '',
              Reps: "",
              Sets: '',
              time: ""
            }, {
              className: 2,
              name: "",
              Weight: '',
              Reps: "",
              Sets: '',
              time: ""
            }, {
              className: 3,
              name: "",
              Weight: '',
              Reps: "",
              Sets: '',
              time: ""
            }, {
              className: 4,
              name: "",
              Weight: '',
              Reps: "",
              Sets: '',
              time: ""
            }, {
              className: 5,
              name: "",
              Weight: '',
              Reps: "",
              Sets: '',
              time: ""
            }
          ];
      
        }
        handleUserInput(filterText) {
          this.setState({filterText: filterText});
        };
        handleRowDel(product) {
          var index = this.state.products.indexOf(product);
          this.state.products.splice(index, 1);
          this.setState(this.state.products);
        };
      
        handleAddEvent(evt) {
          var className = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
          var product = {
            className: className,
            name: "",
            Weight: "",
            Sets: "",
            Reps: "",
            time: "",
          }
          this.state.products.push(product);
          this.setState(this.state.products);
      
        }
      
        handleProductTable(evt) {
          var item = {
            className: evt.target.className,
            name: evt.target.name,
            value: evt.target.value,
          };
      var products = this.state.products.slice();
        var newProducts = products.map(function(product) {
      
          for (var key in product) {
            if (key == item.name && product.className == item.className) {
              product[key] = item.value;
      
            }
          }
          return product;
        });
          this.setState({products:newProducts});
        //  console.log(this.state.products);
        };
        render() {
      
          return (
            <div>
              <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
              <ProductTable className={this.props.className} onClick={this.saveUser} onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </div>
          );
      
        }
      
      }
      class SearchBar extends Component {
        handleChange() {
          this.props.onUserInput(this.refs.filterTextInput.value);
        }
        render() {
          return (
            <div>      
              <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
            </div>
      
          );
        }
      
      }
      
      class ProductTable extends Component {
      
        render() {
          var onProductTableUpdate = this.props.onProductTableUpdate;
          var rowDel = this.props.onRowDel;
          var filterText = this.props.filterText;
          var product = this.props.products.map(function(product) {
            if (product.name.indexOf(filterText) === -1) {
            }
            return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.className}/>)
          });
          return (
            <div>
      
      
            <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-white">Exercise</th>
                    <th className="text-white">Weight</th>
                    <th className="text-white">Reps</th>
                    <th className="text-white">Sets</th>
                    <th className="text-white">Time between Sets(optional)</th>

                  </tr>
                </thead>
      
                <tbody>
                  {product}
      
                </tbody>
      
              </table>
              <button className={this.props.className} onClick={this.props.onClick}>Submit</button>
            </div>
          );
      
        }
      
      }
      
      class ProductRow extends Component {
        onDelEvent() {
          this.props.onDelEvent(this.props.product);
      
        }
        render() {
      
          return (
            <tr className="eachRow">
              <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                "type": "name",
                value: this.props.product.name,
                className: this.props.product.className
              }}/>
              <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                type: "Weight",
                value: this.props.product.Weight,
                className: this.props.product.className
              }}/>
              <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                type: "Reps",
                value: this.props.product.Reps,
                className: this.props.product.className
              }}/>
              <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                type: "Sets",
                value: this.props.product.Sets,
                className: this.props.product.className
              }}/>
              <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                type: "time",
                value: this.props.product.time,
                className: this.props.product.className
              }}/>
              <td className="del-cell">
                <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
              </td>
            </tr>
          );
      
        }
      
      }
      class EditableCell extends React.Component {
      
        render() {
          return (
            <td>
              <input type='text' name={this.props.cellData.type} className={this.props.cellData.className} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
            </td>
          );
      
        }
      
      }

  export default Products;
