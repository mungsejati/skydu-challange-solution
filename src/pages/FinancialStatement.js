import React from "react";
import {Container, Table} from "react-bootstrap";
import {numberFormat} from "../helpers/utils";
import {financialStatements} from "./data";

export default function FinancialStatement() {
  let totalSaldo = 0;
  let jumlahDebit = 0;
  let jumlahKredit = 0;

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
            totalSaldo = totalSaldo + data.debit - data.credit;
            jumlahDebit = jumlahDebit + data.debit;
            jumlahKredit= jumlahKredit+ data.credit;

            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.date}</td>
                <td>{data.info}</td>
                <td><span>Rp</span><span>{numberFormat(data.debit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(data.credit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(totalSaldo)}</span></td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={3}><b>TOTAL</b></td>
            <td><span>Rp</span><span>{numberFormat(jumlahDebit)}</span></td>
            <td><span>Rp</span><span>{numberFormat(jumlahKredit)}</span></td>
            <td><span>Rp</span><span>{numberFormat(totalSaldo)}</span></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
