import React from "react";
import {Container, Table} from "react-bootstrap";
import {numberFormat} from "../helpers/utils";
import {financialStatements} from "./data";

export default function FinancialStatement() {
  let balance = 0;
  let totalDebit = 0;
  let totalCredit = 0;

  return (
    <Container fluid>
      <h2 className="text-center">Table Keuangan</h2>
      <h3 className="text-center">Januari 2021</h3>
      <Table className="financial-table" bordered striped >
        <thead>
        <tr>
          <th rowSpan={2}>No</th>
          <th rowSpan={2}>Tanggal</th>
          <th rowSpan={2}>Ket / Uraian</th>
          <th colSpan={2}>Jumlah</th>
          <th rowSpan={2}>Saldo</th>
        </tr>
        <tr>
          <th>Debit</th>
          <th>Kredit</th>
        </tr>
        </thead>
        <tbody>
          {financialStatements.map((data, index) => {
            balance = balance + data.debit - data.credit;
            totalDebit = totalDebit + data.debit;
            totalCredit = totalCredit + data.credit;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.date}</td>
                <td>{data.info}</td>
                <td><span>Rp</span><span>{numberFormat(data.debit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(data.credit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(balance)}</span></td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={3}><b>TOTAL</b></td>
            <td><span>Rp</span><span>{numberFormat(totalDebit)}</span></td>
            <td><span>Rp</span><span>{numberFormat(totalCredit)}</span></td>
            <td><span>Rp</span><span>{numberFormat(balance)}</span></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
