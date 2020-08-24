import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import { Label, Table, Button } from "semantic-ui-react";

export class GestionUsers extends Component {
  componentDidMount() {
    this.props.getAideFromDB();
  }
  render() {
    return (
      <div className="liste-reservation container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom-Prénom</Table.HeaderCell>
              <Table.HeaderCell>Délégation</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Jour</Table.HeaderCell>
              <Table.HeaderCell>nom_categorie</Table.HeaderCell>
              {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.aides /*.filter((el_organizateurs) => this.el_organizateurs === "" ?
                            el_organizateurs : el_organizateurs === "maazza"
        )*/
              .map((el, i) => (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{el.nom}</Label>
                  </Table.Cell>
                  <Table.Cell>{el.ville}</Table.Cell>
                  <Table.Cell>{el.age}</Table.Cell>
                  <Table.Cell>{el.sexe}</Table.Cell>
                  <Table.Cell>{el.dispo}</Table.Cell>
                  <Table.Cell>{el.exp}</Table.Cell>
                  {/*<Table.Cell>{el.nom_organzateur}</Table.Cell>*/}

                  <Table.Cell className="pos-Action ">
                    {/* <Button secondary>
                      <ModifEvent el={el} />
                    </Button> */}

                    <Button
                      outline
                      size="sm"
                      onClick={() => this.props.deleteEvent(el._id)}
                    >
                      <i class="fas fa-trash"></i>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}{" "}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                {/* <Menu floated="right" pagination>
                  <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' /> */}
                {/* </Menu>  </Menu.Item>
                </Menu> */}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aides: state.aides,
    user: state.auth,
  };
};
export default connect(mapStateToProps, { getAideFromDB })(GestionUsers);
