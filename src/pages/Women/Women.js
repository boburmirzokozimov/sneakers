import React, { useState } from "react";

import { useGetSneakersQuery, useGetInfoQuery } from '../../app/api/apiSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { decrement, increment } from "../../features/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { multiply, setActive, setTotalItems } from "../../features/ProductPrice";

import {
  Button,
  Counter,
  ActionContainer,
  Discount,
  Cost,
  CostContainer,
  Title,
  SubTitle,
  RightContainer,
  OtherImageContainer,
  OtherImages,
  MainImage,
  MainImageContainer,
  LeftContainer,
  ImageContainer

} from './Women.styles'

const Women = () => {
  const { data, isLoading, isError, error } = useGetSneakersQuery()
  const { data: info, isLoading: infoLoading } = useGetInfoQuery()

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter.value)

  const [isActive, setisActive] = useState(1)

  const incrementtHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    if (counter !== 0)
      dispatch(decrement())
  }

  const activeHandler = (id) => setisActive(id)

  const submitHandler = () => {
    dispatch(multiply(counter * cost))
    dispatch(setActive(true))
    dispatch(setTotalItems(counter))
  }

  let content;

  if (infoLoading) return content = <h1>Loading</h1>
  if (isLoading) return content = <h1>Loading</h1>
  if (isError) return content = <h1>{error}</h1>

  const cost = info[0]?.cost * info[0]?.discount / 100;

  content = <ImageContainer>
    <LeftContainer>
      <MainImageContainer>
        {
          data?.map(item => item.id === isActive && (< MainImage src={`${item.src} `} key={item.id} />))
        }
      </MainImageContainer>
      <OtherImageContainer>
        {
          data?.map(item => (
            <OtherImages border={item.id === isActive ? 'active' : 'inactive'} key={item.id} src={item.src} alt={item.alt} onClick={() => activeHandler(item.id)} />
          ))
        }
      </OtherImageContainer>
    </LeftContainer>
    {
      info.map(info => (<RightContainer key={info.title}>
        <SubTitle>
          {info?.subtitle}
        </SubTitle>
        <Title>{info?.title}</Title>
        <p>{info?.body}</p>
        <CostContainer>
          <Cost>${cost}</Cost>
          <Discount>{info?.discount}%</Discount>
        </CostContainer>
        <span>${info?.cost}</span>
        <ActionContainer>
          <Counter>
            <span onClick={decrementHandler}>-</span>
            {counter}
            <span onClick={incrementtHandler}>+</span>
          </Counter>
          <Button
            onClick={submitHandler}
          > <span><AiOutlineShoppingCart size='20px' /></span> Add to cart</Button>
        </ActionContainer>
      </RightContainer>
      ))
    }
  </ImageContainer>;

  return content;
};

export default Women;
