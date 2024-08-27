import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

export function GenreItemSkeleton(): JSX.Element {
  return (
    <HStack>
      <Skeleton boxSize="32px" />

      <SkeletonText />
    </HStack>
  );
}
