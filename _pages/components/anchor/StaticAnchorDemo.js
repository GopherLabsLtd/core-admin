import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;


const expComponent = () => (
    <div>
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
    </div>
)
export default expComponent
