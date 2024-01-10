import React, { useState } from 'react'
import Datatable from '../../../components/DataTable/DataTable'
import leftArrow from "../../../images/leftArrow.svg"
import { Card, CardBody, Col, Row } from 'reactstrap'
import { FaEdit } from "react-icons/fa"
import { RiShakeHandsFill } from "react-icons/ri"
import TableOptions from "../../../components/table-options"
import { Archive, ArrowDownCircle, CheckSquare, Layers, Printer, List, Grid } from 'react-feather'
import Toggle from 'react-toggle'
import ButtonComponent from '../../../components/button/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import SchoolCard from '../../../components/common/SchoolCard'
// import "./index.css"
import ClearButton from '../../../components/ClearButton'

const Subscriptions = () => {
  const navigate = useNavigate()
  const [assignModule, setAssignModule] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isActive, setIsActive] = useState(false)
  const [dataShowType, setDataShowType] = useState("list")

  const columns = [
    {
      name: "School",
      cell: () => (<>Mapewood Academy</>)
    },
    {
      name: "Branch",
      cell: (row, i) => (<>Bangalore Campus</>)
    },
    {
      name: "Curriculum",
      cell: () => (<>Digital Innovation</>)
    },
    {
      name: "Status",
      cell: () => (<>
        <div className='rounded-circle' style={{ width: "9px", height: '9px', backgroundColor: "#3DD598" }}></div>
        <span className='px-2'>Active</span>
      </>)
    },
    {
      name: "Option",
      center: true,
      cell: row => {

        const tableMenuType = [
          {
            value: "optionDropdown",
            isActive: true
          },
          {
            value: "optionIcon",
            isActive: false
          }
        ]

        const tableOptionArray = [
          {
            name: "Collect",
            value: "collect",
            icon: <FaEdit
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Configure Fee",
            value: "configureFee",
            icon: <CheckSquare
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Settlement",
            value: "settlement",
            icon: <RiShakeHandsFill
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Print Fees",
            value: "printfee",
            icon: <Printer
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Report",
            value: "report",
            icon: <ArrowDownCircle
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Fee Structure",
            value: "feeStructure",
            icon: <Archive
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          },
          {
            name: "Cofiguration Type",
            value: "configureType",
            icon: <Layers
              size={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? 15 : 18}
              className={tableMenuType.filter(io => io.isActive === true)[0].value === "optionDropdown" ? "color-white" : "default-color"}
            />,
            className: "",
            isActive: true
          }
        ]

        const handleTableOption = (e) => {

        }

        return (<>
          <div className="ml-2 view-table-option-tour">
            <TableOptions
              tableOptionArray={tableOptionArray.filter(io => io.isActive === true)}
              handleTableOption={handleTableOption}
              optionType={tableMenuType.filter(io => io.isActive)[0].value}
            />
          </div>

        </>)
      }
    }
  ]
  return (
    <>
      <div className='mb-3'>
        <Card  >
          <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>

            <div className='d-flex justify-content-between align-items-center gap' >
              <div className='d-flex justify-content-center align-items-center left-arrow-image' onClick={e => setIsActive(false)} >
                <img src={leftArrow} />
              </div>
              <h2>Subscriptions</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center gap'>
              <ButtonComponent buttonType={'secondary'} title={'Take A Tour'} />
              <ButtonComponent buttonType={'primary'} title={'Add New'} onClick={e => setAssignModule(true)} />
            </div>

          </div>
        </Card>
      </div>
      <>
        <Card className='overflow-hidden'>
          <Datatable
            columns={columns}
            tableData={[{}, {}, {}, {}, {}, {}]}
            selectRow={true}
            rowsPerPage={rowsPerPage}
            totalPage={5}
            paginate={true}
            perPage={true}
            dataShowType={dataShowType}
            setDataShowType={setDataShowType}
          />
        </Card>
      </>
    </>
  )
}

export default Subscriptions