import React,{useEffect} from 'react'

const OrderPreview = () => {
  useEffect(() => {
    document.title = 'Crackers Name | Order Details | Order Preview | ';
  }, []);
  return (
    <div>OrderPreview</div>
  )
}

export default OrderPreview