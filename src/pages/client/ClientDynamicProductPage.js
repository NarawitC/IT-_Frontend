import DynamicClientProductCard from '../../components/Client/products/DynamicClientProductCard';

import itemImg1 from '../../../src/productImg/item1.jpg';
import itemImg2 from '../../../src/productImg/item2.jpg';
import itemImg3 from '../../../src/productImg/item3.jpg';
import itemImg4 from '../../../src/productImg/item4.jpg';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useProductfilter } from '../../contexts/ProductContext';

function ClientDynamicProductPage() {
  const { product } = useProductfilter();
  return (
    <>
      <div className='bg-white '>
        <div className='max-w-2xl mx-auto py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8 '>
          <div className='flex flex-row gap-2'>
            <FaRegThumbsUp className='block mt-1' size={20} />
            <p className=' font-bold text-lg text-zinc-600'>
              IT Plus Recommend
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
            {product?.map((el) => (
              <DynamicClientProductCard el={el} />
            ))}
          </div>
        </div>
      </div>

      {/* <CardItems /> */}
    </>
  );
}

export default ClientDynamicProductPage;
