import React from "react";

export const CompaniesHead = () => {
  return (
    <thead>
      <tr>
        <th
          data-toggle="true"
          className="footable-visible footable-first-column footable-sortable"
        >
          Company Name
          <span className="footable-sort-indicator"></span>
        </th>
        <th data-hide="phone" className="footable-visible footable-sortable">
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
        <th data-hide="phone" className="footable-visible footable-sortable">
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
        <th data-hide="phone" className="footable-visible footable-sortable">
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
  );
};
