import React from "react";
import { CompaniesList } from "./companies-list";

class CompaniesGrid extends React.Component {
  constructor() {
    super();
  }

  handleOnClick = (e) => {
    console.log(e.currentTarget.id);
  };

  getCompanies = () => [
    {
      id: 1,
      name: "Example product 1",
      model: "Model 1",
      status: "Enable",
      price: "$50.00",
      description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content
      here, content here', making it look like readable English.`,
    },
    {
      id: 2,
      name: "Example product 2",
      model: "Model 2",
      status: "Disable",
      price: "$50.00",
      description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content
      here, content here', making it look like readable English.`,
    },
  ];
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
                  <thead>
                    <tr>
                      <th
                        data-toggle="true"
                        className="footable-visible footable-first-column footable-sortable"
                      >
                        Company Name
                        <span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        data-hide="phone"
                        className="footable-visible footable-sortable"
                      >
                        Model<span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        data-hide="all"
                        className="footable-sortable"
                        style={{ display: "none" }}
                      >
                        Description
                        <span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        data-hide="phone"
                        className="footable-visible footable-sortable"
                      >
                        Price<span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        data-hide="phone,tablet"
                        className="footable-sortable"
                        style={{ display: "none" }}
                      >
                        Quantity
                        <span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        data-hide="phone"
                        className="footable-visible footable-sortable"
                      >
                        Status<span className="footable-sort-indicator"></span>
                      </th>
                      <th
                        className="text-right footable-visible footable-last-column"
                        data-sort-ignore="true"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <CompaniesList
                    companies={this.getCompanies()}
                    handleOnClick={this.handleOnClick}
                  />
                  <tfoot>
                    <tr>
                      <td colSpan="6" className="footable-visible">
                        <ul className="pagination float-right">
                          <li className="footable-page-arrow disabled">
                            <a data-page="first" href="#first">
                              «
                            </a>
                          </li>
                          <li className="footable-page-arrow disabled">
                            <a data-page="prev" href="#prev">
                              ‹
                            </a>
                          </li>
                          <li className="footable-page active">
                            <a data-page="0" href="#">
                              1
                            </a>
                          </li>
                          <li className="footable-page">
                            <a data-page="1" href="#">
                              2
                            </a>
                          </li>
                          <li className="footable-page-arrow">
                            <a data-page="next" href="#next">
                              ›
                            </a>
                          </li>
                          <li className="footable-page-arrow">
                            <a data-page="last" href="#last">
                              »
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tfoot>
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
