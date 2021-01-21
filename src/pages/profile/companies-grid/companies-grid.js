import React from "react";
import { CompaniesList } from "./companies-list";
import { CompaniesPagination } from "./companies-pagination";
import { CompaniesHead } from "./companies-head";

class CompaniesGrid extends React.Component {
  constructor() {
    super();
  }

  handleOnClick = (e) => {
    console.log(e.currentTarget.id);
  };

  render() {
    return (
      <div className="ibox-content m-b-sm border-bottom">
        <div className="row">
          <div className="col-lg-12">
            <div className="ibox">
              <div className="ibox-content">
                <table
                  className="footable table table-stripped toggle-arrow-tiny footable-loaded tablet breakpoint"
                  data-page-size="15"
                >
                  <CompaniesHead />
                  <CompaniesList handleOnClick={this.handleOnClick} />
                  <CompaniesPagination />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesGrid;
