import React, { useState } from "react";
import * as XLSX from "xlsx";
export default function tool_excel() {
  // on change states
  const [tenbang, setTenbang] = useState("Nhập tên bảng");
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const [excelData, setExcelData] = useState(null);

  //todo handle File
  const fileType = ["application/vnd.ms-excel"];
  // const fileType = [
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  // ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  //todo submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        dateNF: "yyyy-MM-dd",
      });
      var data_insert =
        `INSERT INTO ` + tenbang + `(` + data[0].toString() + `) \nVALUES\n`;

      for (let i = 1; i < data.length; i++) {
        console.log(i);
        let data_child = data[i];
        let arr_child = [];
        for (let j = 0; j <= data_child.length; j++) {
          arr_child.push(`'` + data_child[j] + `'`);
        }
        data_insert +=
          `(` +
          arr_child
            .toString()
            .replace(/undefined/g, "")
            .replace(/32874/g, "1990-01-01") +
          `)` +
          (i == data.length - 1 ? "" : `,\n`);
      }
      const blob = new Blob([data_insert], { type: "sql" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = tenbang + ".sql";
      link.href = url;
      link.click();
    } else {
      setExcelData(null);
    }
  };
  return (
    <>
      <div className="section_product">
        <div className="section_home_title">
          <p>Convert Excel to Mysql</p>
        </div>
      </div>
      <div id="tool_excel" className="container">
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form_convert">
            <input
              value={tenbang}
              className="form-control"
              onChange={(e) => setTenbang(e.target.value)}
              type="text"
              placeholder="Tên bảng"
              onFocus={(e) => e.target.select()}
            />
            <label htmlFor="inputField" className="btn btn-info">
              Chọn file Excel
            </label>
            <input
              hidden
              id="inputField"
              type="file"
              className="form-control"
              onChange={handleFile}
              required
            ></input>
            <button type="submit" className="btn btn-primary">
              Chuyển đổi
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
