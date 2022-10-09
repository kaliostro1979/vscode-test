import React from 'react';
import { currencyFormatter } from '../../utils/helpers';

const SaleCard = ({product}) => {
    return (
      <div className="SaleCard">
        <p className="SaleCardTitle">{product.title}</p>
        <div className="ProductCardImage">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="ProductCardPrice">
          <p className="SaleCardPrice">
            {currencyFormatter.format(product.price)}
            <span className="SaleCardSale">{product.sale}% Off</span>
          </p>
          <h3 className="SaleCardSalePrice">
            {currencyFormatter.format(product.sale_price)}
          </h3>
        </div>
      </div>
    )
};

export default SaleCard;