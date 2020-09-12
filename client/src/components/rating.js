import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
import { editAideInDB, getAideFromDB } from "../actions/aideActionCreator";
import { getUser } from "../actions/auth";

var notesfinal = 0;
class Rating extends Component {
  state = {
    rating: null,
    hover: null,
  };

  sendNote = (e, el) => {
    console.log("zz", this.props.el);

    console.log("le nombre de notes de base ", Number(el));
    /*  console.log(
      "les nombre de personne de base ",
      Number(this.props.el.nb_per_note)
    );*/
    let moy1 = Number(this.props.el.notes) * Number(this.props.el.nb_per_note);
    console.log("moy1 apres calcul", moy1);
    let moy2 = Number(moy1) + Number(e);
    console.log("moy2", moy2);
    let nbt = Number(this.props.el.nb_per_note) + 1;
    console.log("nbt", nbt);
    notesfinal = Number(moy2) / Number(nbt);

    console.log("notesfinal", notesfinal);
    this.props.editAide({
      id: this.props.el._id,
      photo: this.props.el.photo,
      nom: this.props.el.nom,
      age: this.props.el.age,
      ville: this.props.el.ville,
      exp: this.props.el.exp,
      dispo: [
        this.state.Lundi ? "Lundi" : null,
        this.state.Mardi ? "Mardi" : null,
        this.state.Mercredi ? "Mercredi" : null,
        this.state.Jeudi ? "Jeudi" : null,
        this.state.Vendredi ? "Vendredi" : null,
        this.state.Samedi ? "Samedi" : null,
        this.state.Dimanche ? "Dimanche" : null,
      ],
      notes: notesfinal,
      nb_per_note: this.props.el.nb_per_note + 1,
      sexe: this.props.el.sexe,
      service: this.props.el.service,
      num: this.state.num,
      proprietaire: this.props.user._id,
      // nom_organzateur: this.state.nom_organzateur,
    },console.log("fffff"));
    //window.location.reload();
  };
  componentDidMount() {
    this.props.getAllAide();
    this.props.getUser();
  }
  render() {
    /// console.log("sds", this.props.el.notes);
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={(e) => {
                  this.setState({ rating: e.target.value });
                  this.sendNote(e.target.value);
                }}
              />{" "}
              <FaStar
                className="star"
                color={
                  ratingValue <= (this.state.hover || this.state.rating)
                    ? "#ffc107"
                    : "#070500"
                }
                size={20}
                onMouseEnter={(e) => this.setState({ hover: ratingValue })}
                onMouseLeave={(e) => this.setState({ hover: null })}
                onClick={() =>
                  this.sendNote(this.state.rating, this.props.notes)
                }
              />
            </label>
          );
        })}
        <p>the rating is {this.state.rating}.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.aides,
  user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  editAide: (el) => dispatch(editAideInDB(el)),
  getAllAide: () => dispatch(getAideFromDB()),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
