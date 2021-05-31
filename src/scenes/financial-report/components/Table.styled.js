import styled from "styled-components";
import {Table as BsTable} from "react-bootstrap";

const Table = styled(BsTable)`
 text-align: center;

  thead th { vertical-align: middle }
  tr {
    &:not(:last-child) {
      td:nth-child(2) {
        text-transform: capitalize;
      }
    }

    &:last-child {
      td { font-weight: bold }
    }

    td {
      text-align: left;
      span {
        display: inline-block;
        
        :first-child { width: 30px; }
        :last-child {
          width: calc(100% - 30px);
          text-align: right;
        }
      }
    }
`;

export default Table;