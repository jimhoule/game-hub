import { Badge } from '@chakra-ui/react';

type Props = {
    score: number
};

export function CriticScore({ score }: Props): JSX.Element {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow': '';

    return (
        <Badge
            fontSize='14px'
            paddingX={2}
            borderRadius={4}
            colorScheme={color}
        >
            {score}
        </Badge>
    );
}