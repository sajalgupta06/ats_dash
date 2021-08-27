import React from "react";
import "../JoinedTable/JoinedTable.scss";

export default function LeaveRequestTable() {
  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            <tr class="table__row">
              <td class="table__cell table__cell--no-wrap">Name</td>

              <td class="table__cell table__cell--no-wrap">ID</td>
              <td class="table__cell table__cell--no-wrap">Applied On</td>
              <td class="table__cell table__cell--no-wrap">Leave From</td>
              <td class="table__cell table__cell--no-wrap">Form Date</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Leave Till
              </td>
              <td class="table__cell table__cell--no-wrap">Comments</td>
              <td class="table__cell table__cell--no-wrap">Counts</td>
              <td class="table__cell table__cell--no-wrap">Status</td>
            </tr>
          </thead>

          <tbody class="table__body">
            {[...Array(14)].map((elementInArray, index) => {
              return (
                <>
                  <tr className="spacer"></tr>
                  <tr class="table__row">
                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      Avi
                    </td>

                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      #J4521FFD
                    </td>

                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      22 July, 2021
                    </td>
                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      2 August, 2021
                    </td>
                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      5 Aug, 2021
                    </td>
                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      1 Aug, 2021
                    </td>
                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      Lorem Ipsum dolor
                    </td>

                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      4 Days
                    </td>

                    <td class="UserTable__name table__cell table__cell--no-wrap">
                      Approved
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="table-footer">
          <div className="footer-left">Showing 10 from 100 data</div>
          <div className="footer-right">
            <button className="btn btn-w btn-inactive">{`<< Previous`}</button>

            <button className="btn btn-inactive pages">1</button>
            <button className="btn  btn-inactive pages">2</button>

            <button className="btn btn-w btn-inactive">{`Next >>`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
