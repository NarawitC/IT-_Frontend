import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import AddPropertyRow from '../form/AddPropertyRow';
function AddProductForm() {
  // const inputEl = useRef();
  const inputElMain = useRef();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const inputEl1 = useRef();
  const [subPicture1, setSubPicture1] = useState(null);
  const [subPictureURL1, setSubPictureURL1] = useState('');

  const inputEl2 = useRef();
  const [subPicture2, setSubPicture2] = useState(null);
  const [subPictureURL2, setSubPictureURL2] = useState('');

  const inputEl3 = useRef();
  const [subPicture3, setSubPicture3] = useState(null);
  const [subPictureURL3, setSubPictureURL3] = useState('');

  const inputEl4 = useRef();
  const [subPicture4, setSubPicture4] = useState(null);
  const [subPictureURL4, setSubPictureURL4] = useState('');

  // const [images, setImages] = useState(null);
  // const [imageURLs, setImageURLs] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [properties, setProperties] = useState([]);
  const [subCatOptions, setSubCatOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [indexes, setIndexes] = useState([]);
  // const arr = [{ state: 'name', setState: 'setName', text: 'ชื่อ' }];
  //get all sup cat by cat

  useEffect(() => {
    if (category === 'computer-notebook') {
      setSubCatOptions([
        { value: 'notebook', displayText: 'โน๊ตบุ๊ค' },
        { value: 'tablet', displayText: 'แท็ปเล็ต' },
        { value: 'computer-monitor', displayText: 'จอคอม' },
      ]);
    }
    if (category === 'it-accessories') {
      setSubCatOptions([
        { value: 'mouse', displayText: 'เมาส์' },
        { value: 'keyboard', displayText: 'คีย์บอร์ด' },
        { value: 'power-supply', displayText: 'ตัวจ่ายไฟ' },
      ]);
    }
    if (category === 'music-movie') {
      setSubCatOptions([
        { value: 'earphone', displayText: 'หูฟัง' },
        { value: 'speaker', displayText: 'ลำโพง' },
      ]);
    }
    console.log(subCatOptions);
  }, [category]);

  useEffect(() => {
    if (image === null) {
      return;
    }
    const newImageURL = URL.createObjectURL(image);
    // console.log(newImageURL);
    setImageURL(newImageURL);
  }, [image]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onMainPictureChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  useEffect(() => {
    if (subPicture1 === null) {
      return;
    }
    const newSubPicture1URL = URL.createObjectURL(subPicture1);
    // console.log(newImageURL);
    setSubPictureURL1(newSubPicture1URL);
  }, [subPicture1]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onSubPicture1Change = (event) => {
    if (event.target.files[0]) {
      setSubPicture1(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  useEffect(() => {
    if (subPicture2 === null) {
      return;
    }
    const newSubPicture2URL = URL.createObjectURL(subPicture2);
    // console.log(newImageURL);
    setSubPictureURL2(newSubPicture2URL);
  }, [subPicture2]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onSubPicture2Change = (event) => {
    if (event.target.files[0]) {
      setSubPicture2(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  useEffect(() => {
    if (subPicture3 === null) {
      return;
    }
    const newSubPicture3URL = URL.createObjectURL(subPicture3);
    // console.log(newImageURL);
    setSubPictureURL3(newSubPicture3URL);
  }, [subPicture3]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onSubPicture3Change = (event) => {
    if (event.target.files[0]) {
      setSubPicture3(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  useEffect(() => {
    if (subPicture4 === null) {
      return;
    }
    const newSubPicture4URL = URL.createObjectURL(subPicture4);
    // console.log(newImageURL);
    setSubPictureURL4(newSubPicture4URL);
  }, [subPicture4]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onSubPicture4Change = (event) => {
    if (event.target.files[0]) {
      setSubPicture4(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  // useEffect(() => {
  //   if (images === null) {
  //     return;
  //   }
  //   const newImageURLs = Array.from(images).map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   // console.log(newImageURLs);
  //   setImageURLs(newImageURLs);
  // }, [images]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // // console.log({ imageURLs: imageURLs });
  // const onImageChange = (event) => {
  //   //เวลามีการเลือก รูปภาพ, set ข้อมูล found ไปที่ state image
  //   // console.log(event.target.files);
  //   // setImage(event.target.files);
  //   if (event.target.files) {
  //     setImages(event.target.files);
  //   }
  // };
  //---------------------------------------------------------------------------

  return (
    <>
      <form className='pt-5'>
        <br />
        <h1 className='text-3xl'>เพิ่มสินค้า</h1>
        <div className=''>
          <br />
          <div className='flex justify-center flex-col'>
            <div
              className=' relative justify-center p-2 rounded-md 
                  '
              role='button'
              onClick={() => inputElMain.current.click()}
            >
              <div className='flex justify-center flex-col items-center'>
                <div className='flex flex-col justify-center'>
                  {imageURL ? (
                    <>
                      <div className='border-2 rounded p-2'>
                        <img
                          className='w-60 h-60'
                          src={imageURL}
                          alt='imageURL'
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='flex flex-col'>
                        <div className='border-2  hover:border-primary-focus w-60 h-60 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <p className='text-center'>รูปหลัก</p>
                      </div>
                    </>
                  )}
                </div>
                <br />
                <p className='btn btn-primary rounded-lg  text-center'>
                  อัพโหลดรูป
                </p>
              </div>
              <div className='flex justify-center'>
                <input
                  type='file'
                  accept='image/*'
                  className='hidden w-[350px] '
                  ref={inputElMain}
                  onChange={onMainPictureChange}
                />
              </div>
            </div>
            <br />

            <div className='flex gap-2 justify-center'>
              <div
                className='relative flex flex-col justify-center   p-2 rounded-md 
                  '
                role='button'
                onClick={() => inputEl1.current.click()}
              >
                {subPictureURL1 ? (
                  <>
                    <div className='border-2 rounded p-2 hover:border-primary-focus w-32 h-32'>
                      <img
                        className=''
                        src={subPictureURL1}
                        alt='subPictureURL1'
                      />
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 1`}</p>
                  </>
                ) : (
                  <>
                    <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                      {<MdAddAPhoto />}
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 1`}</p>
                  </>
                )}
              </div>
              <input
                type='file'
                accept='image/*'
                className='hidden '
                ref={inputEl1}
                onChange={onSubPicture1Change}
              />
              <div
                className=' flex flex-col relative justify-center   p-2 rounded-md 
                  '
                role='button'
                onClick={() => inputEl2.current.click()}
              >
                {subPictureURL2 ? (
                  <>
                    <div className=' w-32 h-32 border-2 rounded p-2 hover:border-primary-focus'>
                      <img
                        className=''
                        src={subPictureURL2}
                        alt='subPictureURL2'
                      />
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 2`}</p>
                  </>
                ) : (
                  <>
                    <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                      {<MdAddAPhoto />}
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 2`}</p>
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden  '
                      ref={inputEl2}
                      onChange={onSubPicture2Change}
                    />
                  </>
                )}
              </div>
              <input
                type='file'
                accept='image/*'
                className='hidden  '
                ref={inputEl2}
                onChange={onSubPicture2Change}
              />
              <div
                className=' flex flex-col relative justify-center  p-2 rounded-md 
                  '
                role='button'
                onClick={() => inputEl3.current.click()}
              >
                {subPictureURL3 ? (
                  <>
                    <div className=' w-32 h-32 border-2 rounded p-2 hover:border-primary-focus'>
                      <img
                        className=''
                        src={subPictureURL3}
                        alt='subPictureURL3'
                      />
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 3`}</p>
                  </>
                ) : (
                  <>
                    <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                      {<MdAddAPhoto />}
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 3`}</p>
                  </>
                )}
              </div>
              <input
                type='file'
                accept='image/*'
                className='hidden  '
                ref={inputEl3}
                onChange={onSubPicture3Change}
              />
              <div
                className=' flex flex-col relative justify-center  p-2 rounded-md hover:border-primary-focus
                  '
                role='button'
                onClick={() => inputEl4.current.click()}
              >
                {subPictureURL4 ? (
                  <div className=''>
                    <div className='border-2 rounded p-2 w-32 h-32'>
                      <img
                        className=''
                        src={subPictureURL4}
                        alt='subPictureURL4'
                      />
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 4`}</p>
                  </div>
                ) : (
                  <>
                    <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                      {<MdAddAPhoto />}
                    </div>
                    <br />
                    <p className='text-center'>{`รูป 4`}</p>
                  </>
                )}
              </div>
              <input
                type='file'
                accept='image/*'
                className='hidden'
                ref={inputEl4}
                onChange={onSubPicture4Change}
              />
            </div>

            {/* <div
              className=' flex flex-col relative justify-center border-2  p-2 rounded-md 
                  '
              role='button'
              onClick={() => inputEl.current.click()}
            >
              <div className='flex justify-center items-center gap-2'>
                {imageURLs.length > 0 ? (
                  imageURLs.map((el, index) => {
                    return (
                      <div className='flex flex-col'>
                        <div className='border-2  hover:border-primary-focus w-40 h-40 rounded-md flex justify-center items-center'>
                          <img
                            className='w-40 h-40 rounded-md object-fit p-2'
                            src={el}
                            alt={index}
                          />
                        </div>
                        <p className='text-center'>{`Image ${index + 1}`}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className='flex gap-4'>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <br />
              <div className='flex flex-col justify-center'>
                <div className='flex justify-center'>
                  <input
                    type='file'
                    multiple
                    accept='image/*'
                    className='hidden w-[350px] '
                    ref={inputEl}
                    onChange={onImageChange}
                  />
                  <p className='btn btn-secondary'>กรุณาอัพโหลดรูปสินค้า</p>
                </div>
              </div>
            </div> */}
            <br />
          </div>
          <br />
        </div>
        <div className='gap-2  grid  mb-6 lg:grid-cols-2'>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='address'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                ชื่อสินค้า
              </label>
              <input
                type='text'
                id='name'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='ชื่อสินค้า'
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                หมวดหมู่สินค้า
              </label>
              <select
                id='category'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option className=''>กรุณาเลือกหมวดหมู่สินค้า</option>
                <option value='computer-notebook'>
                  คอมพิวเตอร์และโน๊ตบุ๊ค
                </option>
                <option value='it-accessories'>อุปกรณ์ไอที</option>
                <option value='music-movie'>ดูหนัง ฟังเพลง</option>
              </select>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='subCategory'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                หมวดหมู่สินค้าย่อย
              </label>
              <select
                id='subCategory'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
                value={subCategory}
                onChange={(event) => setSubCategory(event.target.value)}
              >
                <option className=''>กรุณาเลือกหมวดหมู่สินค้าย่อย</option>
                {subCatOptions.map((el, index) => {
                  return (
                    <>
                      <option key={index} value={el.value}>
                        {el.displayText}
                      </option>
                    </>
                  );
                })}
                {/* <option value='computer-notebook'>
                  คอมพิวเตอร์และโน๊ตบุ๊ค
                </option>
                <option value='it-accessories'>อุปกรณ์ไอที</option>
                <option value='music-movie'>ดูหนัง ฟังเพลง</option> */}
              </select>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                ราคาสินค้า
              </label>
              <input
                type='text'
                id='price'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='ราคาสินค้า'
                required
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='brand'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                แบรนด์สินค้า
              </label>
              <input
                type='text'
                id='brand'
                className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='แบรนด์สินค้า'
                required
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='amount'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                จำนวน
              </label>
              <input
                type='text'
                id='amount'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='จำนวน'
                required
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-2 items-center '>
            {<TbListDetails />}
            <h1>กรุณากรอกคุณสมบัติสินค้า</h1>
          </div>
          <br />
          <table className='table w-[768px]'>
            <thead>
              <tr className=''>
                <th className='w-[40px]'>ลำดับ</th>
                <th className=''></th>
                <th className=''>คุณสมบัติ</th>
                <th className=''>รายละเอียด</th>
              </tr>
            </thead>
          </table>
          <tbody className=''>
            {properties.map((el, idx) => {
              return (
                <div className='' key={idx}>
                  <AddPropertyRow
                    property={el}
                    setProperties={setProperties}
                    properties={properties}
                    order={el.order}
                    index={idx}
                  />
                </div>
              );
            })}
          </tbody>

          <br />
          <div className='flex justify-center'>
            <button
              type='button'
              className='btn btn-info text-center hover:info-focus '
              onClick={() => {
                if (properties.length < 10) {
                  setProperties([
                    ...properties,
                    {
                      order: properties.length + 1,
                      topic: '',
                      description: '',
                    },
                  ]);
                }
              }}
            >
              เพิ่มรายการ
            </button>
          </div>
        </div>
        <br />
        <div className=''>
          <label
            for='description'
            className='block mb-2 text-sm font-medium text-gray-1200 '
          >
            รายละเอียดสินค้า
          </label>
          <textarea
            id='description'
            className=' w-[768px] h-[150px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='รายละเอียดสินค้า'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <br />
        <div className='flex justify-center'>
          <button type='button' className='btn btn-secondary btn-md '>
            เพิ่มสินค้า
          </button>
        </div>
        <br />
      </form>
    </>
  );
}

export default AddProductForm;
