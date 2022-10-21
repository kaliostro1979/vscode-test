import React, {useEffect} from 'react';
import {Button, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, removeCategory} from "../../../redux/slices/catyegory.slice";
import Preloader from "../../../components/Preloader";
import RemoveIcon from "../../../icons/RemoveIcon";

const Categories = () => {
    const categories = useSelector((state) => state.main.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleRemoveCategory = (category)=>{
        dispatch(removeCategory(category))
    }

    return (
        <ListGroup>
            {
                !categories ? <Preloader/> : categories.map(category => {
                    return (
                        <ListGroup.Item key={category._id} className={"CategoriesListItem"}>
                            <div className={"CategoriesListItemInner"}>
                                {category.name.split("-").join(" ")}
                                <Button variant={"danger"} onClick={()=>handleRemoveCategory(category.name)}>
                                    <RemoveIcon/>
                                </Button>
                            </div>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    );
};

export default Categories;
