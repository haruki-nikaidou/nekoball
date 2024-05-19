'use client'

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export interface HomeCardProps {
  imageUrl: string;
  seriesTitle: string;
  seriesId: string;
}

export function HomeCard({imageUrl, seriesTitle, seriesId}: HomeCardProps) {
  return (
      <Card
          isPressable
          onPress={() => {
            window.location.href = `/anime/${seriesId}`;
          }}
          className='bg-opacity-50 backdrop-blur-lg'
      >
        <CardBody>
          <Image
              shadow='sm'
              width="100%"
              alt={seriesTitle}
              className="w-full object-cover h-[12rem]"
              src={imageUrl}
              radius='lg'
          />
        </CardBody>
        <CardFooter>
          <strong>
            {seriesTitle}
          </strong>
        </CardFooter>
      </Card>
  );
}