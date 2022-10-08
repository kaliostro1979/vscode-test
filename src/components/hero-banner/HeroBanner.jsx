import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBannerData } from './../../redux/slices/banner.slice'

const HeroBanner = ({ page }) => {
  const dispatch = useDispatch()
  const bannerData = useSelector((state) => state.main.banner.bannerData)

  useEffect(() => {
    dispatch(getBannerData(page))
  }, [dispatch, page])

  return (
    <div className="HeroBanner">
      {bannerData.data && bannerData.data.title ? (
        <h1 className="HeroBannerTitle">{bannerData.data.title}</h1>
      ) : null}
      {bannerData.data && bannerData.data.text ? (
        <p className="HeroBannerText">{bannerData.data.text}</p>
      ) : null}
      {bannerData.data ? (
        <div className="HeroBannerImage">
          <img src={bannerData.data.image} alt="" />
        </div>
      ) : null}
    </div>
  )
}

export default HeroBanner
