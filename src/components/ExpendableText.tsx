import { useState } from 'react';
import { Text, Button } from '@chakra-ui/react';

type Props = {
    children: string
};

export function ExpendableText({ children }: Props): JSX.Element | null {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    if (!children) return null;

    const limit = 300;
    if (children.length <= limit) return <Text>{children}</Text>

    const summary = isExpanded ? children : `${children.substring(0, limit)}...`;

    return (
        <Text>
            {summary}
            <Button
                size='xs'
                fontWeight='bold'
                colorScheme='yellow'
                marginLeft={1}
                onClick={(): void => {
                    setIsExpanded(!isExpanded);
                }}
            >
                {isExpanded ? 'Show Less' : 'Read More'}
            </Button>
        </Text>
    );
}