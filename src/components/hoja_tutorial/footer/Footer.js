import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="container">
          <p className="float-right">
            <a href="#">Subir</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mi Proyecto, Inc. &middot;{" "}
            <a href="#">Política de Privacidad</a> &middot;{" "}
            <a href="#">Términos</a>
          </p>
        </footer>
        <footer className="page-footer font-small stylish-color-dark pt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Footer Content
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
