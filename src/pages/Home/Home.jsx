import HomeSlider from '../../components/HomeSlider/HomeSlider'
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures'
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import HomeDeals from '../../components/HomeDeals/HomeDeals'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import PageMetadata from '../../components/PageMetadata/PageMetadata'

export default function Home() {
  return (
    <>
      <PageMetadata title='Home' description='Shop fresh produce, dairy, and groceries online with fast delivery to your door.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>
    <HomeSlider></HomeSlider>
    <HomeFeatures></HomeFeatures>
    <HomeCategories></HomeCategories>
    <HomeDeals></HomeDeals>
    <FeaturedProducts></FeaturedProducts>
    </>
  )
}
