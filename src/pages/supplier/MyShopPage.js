import { useContext } from 'react';

import SupplierLayout from '../../components/supplier/layout/SupplierLayout';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';

function MyShopPage() {
  // const mockObj = {
  //   firstName: 'พณิช',
  //   lastName: 'สุวิมลเสถียร',
  //   phoneNumber: '0870802727',
  //   email: 'lgwamhmmams@gmail.com',
  //   address: '24/14 หมู่ 3 ตำบลคลองสี่ อำเภอคลองหลวง จังหวัดปทุมธานี 12120',
  //   displayName: 'บริษัท มาร์เวล จำกัด',
  //   description:
  //     'IT Plus เริ่มต้นทำธุรกิจ เกี่ยวกับลำโพง หูฟัง และเครื่องเสียง โดยมีจุดเริ่มต้นจากความรักในเสียงเพลง นำไปสู่ความสนใจในเครื่องเสียง ไม่ว่าจะเป็นลำโพงคอมพิวเตอร์ ลำโพงบ้าน หรือ หูฟังรูปแบบต่างๆ เมื่อได้เข้าไปมีส่วนร่วมกับสังคมคนรักเครื่องเสียง',
  //   lineId: 'panit.su',
  //   bankAccountName: 'บริษัท มาร์เวล จำกัด',
  //   bankAccount: '0011223344',
  // };
  const { user } = useContext(SupplierAuthContext);
  console.log({ user: user });

  return (
    <div className=' '>
      <div className='bg-white flex flex-col items-center  h-[320px] pt-6 '>
        <div className='image overflow-hidden flex flex-col  w-[266px] justify-center items-center pt-6'>
          <img
            className='rounded-full w-56 h-56 bg-gradient-to-r p-[3px] from-info to-primary drop-shadow-xl hover:scale-110  '
            src='https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-121.jpg'
            alt=''
          />
          <br />
          <h1 className='text-gray-900 text-center font-bold text-xl leading-8 my-1'>
            {user.displayName}
          </h1>
        </div>
      </div>
      <div className='bg-white shadow-sm rounded-sm  p-10'>
        <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
          <span clas='text-green-500'>
            <svg
              className='h-5 text-primary'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              size={45}
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </span>
          <span className='tracking-wide text-xl'>เกี่ยวกับร้านค้า</span>
        </div>
        <br />
        <div className='text-gray-700 border-2 rounded-3xl p-4'>
          <div className='grid md:grid-cols-2 text-sm '>
            <div className='grid grid-cols-2 '>
              <div className='px-4 py-2 font-semibold'>ชื่อ:</div>
              <div className='px-4 py-2'>{user.firstName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>นามสกุล:</div>
              <div className='px-4 py-2'>{user.lastName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>เบอร์โทรศัพท์:</div>
              <div className='px-4 py-2'>{user.phoneNumber}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>Line ID:</div>
              <div className='px-4 py-2'>{user.lineId}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>ที่อยู่:</div>
              <div className='px-4 py-2'>{user.address}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>รายละเอียดร้านค้า:</div>
              <div className='px-4 py-2'>{user.description}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>E-mail:</div>
              <div className='px-4 py-2'>
                <a className='text-blue-800' href='mailto:jane@example.com'>
                  {user.email}
                </a>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>ชื่อบัญชี:</div>
              <div className='px-4 py-2'>{user.bankAccountName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>เลขที่บัญชี:</div>
              <div className='px-4 py-2'>{user.bankAccount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyShopPage;
