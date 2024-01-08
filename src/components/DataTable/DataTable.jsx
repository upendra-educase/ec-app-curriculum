import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Col, CustomInput, Input, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "react-feather";
import ReactPaginate from "react-paginate";
import ClearButton from "../ClearButton";
import PropTypes from "prop-types";
import SearchBox from "../SearchBox";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./index.css"
import CustomInputComponent from "../common/customInput";
// import CustomInputComponent from '../CustomInput/index'
const CustomHeader = ({
  handleFilter,
  value,
  handlePerPage,
  rowsPerPage,
  isSearchable,
  perPage,
  tableData,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Row>
        <Col className="py-4">
          <div>
            {isSearchable && (
              <>
                <SearchBox
                  type="text"
                  className="input-style "
                  onChange={(e) => handleFilter(e.target.value)}
                  value={value}
                  placeholder={t("search")}
                />
              </>
            )}
          </div>

        </Col>
        <Col className="py-4">
          <div>
            <ClearButton />
          </div>
        </Col>
      </Row>
    </div>
  );
};
function Datatable({
  tableData,
  columns,
  currentPage,
  totalPage,
  handlePerPage,
  handleFilter,
  handlePagination,
  value,
  rowsPerPage,
  noDataComponent,
  selectRow,
  handleChecboxChange,
  paginate,
  totalCount,
  isSearchable,
  perPage,
  noHeader,
  subHeaderComponent,
  selectableRowsNoSelectAll,
  clearSelectedRows,
  onSort,
  sortServer,
  fixedHeader,
  fixedHeaderScrollHeight,
  expandableRows,
  customStyles,
  expandableRowsComponent,
}) {
  const CustomPagination = () => {
    return (<div className="d-flex align-items-center justify-content-between px-2">
      <div className="flex-space-between-wrap">
        <div className='mb-1'>
          {tableData.length > 0 && (<>
            {perPage && (
              <Input
                className="input-style"
                type='select'
                id='sort-select'
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
                style={{ width: '100px', color: "#4D8EFF" }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
            )}
          </>)
          }
        </div>
      </div>
      <ReactPaginate
        pageCount={totalPage}
        nextLabel={<ChevronRight color="#4D8EFF" />}
        breakLabel="..."
        previousLabel={<ChevronLeft color="#4D8EFF" />}
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        forcePage={currentPage !== 0 ? currentPage : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={""}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={""}
        pageLinkClassName={"page-link"}
        containerClassName={"pagination react-paginate align-items-center py-4"}
      />
    </div>

    );
  };

  let checkboxCount = 0;
  const CheckboxComponent = React.forwardRef(({ onClick, ...rest }, ref) => {
    checkboxCount = checkboxCount + 1
    return (<>
      <CustomInputComponent
        innerRef={ref}
        onClick={onClick}
        {...rest}
        className='custom-control-Primary'
        type="checkbox"
        name="select-row-undefined"
        ariaLabel="select-row-undefined"
        id={`custom-checkbox-${checkboxCount}_${new Date().getMilliseconds()}_`}
      />
    </>)
  })

  return (
    <>
      <div
        className="invoice-list-dataTable"
      >
        <DataTable
          noHeader={!noHeader}
          pagination={paginate}
          paginationServer
          selectableRows={selectRow}
          subHeader={!noHeader}
          onSelectedRowsChange={handleChecboxChange}
          selectableRowsComponent={CheckboxComponent}
          columns={columns}
          responsive={true}
          expandableRowsComponent={expandableRowsComponent}
          sortServer={sortServer}
          fixedHeader={fixedHeader}
          expandableRows={expandableRows}
          fixedHeaderScrollHeight={fixedHeaderScrollHeight}
          onSort={onSort}
          noDataComponent={noDataComponent}
          customStyles={customStyles}
          clearSelectedRows={clearSelectedRows}
          sortIcon={<ChevronDown />}
          selectableRowsNoSelectAll={selectableRowsNoSelectAll}
          className="dataTableCss"
          paginationDefaultPage={currentPage}
          paginationComponent={CustomPagination}
          data={tableData}
          subHeaderComponent={
            subHeaderComponent ? (
              subHeaderComponent
            ) : (
              <>
                {!noHeader && (
                  <>
                    <CustomHeader
                      value={value}
                      rowsPerPage={rowsPerPage}
                      handleFilter={handleFilter}
                      handlePerPage={handlePerPage}
                      isSearchable={isSearchable}
                      perPage={perPage}
                      tableData={tableData}
                    />
                  </>
                )}
              </>
            )
          }
        />
        {totalCount > 0 && (
          <div className="total col-sm-2">Total Entries: {totalCount}</div>
        )}
      </div>
    </>
  );
}

Datatable.defaultProps = {
  tableData: [],
  columns: [],
  currentPage: 0,
  totalPage: 0,
  handlePerPage: () => { },
  handleFilter: () => { },
  handlePagination: () => { },
  value: "",
  statusValue: "",
  rowsPerPage: 10,
  handleStatusValue: () => { },
  selectRow: false,
  handleChecboxChange: () => { },
  paginate: true,
  isSearchable: true,
  perPage: true,
  noHeader: false,
  selectableRowsNoSelectAll: false,
  clearSelectedRows: false,
  fixedHeader: false,
};

export default Datatable;
