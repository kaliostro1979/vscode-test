import React, { useEffect, useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Context} from "../../context/Context";
import {getCategories} from "../../redux/slices/catyegory.slice";


const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.main.categories.categories)
  const {activeCategory, setActiveCategory} = useContext(Context)


  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(()=>{
    setActiveCategory('all')
  }, [setActiveCategory])

  const handleClick = (category)=>{
    setActiveCategory(category)
  }

  return (
    <Row>
      <Col>
        <div className="CategoriesListWrapper">
          <ul className="CategoriesList">
            <li
                className={
                  activeCategory === "all"
                      ? 'CategoriesListItem Active'
                      : 'CategoriesListItem'
                }
                onClick={() => handleClick("all")}
            >all
            </li>
            {categories && categories.map((category) => {
              return (
                <li
                  key={category._id}
                  className={
                    activeCategory === category.name
                      ? 'CategoriesListItem Active'
                      : 'CategoriesListItem'
                  }
                  onClick={() => handleClick(category.name)}
                >
                  {category.name.split("-").join(" ")}
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
