import React from 'react'
import Datatable from '../../../components/DataTable/DataTable'
import { Card, CardBody } from 'reactstrap'

const Schools = () => {

  const columns = [
    {
      name: "Title",
      cell: () => (<>buighkjjj</>)
    },
    {
      name: "Title",
      cell: () => (<>buighkjjj</>)
    },
    {
      name: "Title",
      cell: () => (<>buighkjjj</>)
    },
    {
      name: "Title",
      cell: () => (<>buighkjjj</>)
    },
  ]
  return (
    <>
      <Card>
        <Datatable
          columns={columns}
          tableData={[{}, {}, {}, {}, {}, {}]}
        />
      </Card>
    </>
  )
}

export default Schools