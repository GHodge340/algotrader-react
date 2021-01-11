import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const items = [
  {
    src: './slide0.jpg',
    altText: 'AlgoTrader',
    caption: 'Cryptocurrency Trading Tool',
    capText: 'Make the best trades with your very own algorithmic trader'
  },
  {
    src: './slide01.jpg',
    altText: 'AlgoTrader',
    caption: 'Cryptocurrency Trading Tool',
    capText: 'Scanning the market on your behalf giving you freedom and wealth'
  },
  {
    src: './slide02.jpg',
    altText: 'AlgoTrader',
    caption: 'Cryptocurrency Trading Tool',
    capText: 'Financial Freedom Awaits you, Start Today!'
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} width="100%" alt={item.altText} />
        <CarouselCaption captionText={item.capText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="" directionText="" onClickHandler={previous} />
      <CarouselControl direction="" directionText="" onClickHandler={next} />
    </Carousel>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="./card1.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">24Hr Market Scans</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">CryptAlgo Market Scanner</CardSubtitle>
                <CardText>CryptAlgo's cryptocurrency scanner scans over 1200 digital assets over multiple exchanges to find the latest trending trades ensuring that you dont miss out on opportunities.</CardText>
                <Button>See Demo</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="./card2.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Trend Analysis</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">CryptAlgo Trend Analyzer</CardSubtitle>
                <CardText>Our Trend Analyzer examines the trends of the market's top cryptocurrencies and give you a direction of the asset's current trend.  Great for determining trading points.</CardText>
                <Button>See Demo</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="./card3.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Trading Strategies</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">CryptAlgo Trading Strategies</CardSubtitle>
                <CardText>We currently feature trading strategies based on an assets Moving Average, Trend Direction and Scalping opportunities. Giving you the tools necessary to improve your sucess rate.</CardText>
                <Button>See Demo</Button>
              </CardBody>
            </Card>
          </div>
      </div>
    </div>
    <div className="divider">
    <p>CryptAlgo Designed By: @GTheCodeGuy  2021</p>
    </div>
    </>
  );
}

export default Home;
