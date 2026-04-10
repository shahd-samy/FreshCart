import { useParams } from "react-router";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useEffect, useState } from "react";
import { getSpecificProduct } from "../../../services/product-service";
import Loading from "../../components/Loading/Loading";
import ProductInfoSkeleton from "../../components/skeleton/ProductInfoSkeleton";
import RelatedProductsSkeleton from "../../components/skeleton/RelatedProductsSkeleton";
import PageMetadata from "../../components/PageMetadata/PageMetadata";

export default function ProductDetails() {
  const [loading, setLoading] = useState(true)
  const [productInfo, setProductInfo] = useState(null)
  const { id } = useParams()
  console.log(id)

  async function fetchProduct(id) {
    try {

      const data = await getSpecificProduct(id);
      setLoading(false)
      setProductInfo(data.data)
      // console.log(data.data)
    } catch (error) {
      console.log(error.message)
      setLoading(false)

    }

  }

  useEffect(() => {
    fetchProduct(id)

  }, [id])


if(loading) return<>
    <section className="container space-y-12 py-9 pb-15">

<ProductInfoSkeleton></ProductInfoSkeleton>
<RelatedProductsSkeleton></RelatedProductsSkeleton>
    </section>

</>

  return (
    <>
     <PageMetadata title={productInfo?.title} description={productInfo?.description} keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

    <section className="container space-y-12 py-9 pb-15">
    <ProductInfo productInfo={productInfo}></ProductInfo>
    <RelatedProducts  productInfo={productInfo} ></RelatedProducts>
    </section>
      
    </>
  )
}
