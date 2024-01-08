import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import leftArrow from "../../../images/leftArrow.svg"
import ButtonComponent from '../../../components/button/ButtonComponent'
import Datatable from '../../../components/DataTable/DataTable'
import { FaEdit } from "react-icons/fa"
import { RiShakeHandsFill } from "react-icons/ri"
import TableOptions from "../../../components/table-options"
import { Archive, ArrowDownCircle, CheckSquare, Layers, Printer } from 'react-feather'
import Toggle from 'react-toggle'
import "./curriculam.css"
import NewCurriculam from './NewCurriculam/NewCurriculam'
import { useNavigate } from 'react-router-dom'

const Curriculam = () => {
  const navigate = useNavigate();
  const [curriculamState, setCurriculamState] = useState('Curriculam')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isActive, setIsActive] = useState([])

  const columns = [
    {
      name: "Curriculum",
      cell: () => (<>Mathematics in Real-World</>)
    },
    {
      name: "Status",
      cell: (row, i) => {

        return (<>
          <div className='toggle-div-style' style={{ fontSize: "12px" }}>
            <Toggle
              icons={{
                checked: "Active",
                unchecked: "Inactive"
              }}
              onChange={() => {
                if (isActive.includes(i)) {
                  setIsActive(isActive.filter((io) => io !== i))
                } else {
                  setIsActive([...isActive, i])
                }
              }
              }
              checked={isActive.includes(i)}
            />
          </div>
        </>)
      }
    },
    {
      name: "Active",
      cell: () => (<>15</>)
    },
    {
      name: "Active",
      cell: () => (<>20</>)
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
  return (<>
    <div className='mb-3'>
      {
        curriculamState === 'Curriculam' ? <Card  >
          <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>

            <div className='d-flex justify-content-between align-items-center gap' >
              <div className='d-flex justify-content-center align-items-center left-arrow-image'>
                <img src={leftArrow} />
              </div>
              <h2>Curriculam</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center gap'>
              <ButtonComponent buttonType={'secondary'} title={'Take A Tour'} />
              <ButtonComponent buttonType={'primary'} title={'Add New'} onClick={e => navigate('/modules/addcurriculam')} />
            </div>

          </div>
        </Card> :
          <NewCurriculam />
      }
    </div>
    <Card className='overflow-hidden'>
      <Datatable
        columns={columns}
        tableData={[{}, {}, {}, {}, {}, {}]}
        selectRow={true}
        rowsPerPage={rowsPerPage}
        totalPage={10}
        paginate={true}
        perPage={true}
      />
    </Card>
  </>)
}

export default Curriculam