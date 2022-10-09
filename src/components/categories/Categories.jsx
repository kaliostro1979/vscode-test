import React, { useEffect, useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from './../../redux/slices/catyegory.slice'
import { Context } from './../../context/Context';

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.main.categories.categories)
  const {activeCategory, setActiveCategory} = useContext(Context)


  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleClick = (category)=>{
    setActiveCategory(category)
  }

  return (
    <Row>
      <Col>
        <div className="CategoriesListWrapper">
          <ul className="CategoriesList">
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className={
                    activeCategory === category
                      ? 'CategoriesListItem Active'
                      : 'CategoriesListItem'
                  }
                  onClick={() => handleClick(category)}
                >
                  {category}
                </li>
              )
            })}
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default Categories
