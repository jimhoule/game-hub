import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export function GameCardSkeleton(): JSX.Element {
    return (
        <Card>
            <Skeleton 
                height='200px'
            />

            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
}