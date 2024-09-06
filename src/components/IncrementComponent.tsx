import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store'; 
import { incrementByAmountStart } from './../features/example/exampleSlice';
import { Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useDebounce } from '../hooks/useDebounce';

const IncrementComponent: React.FC = React.memo(() => {
  const [value, setValue] = useState<number>(0);
  const dispatch = useDispatch();
  const { value: currentValue, loading, error } = useSelector((state: RootState) => state.example);
  const toast = useToast();

  // Debounce the value to prevent frequent dispatches
  const debouncedValue = useDebounce(value, 500);

  const handleIncrement = useCallback(() => {
    dispatch(incrementByAmountStart(debouncedValue));
  }, [dispatch, debouncedValue]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]); 

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Box>
        <Text fontSize="2xl">Current Value: {currentValue}</Text>
      </Box>
      <Input
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="Enter a number"
        size="md"
        variant="outline"
      />
      <Button
        onClick={handleIncrement}
        isLoading={loading}
        colorScheme="teal"
        size="md"
      >
        Increment
      </Button>
    </VStack>
  );
});

export default IncrementComponent;
