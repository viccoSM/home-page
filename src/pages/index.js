import Header from "@/components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHomeApi} from "@/redux/action/actionHome";
import Frame from "@/components/Frame";
import EditorChoice from "@/components/EditorChoice";
import ProductPopular from "@/components/ProductPopular";
import LatestArticle from "@/components/LatestArticle";
import LatestReview from "@/components/LatestReview";
import Trending from "@/components/Trending";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeApi)
  }, [])
  return (
    <>
      <Header/>
      <Frame height={50} text='Top Frame 970x50'/>
      <Frame height={250} text='Billboard 970x250'/>
      <EditorChoice/>
      <ProductPopular/>
      <Frame height={250} text='Horizontal 970x250 {Internal Campaign Only}'/>
      <LatestArticle/>
      <LatestReview/>
      <Trending/>
      <Frame height={50} text='Buttom Frame 970x50'/>
    </>
  )
}
