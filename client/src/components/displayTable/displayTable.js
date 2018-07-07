import React, { Component } from "react";

class DisplayTable extends Component {
  
        render() {
         
          return (
            <div>
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
      
                <tbody className="text-white">
                  {this.props.data}
                
                </tbody>
      
              </table>
            </div>
          );
      
        }
      
      }
      


  export default DisplayTable;
