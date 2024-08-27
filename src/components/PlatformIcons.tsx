import { Icon, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
// Types
import { Platform } from '../types/platform';

type Props = {
  platforms: Platform[];
};

const iconsMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
  web: BsGlobe,
};

export function PlatformIcons({ platforms }: Props): JSX.Element {
  return (
    <HStack>
      {platforms.map((platform: Platform): JSX.Element => {
        return (
          <Icon
            key={platform.id}
            color="gray.500"
            as={iconsMap[platform.slug]}
          />
        );
      })}
    </HStack>
  );
}
