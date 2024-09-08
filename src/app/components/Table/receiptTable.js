import React from "react";
import { CustomButton } from "../Button";
import { DeleteOutlined } from "@ant-design/icons";
import { redColor, whiteColor } from "../../../assets/colors";

const ReceiptTable = ({ tableData, setTableData, handleSubmit }) => {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    setTableData([
      ...tableData,
      {
        chequeDate: "",
        chequeNo: "",
        Amount: "",
        bankName: "",
        depositBank: "",
        drawnBank: "",
        debitAccount: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <div className="receipt-table">
      <table>
        <thead>
          <tr>
            <th>Cheque Date</th>
            <th>Cheque No</th>
            <th>Amount</th>
            <th>Bank Name</th>
            <th>Deposit Bank</th>
            <th>Drawn Bank</th>
            <th>Debit Account</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="chequeDate"
                  value={data.chequeDate}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="chequeNo"
                  value={data.chequeNo}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="Amount"
                  value={data.Amount}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="bankName"
                  value={data.bankName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="depositBank"
                  value={data.depositBank}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="drawnBank"
                  value={data.drawnBank}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <input
                  className="border border-secondary rounded"
                  type="text"
                  name="debitAccount"
                  value={data.debitAccount}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td className="text-center">
                <DeleteOutlined onClick={() => removeRow(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-row receipt-table-footer m-0 pt-3 justify-content-end">
        <CustomButton
          handleClick={addRow}
          buttonName={"Add Row"}
          bgColor={redColor}
          color={whiteColor}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <CustomButton
          handleClick={handleSubmit}
          buttonName={"Submit"}
          bgColor={redColor}
          color={whiteColor}
        />
      </div>
    </div>
  );
};

export default ReceiptTable;
