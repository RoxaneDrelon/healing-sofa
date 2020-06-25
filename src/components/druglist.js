import React from "react";
import axios from "axios";

class Druglist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        drug: {
        id: 0,
        medecine: "",
        administration_mode: "",
        date_start: "",
        date_end: "",
        user_id: "",
        
      },
    };
  }

  //#6
  componentDidUpdate(prevProps) {
    /* prevmedecine output the previously saved medecines name*/
    const prevmedecine = this.props.match.params.medecine;
    /* extractmedecine sort the medecines name of the next call*/
    const extractmedecine = prevProps.match.params.medecine;
    /* the if compares the 2 constants if they are different, it
   returns the last character extracted*/
    if (prevmedecine !== extractmedecine) {
      this.getMedecine(extractmedecine);
    }
  }
  //#3 //#7
  componentDidMount() {
    const medecine = this.props.match.params.medecine;
    this.getMedecine(medecine);
  }

  //get the elements in the API according to the medecines name then update the state of OneDrug
  //#4 //#8
  getMedecine(medecine) {
    axios.get(`https://localhost:7070/:user/drugs`).then(({ data }) => {
      this.setState({
        drug: data,
      });
    });
  }

  //#2 //#5 //#10
  // we return all the elements of a drug (OneDrug) in "FichePokemon" to put the elements in place.
  render() {
    return (
      <section className="Druglist" key={this.state.drug.i}>
        {this.state.drug.id > 0 ? (
          {this.state.drug.map((id, medecine) => {
              return (
                   <ul>
                     <li>{this.state.drug.i}</li>
                   </ul>
              );
          })}
        ) : null}
      </section>
    );
  }
}

export default Druglist;
