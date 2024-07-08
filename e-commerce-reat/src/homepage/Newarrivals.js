import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Newarrivals() {

    const [product, setproduct] = useState([])
    const [product1, setproduct1] = useState([])

    const [category, setcategory] = useState(['664ae01abcf7510de4f2ea5d'])
    const [category1, setcategory1] = useState(['664ae0a1bcf7510de4f2ea65'])

    // click-btn

    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(true);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);

    const handleClick1 = () => {
        if(!clicked1){
        setClicked1(!clicked1);
        setClicked2(false);
        setClicked3(false);
        setcategory('664ae01abcf7510de4f2ea5d')
        }    
    };

    const handleClick2 = () => {
        if(!clicked2){
            setClicked2(!clicked2);
            setClicked1(false);
            setClicked3(false);
            setcategory('664ae03bbcf7510de4f2ea5f')
        }
    };

    const handleClick3 = () => {
        if(!clicked3){
        setClicked3(!clicked3);
        setClicked1(false);
        setClicked2(false);
        setcategory('664ae08bbcf7510de4f2ea63')
        }    
    };

    const handleClick4 = () => {
        if(!clicked4){
        setClicked4(!clicked4);
        setClicked5(false);
        setClicked6(false);
        setcategory1('664ae0a1bcf7510de4f2ea65')
        }
    };

    const handleClick5 = () => {
        if(!clicked5){
        setClicked5(!clicked5);
        setClicked4(false);
        setClicked6(false);
        setcategory1('664ae0c4bcf7510de4f2ea67')
        }
    };

    const handleClick6 = () => {
        if(!clicked6){
        setClicked6(!clicked6);
        setClicked4(false);
        setClicked5(false);
        setcategory1('664ae0dfbcf7510de4f2ea69')
        }
    };

    const categorybtn1 = clicked1 ? 'category-btn-on' : 'category-btn-off';
    const categorybtn2 = clicked2 ? 'category-btn-on' : 'category-btn-off';
    const categorybtn3 = clicked3 ? 'category-btn-on' : 'category-btn-off';
    const categorybtn4 = clicked4 ? 'category-btn-on' : 'category-btn-off';
    const categorybtn5 = clicked5 ? 'category-btn-on' : 'category-btn-off';
    const categorybtn6 = clicked6 ? 'category-btn-on' : 'category-btn-off';

    useEffect(() => {

        axios.get(`http://localhost:3001/user/filter_category/${category}`)
            .then(function (res) {
                setproduct(res.data.data);
                // console.log(res.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [category])

    const getImage = (imageName) => {
        return `http://localhost:3001/images/${imageName}`;
    }

    useEffect(() => {

        axios.get(`http://localhost:3001/user/filter_category/${category1}`)
            .then(function (res) {
                setproduct1(res.data.data);
                // console.log(res.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [category1])

    const getImage1 = (imageName1) => {
        return `http://localhost:3001/images/${imageName1}`;
    }

    return (
        <div className="newarrivals-bg mb-5 pb-3">
            <div className="newarrivals-head">New Arrivals</div>
            {/* <div className="newarrivals-card-bg"> */}

            <Row>
                <center>
                    <Col sm={3} className='d-flex justify-content-center mb-4 category-btn-bg'>
                        <div><button className={categorybtn1} onClick={handleClick1}>Shirts</button></div>
                        <div><button className={categorybtn2} onClick={handleClick2}>T-Shirts</button></div>
                        <div><button className={categorybtn3} onClick={handleClick3}>Trousers</button></div>
                    </Col>
                </center>
            </Row>

            <Row>
                {
                    product.map((item) => {
                        console.log(item._id)
                        return (
                            <Col sm={3}>
                                <a href={`/product/${item._id}`} className='newarrivals-a'><Card className='newarrivals-card mb-2' style={{ width: '21rem' }}>
                                    <Card.Img className='newarrivals-card-img' variant="top" src={getImage(item.p_img)} />
                                    <Card.Body>
                                        {/* <Card.Text className='newarrivals-card-cate'>{item.p_category.category}</Card.Text> */}
                                        <Card.Title className='newarrivals-card-title'>{item.p_name}</Card.Title>
                                        <Card.Text className='newarrivals-card-price'>₹{item.p_price}</Card.Text>
                                    </Card.Body>
                                </Card></a>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row>
                <center>
                    <Col sm={3} className='d-flex justify-content-center mb-4 mt-5 category-btn-bg'>
                        <div><button className={categorybtn4} onClick={handleClick4}>Cargos</button></div>
                        <div><button className={categorybtn5} onClick={handleClick5}>T-Shirt</button></div>
                        <div><button className={categorybtn6} onClick={handleClick6}>Trouser</button></div>
                    </Col>
                </center>
            </Row>

            <Row>
                {
                    product1.map((item) => {
                        return (
                            <Col sm={3}>
                                <a href={`/product/${item._id}`} className='newarrivals-a'><Card className='newarrivals-card mb-2' style={{ width: '21rem' }}>
                                    <Card.Img className='newarrivals-card-img' variant="top" src={getImage1(item.p_img)} />
                                    <Card.Body>
                                        {/* <Card.Text className='newarrivals-card-cate'>{item.p_category.category}</Card.Text> */}
                                        <Card.Title className='newarrivals-card-title'>{item.p_name}</Card.Title>
                                        <Card.Text className='newarrivals-card-price'>₹{item.p_price}</Card.Text>
                                    </Card.Body>
                                </Card></a>
                            </Col>
                        )
                    })
                }
            </Row>
            {/* </div> */}
        </div>
    )
}

export default Newarrivals