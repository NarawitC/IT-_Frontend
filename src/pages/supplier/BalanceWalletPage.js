import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiDetail } from 'react-icons/bi';
function BalanceWalletPage() {
  const navigate = useNavigate();

  const [openTransactions, setOpenTransactions] = useState(false);
  const [openWithdrawalForm, setOpenWithdrawalForm] = useState(false);

  const mockArr = [
    {
      date: '2022-06-19',
      type: 'รับ',
      description: 'รายรับจาก order 200425EAN',
      amount: 100.0,
      status: 'COMPLETED',
    },
    {
      date: '2022-06-18',
      type: 'รับ',
      description: 'รายรับจาก order 200325EAN',
      amount: 900.0,
      status: 'COMPLETED',
    },
    {
      date: '2022-06-17',
      type: 'รับ',
      description: 'รายรับจาก order 200435EAN',
      amount: 1000.0,
      status: 'COMPLETED',
    },
    {
      date: '2022-06-16',
      type: 'รับ',
      description: 'รายรับจาก order 200335EAN',
      amount: 1000.0,
      status: 'COMPLETED',
    },
    {
      date: '2022-06-15',
      type: 'ถอน',
      description: 'การถอนไปยังเลขที่บัญชี (*1234)',
      amount: 2000.0,
      status: 'IN PROGRESS',
    },
    {
      date: '2022-06-14',
      type: 'ถอน',
      description: 'การถอนไปยังเลขที่บัญชี (*1235)',
      amount: 1000.0,
      status: 'COMPLETED',
    },
  ];
  return (
    <>
      <div className='flex flex-col'>
        <div className='mt-16'>
          <div className=''>
            <h1 className='text-4xl text-center font-bold'>Seller Balance</h1>
            <br />
            <p className='text-info text-center text-4xl font-bold'>
              ฿ 24,000.00
            </p>
          </div>
          <br />
          <br />
          <div className='flex justify-center'>
            <div className='flex gap-10 '>
              <div
                onClick={() => {
                  if (
                    openTransactions === false &&
                    openWithdrawalForm === false
                  ) {
                    setOpenWithdrawalForm(
                      (openWithdrawalForm) => !openWithdrawalForm
                    );
                  }
                  if (
                    openTransactions === false &&
                    openWithdrawalForm === true
                  ) {
                    setOpenWithdrawalForm(
                      (openWithdrawalForm) => !openWithdrawalForm
                    );
                  }
                  if (
                    openTransactions === true &&
                    openWithdrawalForm === false
                  ) {
                    setOpenWithdrawalForm(
                      (openWithdrawalForm) => !openWithdrawalForm
                    );
                    setOpenTransactions(
                      (openTransactions) => !openTransactions
                    );
                  }
                }}
                className='hover:scale-105 border-2 h-56 w-56 rounded flex flex-col items-center justify-center hover:border-warning'
              >
                <div className=' text-warning '>
                  {<RiMoneyDollarBoxLine size={100} />}
                </div>
                <h2 className='text-ghost text-bold text-xl'>Withdrawals</h2>
              </div>
              <div
                onClick={() => {
                  if (
                    openTransactions === false &&
                    openWithdrawalForm === false
                  ) {
                    setOpenTransactions(
                      (openTransactions) => !openTransactions
                    );
                  }
                  if (
                    openTransactions === false &&
                    openWithdrawalForm === true
                  ) {
                    setOpenWithdrawalForm(
                      (openWithdrawalForm) => !openWithdrawalForm
                    );
                    setOpenTransactions(
                      (openTransactions) => !openTransactions
                    );
                  }
                  if (
                    openTransactions === true &&
                    openWithdrawalForm === false
                  ) {
                    setOpenTransactions(
                      (openTransactions) => !openTransactions
                    );
                  }
                }}
                className='hover:scale-105 flex-col border-2 h-56 w-56 rounded flex items-center justify-center hover:border-info'
              >
                <div className='text-info'>{<TiDocumentText size={100} />}</div>
                <h2 className='text-ghost text-bold text-xl'>Transactions</h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          className={`${
            openWithdrawalForm === false ? 'hidden' : ''
          } border-2 p-4 rounded-lg`}
        >
          <div className='  border-b-2 border-t-2 p-2'>
            <h1 className='text-2xl font-bold'>{`ทำการโอนเงินจากบัญชี IT-Plus ไปยังหมายเลขบัญชี 1234099997`}</h1>
          </div>
          <div>
            <br />
            <div className='flex justify-between text-2xl'>
              <p>จำนวนเงินถอน</p>
              <p>10000.00</p>
            </div>
            <br />
            <div className='flex justify-between text-2xl'>
              <p>ค่าธรรมเนียม</p>
              <p>0.00</p>
            </div>
            <br />
            <div className='flex justify-between text-2xl'>
              <p>รวม</p>
              <p className='font-bold'>10000.00</p>
            </div>
          </div>
          <br />
          <br />
          <div className='flex justify-center'>
            <button className='btn btn-secondary w-[140px] hover:scale-105 font-bold text-2xl'>
              ยืนยัน
            </button>
          </div>
        </div>
        <div className=''>
          <table
            className={`${
              openTransactions === false ? 'hidden' : ''
            } table p-2`}
          >
            <thead>
              <tr className='text-center'>
                <th className=''>ลำดับ</th>
                <th className=''>วันที่</th>
                <th className=''>ประเภท</th>
                <th className=''>รายละเอียด</th>
                <th className=''>จำนวนเงิน</th>
                <th className=''>สถานะ</th>
                <th>รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              {mockArr.map((el, idx) => {
                return (
                  <>
                    <tr className='text-center hover' key={idx}>
                      <td className='text-center font-bold'>{idx + 1}</td>
                      <td className='font-bold'>{el.date}</td>
                      {el.type === 'รับ' ? (
                        <>
                          <td className='text-success font-bold'>{el.type}</td>
                        </>
                      ) : (
                        <>
                          <td className='text-error font-bold'>{el.type}</td>
                        </>
                      )}
                      <td>
                        {el.type === 'รับ' ? (
                          <>
                            <button
                              className='  font-bold text-ghost hover:text-blue-900 hover:scale-105'
                              onClick={() => {
                                navigate('/supplier/order/selected');
                              }}
                            >
                              {el.description}
                            </button>
                          </>
                        ) : (
                          <>
                            <p className=' font-bold text-ghost  '>
                              {el.description}
                            </p>
                          </>
                        )}
                      </td>
                      <td className='flex justify-end font-bold'>
                        {el.amount.toFixed(2)}
                      </td>
                      {el.status === 'COMPLETED' ? (
                        <>
                          <td className='text-success font-bold'>
                            {el.status}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className='text-warning font-bold'>
                            {el.status}
                          </td>
                        </>
                      )}
                      <td>
                        <button
                          className='flex w-[70px] justify-center hover:scale-125 text-info font-bold '
                          onClick={() => {
                            navigate('/supplier/transaction/selected');
                          }}
                        >
                          {<BiDetail size={25} />}
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </>
  );
}

export default BalanceWalletPage;
