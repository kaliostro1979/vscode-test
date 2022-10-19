import React from 'react'
import { Col } from 'react-bootstrap'
import { currencyFormatter } from '../../utils/helpers'
import StarIcon from './../../icons/StarIcon';
import { Link } from 'react-router-dom';

const BestSellersCard = ({ product }) => {
  const rate = Array.from({ length: 5 }, (v, i) => i)


  return (
    <Col className="mb-4">
      <div className="BestSellersCard">
        <div className={'BestSellersCardImage'}>
          <img
              src={`${process.env.REACT_APP_IMAGE_PATH}` + product.image[0].filename}
              alt={product.title}
              className={"ImageOne"}
              key={product.image[0].filename}
          />
          <img
              src={`${process.env.REACT_APP_IMAGE_PATH}` + product.image[1].filename}
              alt={product.title}
              className={"ImageTwo"}
              key={product.image[1].filename}
          />
        </div>
        <div className="BestSellersCardMeta">
          <Link
            to={{
              pathname: `/store/${product._id}`,
              search: `?prodcut=${product._id}`,
            }}
            className="BestSellersCardTitle"
          >
            {product.title}
          </Link>
          <div className="BestSellersCardRate">
            <ul className="BestSellersCardRateStars">
              {rate.map((item, index) => {
                if (item + 1 <= product.rate) {
                  return (
                    <li
                      key={index * Math.random()}
                      className="BestSellersCardRateStarsItem Yellow"
                    >
                      <StarIcon />
                    </li>
                  )
                } else {
                  return (
                    <li
                      key={index * Math.random()}
                      className="BestSellersCardRateStarsItem Gray"
                    >
                      <StarIcon />
                    </li>
                  )
                }
              })}
            </ul>
          </div>
          <div className="BestSellersCardPriceWrapper">
            <p className="BestSellersCardPrice">
              {currencyFormatter.format(product.price)}
            </p>
            {
              product.sale ? <>
                <p className="BestSellersCardSellPrice">
                  {currencyFormatter.format(product.sale_price)}
                </p>
                <p className="BestSellersCardSale">{product.sale}% Off</p>
              </> : null
            }
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BestSellersCard
