import styled from 'styled-components';
import bannerImage from '@/assets/images/cover_01.jpeg'

const BannerWrapper = styled.div`
  height: 640px;
  background: url(${bannerImage}) no-repeat;
  background-size: 100% auto;
`

export default BannerWrapper;