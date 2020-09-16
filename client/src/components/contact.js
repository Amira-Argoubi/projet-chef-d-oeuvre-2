import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const Contact = () => {
  return (
    <section className="my-5 contact-forms" >
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody style={{width:"400px",height:"400px"}}>
              <div className="form-header accent-1 ">
                <h3 className="mt-2">
                  <MDBIcon className="icon-contact" icon="envelope" style={{fontSize:"30px"}} /> Contactez-nous:
                </h3>
              </div>

              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Nom-Prénom"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label=" email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Sujet"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue btn-forms">envoyer</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px",width:"437px"
          }}
          >
            <iframe
              width="437"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.177416801452638%2C36.836801711370136%2C10.1848840713501%2C36.84207381614425&amp;layer=opnvkarte&amp;marker=36.83943780918646%2C10.181150436401367"
            ></iframe>
          </div>
          <br />
          
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default Contact;
