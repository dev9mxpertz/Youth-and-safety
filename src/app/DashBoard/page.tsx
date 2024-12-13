import GroupTable from '@/Components/GroupTable';
import LayoutWrapper from '@/Components/LayoutWrapper';
import TableHead from '@/Components/TableHead';
import React from 'react'

function DashBoard
() {
  return (
    <div className='p-2'>
      <LayoutWrapper>
      
        <div className=" bg-white rounded-xl  p-[10px]">
          <TableHead />
          <GroupTable />
        </div>
      </LayoutWrapper>
    </div>
  );
}

export default DashBoard
