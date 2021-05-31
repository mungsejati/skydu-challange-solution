import React, { Component } from "react";
import Layout from "./components/Layout";
import DashboardContainer from "./components/DashboardContainer.styled";
import {Link} from "react-router-dom";

export default class ReportDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      reports: null,
      month: '',
      year: '',
      isValid: false
    }
  }

  fetchReports() {
    fetch('http://localhost:3001/reports')
      .then(data => data.json())
      .then(response => {
        this.setState({reports: response})
      })
  }

  deleteReport(id) {
    fetch(`http://localhost:3001/reports/${id}`, {
      method: "DELETE",
    }).then(data => data)
      .then(() => this.fetchReports())
  }

  componentDidMount() {
    this.fetchReports();
  }

  changeMonth = (e) => {
    this.setState({month: e.target.value});
    if(this.state.year && e.target.value) {
      this.setState({isValid: true})
    }
  }

  changeYear = (e) => {
    this.setState({year: e.target.value});
    if(this.state.month && e.target.value) {
      this.setState({isValid: true})
    }
  }

  createNewReport = () => {
    console.log(this.state.month, this.state.year)
    fetch('http://localhost:3001/reports', {
      method: 'POST',
      body: JSON.stringify({
        month: this.state.month,
        year: this.state.year
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => this.fetchReports())
  }

  render() {
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const years = ['2021', '2022', '2023'];

    return (
      <Layout>
        <h1>Laporan Keuangan</h1>
        <DashboardContainer>
          {!this.state.reports
            ? <>Loading...</>
            : this.state.reports.map(report => <div>
                <div>{report.month}</div>
                <div>{report.year}</div>
                <div>
                  <Link to={`/reports/${report.id}`} className="btn btn-primary">Lihat</Link>
                  <span onClick={() => this.deleteReport(report.id)}className="btn btn-danger" >Hapus</span>
                </div>
              </div>)
            }
            <div>
              <div>
                <select name="month" onChange={this.changeMonth}>
                  <option value="">Pilih Bulan</option>
                  {months.map((month, index) => <option value={month} key={index}>{month}</option>)}
                </select>
              </div>
              <div>
                <select name="years" onChange={this.changeYear}>
                  <option value="">Pilih Tahun</option>
                  {years.map((year, index) => <option value={year} key={index}>{year}</option>)}
                </select>
              </div>
              <div>
                <span className="btn btn-success" onClick={this.createNewReport}>Tambah baru</span>
              </div>
            </div>
        </DashboardContainer>
      </Layout>
    )
  }
}