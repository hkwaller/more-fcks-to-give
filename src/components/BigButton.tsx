import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

function BigButton(props: Props) {
  return (
    <Box
      px={20}
      py={10}
      pos="relative"
      borderWidth={4}
      borderColor="black"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'rotate(8deg)',
        backgroundColor: 'blue',
        zIndex: -1,
      }}
    >
      <Text>Start</Text>
    </Box>
  )
}

export default BigButton
