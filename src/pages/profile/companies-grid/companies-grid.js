import React from "react";
import { CompaniesList } from "./companies-list";
import { CompaniesPagination } from "./companies-pagination";
import { CompaniesHead } from "./companies-head";

class CompaniesGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="ibox">
            <div className="ibox-title">
              <h5>Companies Table </h5>
              <div className="ibox-tools">
                <a className="collapse-link">
                  <i className="fa fa-plus" onClick={this.props.showWiz}></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 2
                    </a>
                  </li>
                </ul>
                <a className="close-link">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">
              <table className="table table-hover" data-page-size="15">
                <CompaniesHead showWiz={this.props.showWiz} />
                <CompaniesList
                  companies={this.props.companies}
                  deleteCompanyOwner={this.props.deleteCompanyOwner}
                />
                <CompaniesPagination />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesGrid;
