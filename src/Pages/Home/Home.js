import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { Catalog } from "../../Components/Catalog/Catalog";
import { ShowProduct } from '../../Components/ShowProduct/ShowProduct';

export function Home() {
  return (
    <>
    <Banner/>
    <Catalog/>
    <ShowProduct/>
    </>
  )
}
