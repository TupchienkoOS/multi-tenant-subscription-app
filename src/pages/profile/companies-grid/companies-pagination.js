import React from "react";

export const CompaniesPagination = (props) => {
  return (
    !props && (
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
    )
  );
};
