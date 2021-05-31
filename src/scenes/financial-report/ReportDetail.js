import React, { Component } from "react";
import Layout from "./components/Layout";
import {numberFormat} from "../../helpers/utils";
import Table from "./components/Table.styled";

export default class ReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      data: null,
      reportDetail: null,
      payload: {
        date: '',
        debit: 0,
        credit: 0,
        info: '',
        reportId: parseInt(this.props.match.params.reportId)
      }
    }
  }
  fetchReportDetail() {
    fetch(`http://localhost:3001/reports/${this.props.match.params.reportId}`)
      .then(data => data.json())
      .then(response => {
        this.setState({reportDetail: response})
      });
  }

  fetchReportData() {
    fetch(`http://localhost:3001/reports/${this.props.match.params.reportId}/data`)
      .then(data => data.json())
      .then(response => {
        this.setState({data: response})
      })
  }

  fetchData() {
    this.fetchReportDetail();
    this.fetchReportData();
  }
  componentDidMount() {
    this.fetchData()
  }

  changePayload = (e) => {
    this.setState({
      payload: {
        ...this.state.payload,
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      }
    })
  };

  createNewData = () => {
    fetch(`http://localhost:3001/reports/${this.props.match.params.reportId}/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.payload)
    }).then(() => this.fetchReportData())
  };
  deleteData = (id) => {
    fetch(`http://localhost:3001/reports/${this.props.match.params.reportId}/data/${id}`, {
      method: 'DELETE',
    }).then(() => this.fetchReportData())
  };

  render() {
    let balance = 0;
    let totalDebit = 0;
    let totalCredit = 0;

    return (
      <Layout>
        <h1>Laporan Keuangan {this.state.reportDetail && `${this.state.reportDetail.month} ${this.state.reportDetail.year}`}</h1>

        <h3>Tambah data baru</h3>
        <Table>
          <thead>
          <th>Tanggal</th>
          <th>Ket / Uraian</th>
          <th>Debit</th>
          <th>Kredit</th>
          <th>Aksi</th>
          </thead>
          <tbody>
            <td><input onChange={this.changePayload} name="date" type="date" placeholder="Tanggal"/></td>
            <td><input onChange={this.changePayload} name="info" type="text" placeholder="Keterangan"/></td>
            <td><input onChange={this.changePayload} name="debit" type="number" placeholder="Debit"/></td>
            <td><input onChange={this.changePayload} name="credit" type="number" placeholder="Kredit" /></td>
            <td><button onClick={this.createNewData} className="btn btn-success">Tambah Data</button></td>
          </tbody>
        </Table>

        <h3>Data Laporan</h3>
        <Table className="financial-table" bordered striped >
          <thead>
          <tr>
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>Tanggal</th>
            <th rowSpan={2}>Ket / Uraian</th>
            <th colSpan={2}>Jumlah</th>
            <th rowSpan={2}>Saldo</th>
            <th rowSpan={2}>Aksi</th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
          </thead>
          <tbody>
          {this.state.data && this.state.data.map((statement, index) => {
            balance = balance + statement.debit - statement.credit;
            totalDebit = totalDebit + statement.debit;
            totalCredit = totalCredit + statement.credit;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{statement.date}</td>
                <td>{statement.info}</td>
                <td><span>Rp</span><span>{numberFormat(statement.debit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(statement.credit)}</span></td>
                <td><span>Rp</span><span>{numberFormat(balance)}</span></td>
                <td><button className="btn btn-danger" onClick={() => this.deleteData(statement.id)}>Hapus</button></td>
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
      </Layout>
    )
  }
}