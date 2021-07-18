import { useState } from 'react';

function usePhotoGrid() {
  const [isOpen, setIsOpen] = useState(null);

  const handleIsOpen = (curIndex) => {
    setIsOpen(curIndex);
  };

  return { isOpen, handleIsOpen };
}

export default usePhotoGrid;
