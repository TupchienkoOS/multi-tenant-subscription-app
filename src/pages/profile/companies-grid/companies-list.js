import React from "react";
import { Link, useHistory } from "react-router-dom";

export const CompaniesList = ({
  companies,
  onMouseEnter,
  onMouseLeave,
  deleteCompanyOwner,
}) => {
  let history = useHistory();
  const handleOnClick = (compId) => (e) => {
    console.log(e.currentTarget.id, compId);
    history.push(`/company/profile/${compId}`);
  };
  return (
    <tbody>
      {companies.map((company) => {
        const path = `/company/profile/${company.id}`;
        return (
          <tr
            key={company.id}
            id={company.id}
            className="footable-even"
            onClick={handleOnClick(company.id)}
          >
            <td className="footable-visible footable-first-column">
              <span className="footable-toggle"></span>
              <Link to={path}> {company.name}</Link>
            </td>
            <td className="footable-visible">{company.model}</td>
            <td className="footable-visible">{company.price}</td>
            <td className="footable-visible">
              <span className="label label-primary">{company.status}</span>
            </td>
            <td className="text-right footable-visible footable-last-column">
              <div className="btn-group">
                <button className="btn-white btn btn-xs">View</button>
                <button className="btn-white btn btn-xs">Edit</button>
                <button
                  className="btn-white btn btn-xs"
                  onClick={deleteCompanyOwner(company.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        );
      })}
      {/* <tr className="footable-odd footable-detail-show">
        <td className="footable-visible footable-first-column">
          <span className="footable-toggle"></span>
          Example product 2
        </td>
        <td className="footable-visible">Model 2</td>
        <td className="footable-visible">$40.00</td>
        <td style={{ display: "none" }}>4300</td>
        <td className="footable-visible">
          <span className="label label-primary">Enable</span>
        </td>
        <td className="text-right footable-visible footable-last-column">
          <div className="btn-group">
            <button className="btn-white btn btn-xs">View</button>
            <button className="btn-white btn btn-xs">Edit</button>
          </div>
        </td>
      </tr>      
      <tr className="footable-row-detail">
        <td className="footable-row-detail-cell" colSpan="5">
          <div className="footable-row-detail-inner">
            <div className="footable-row-detail-row">
              <div className="footable-row-detail-name">Description:</div>
              <div className="footable-row-detail-value">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </div>
            </div>
            <div className="footable-row-detail-row">
              <div className="footable-row-detail-name">Quantity:</div>
              <div className="footable-row-detail-value">4300</div>
            </div>
          </div>
        </td>
      </tr> */}
    </tbody>
  );
};
